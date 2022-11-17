import { CreateLocalTreinamentoDto } from './../local-treinamento/dto/create-local-treinamento.dto';
import { CreateExercicioDto } from './../exercicio/dto/create-exercicio.dto';
/* eslint-disable @typescript-eslint/no-inferrable-types */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  DefaultValuePipe,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { InstrutorService } from './instrutor.service';
import { CreateInstrutorDto } from './dto/create-instrutor.dto';
import { UpdateInstrutorDto } from './dto/update-instrutor.dto';
import { ApiTags } from '@nestjs/swagger';
import { Instrutor } from './entities/instrutor.entity';
import { CurrentUser } from 'src/shared/decorators';

@ApiTags('instrutor')
@Controller('instrutor/')
export class InstrutorController {
  constructor(private readonly instrutorService: InstrutorService) {}

  @Post('add-instrutor')
  create(@Body() createInstrutorDto: CreateInstrutorDto) {
    return this.instrutorService.create(createInstrutorDto);
  }

  @Post('add-exercicio')
  createPref(
    @CurrentUser() cliente: Instrutor,
    @Body() exercicio: CreateExercicioDto
  ) {
    return this.instrutorService.createExercicio(cliente, exercicio);
  }

  @Post('add-local')
  createLocal(
    @CurrentUser() cliente: Instrutor,
    @Body() local: CreateLocalTreinamentoDto
  ) {
    return this.instrutorService.createLocal(cliente, local);
  }

  @Get('ver-instrutor')
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
    @Query('search') search: string
  ) {
    return this.instrutorService.findAll({ page, limit }, search);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.instrutorService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateInstrutorDto: UpdateInstrutorDto
  ) {
    return this.instrutorService.update(id, updateInstrutorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.instrutorService.remove(id);
  }
}
