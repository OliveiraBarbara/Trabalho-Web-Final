import { LocalTreinamento } from './entities/local-treinamento.entity';
import { Injectable } from '@nestjs/common';
import { CreateLocalTreinamentoDto } from './dto/create-local-treinamento.dto';
import { UpdateLocalTreinamentoDto } from './dto/update-local-treinamento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { RecordNotFoundException } from '@exceptions';
import { Endereco } from 'src/endereco/entities/endereco.entity';

@Injectable()
export class LocalTreinamentoService {
  constructor(
    @InjectRepository(LocalTreinamento)
    private repository: Repository<LocalTreinamento>,
    @InjectRepository(Endereco)
    private enderecoRepository: Repository<Endereco>
  ) {}

  create(createLocalTreinamentoDto: CreateLocalTreinamentoDto) {
    const local = this.repository.create(createLocalTreinamentoDto);
    /*local.enderecos = [];
    createLocalTreinamentoDto.enderecos?.forEach((enderecos) => {
      local.enderecos.push(this.enderecoRepository.create(enderecos));
    });*/
    return this.repository.save(local);
  }

  findAll(
    options: IPaginationOptions,
    search?: string
  ): Promise<Pagination<LocalTreinamento>> {
    const where: FindOptionsWhere<LocalTreinamento> = {};
    if (search) {
      where.horaFunc = ILike(`%${search}`);
    }

    return paginate<LocalTreinamento>(this.repository, options, { where });
  }

  async findOne(idLocal: number): Promise<LocalTreinamento> {
    const local = await this.repository.findOneBy({ idLocal });

    if (!local) {
      throw new RecordNotFoundException();
    }

    return local;
  }

  async update(
    idLocal: number,
    updateLocalTreinamentoDto: UpdateLocalTreinamentoDto
  ): Promise<LocalTreinamento> {
    await this.repository.update(idLocal, updateLocalTreinamentoDto);
    const local = await this.repository.findOneBy({ idLocal });
    if (!local) {
      throw new RecordNotFoundException();
    }

    return local;
  }

  async remove(idLocal: number) {
    const local = await this.repository.delete({ idLocal });

    if (!local?.affected) {
      throw new RecordNotFoundException();
    }

    return true;
  }
}
