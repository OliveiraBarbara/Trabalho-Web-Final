import { RecordNotFoundException } from '@exceptions';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';
import { Endereco } from 'src/endereco/entities/endereco.entity';
import { CreateExercicioDto } from 'src/exercicio/dto/create-exercicio.dto';
import { Exercicio } from 'src/exercicio/entities/exercicio.entity';
import { ExercicioService } from 'src/exercicio/exercicio.service';
import { CreateLocalTreinamentoDto } from 'src/local-treinamento/dto/create-local-treinamento.dto';
import { LocalTreinamento } from 'src/local-treinamento/entities/local-treinamento.entity';
import { LocalTreinamentoService } from 'src/local-treinamento/local-treinamento.service';
import { Repository, FindManyOptions, ILike } from 'typeorm';
import { CreateInstrutorDto } from './dto/create-instrutor.dto';
import { UpdateInstrutorDto } from './dto/update-instrutor.dto';
import { Instrutor } from './entities/instrutor.entity';

@Injectable()
export class InstrutorService {
  constructor(
    @InjectRepository(Instrutor) private repository: Repository<Instrutor>,
    @InjectRepository(Endereco)
    private enderecoRepository: Repository<Endereco>,
    @InjectRepository(Exercicio)
    private exercicioRepository: Repository<Exercicio>,
    @InjectRepository(LocalTreinamento)
    private localRepository: Repository<LocalTreinamento>
  ) {}

  async create(createInstrutorDto: CreateInstrutorDto): Promise<Instrutor> {
    const instrutor: Instrutor = this.repository.create(createInstrutorDto);
    instrutor.enderecos = [];
    createInstrutorDto.enderecos?.forEach((endereco) => {
      instrutor.enderecos.push(this.enderecoRepository.create(endereco));
    });
    instrutor.exercicios = [];
    createInstrutorDto.exercicios?.forEach(async (exercicio) => {
      instrutor.exercicios.push(
        await this.exercicioRepository.create(exercicio)
      );
    });
    instrutor.academias = [];
    createInstrutorDto.academias?.forEach((academia) => {
      instrutor.academias.push(this.localRepository.create(academia));
    });
    instrutor.role = 'instrutor';
    const { senha, ...result } = await this.repository.save(instrutor);

    return result as Instrutor;
  }

  async createExercicio(
    instrutor: Instrutor,
    exercicio: CreateExercicioDto
  ): Promise<Instrutor> {
    instrutor.exercicios.push(this.exercicioRepository.create(exercicio));

    return await this.repository.save(instrutor);
  }

  async createLocal(
    instrutor: Instrutor,
    local: CreateLocalTreinamentoDto
  ): Promise<Instrutor> {
    instrutor.academias.push(this.localRepository.create(local));

    return await this.repository.save(instrutor);
  }

  findAll(
    options: IPaginationOptions,
    search: string
  ): Promise<Pagination<Instrutor>> {
    const where: FindManyOptions<Instrutor> = {};

    if (search) {
      where.where = [
        { nome: ILike(`%${search}%`) },
        { modalidade: ILike(`%${search}%`) },
      ];
    }

    return paginate<Instrutor>(this.repository, options, where);
  }

  async findOne(id: number) {
    const instrutor = await this.repository.findOneBy({ id });

    if (!instrutor) {
      throw new RecordNotFoundException();
    }

    return instrutor;
  }

  async update(
    id: number,
    updateInstrutorDto: UpdateInstrutorDto
  ): Promise<Instrutor> {
    const { enderecos, exercicios, academias, ...dadosUpdate } =
      updateInstrutorDto;
    await this.repository.update(id, dadosUpdate);
    const instrutor = await this.repository.findOneBy({ id });

    for (let index = 0; index < instrutor.enderecos.length; index++) {
      this.enderecoRepository.update(
        instrutor.enderecos[index].id,
        instrutor[index]
      );
    }

    if (!instrutor) {
      throw new RecordNotFoundException();
    }

    return instrutor;
  }

  async remove(id: number): Promise<boolean> {
    const instrutor = await this.repository.delete(id);

    if (!instrutor?.affected) {
      throw new RecordNotFoundException();
    }

    return true;
  }
}
