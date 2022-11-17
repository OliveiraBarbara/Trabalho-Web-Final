import { AuthGuard_Cliente } from 'src/auth/guards/cliente-auth.guard';
import { AuthGuard_Intrutor } from 'src/auth/guards/instrutor-auth.guard';
/* eslint-disable @typescript-eslint/no-inferrable-types */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { LocalTreinamentoService } from './local-treinamento.service';
import { CreateLocalTreinamentoDto } from './dto/create-local-treinamento.dto';
import { UpdateLocalTreinamentoDto } from './dto/update-local-treinamento.dto';
import { ApiTags } from '@nestjs/swagger';
import { CurrentUser } from 'src/shared/decorators';
import { Instrutor } from 'src/instrutor/entities/instrutor.entity';

@ApiTags('local-treinamento')
@Controller('local-treinamento/')
export class LocalTreinamentoController {
  constructor(
    private readonly localTreinamentoService: LocalTreinamentoService
  ) {}

  @Post('add-localTreinamento')
  create(@Body() createLocalTreinamentoDto: CreateLocalTreinamentoDto) {
    return this.localTreinamentoService.create(createLocalTreinamentoDto);
  }

  @UseGuards(AuthGuard_Intrutor)
  @Get('ver-localTreinamento')
  findAll(
    @CurrentUser() cliente: Instrutor,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
    @Query('search') search: string
  ) {
    return this.localTreinamentoService.findAll({ page, limit }, search);
  }

  @Get(':id')
  findOne(@Param('id') idLocal: number) {
    return this.localTreinamentoService.findOne(idLocal);
  }

  @Patch(':id')
  update(
    @Param('id') idLocal: number,
    @Body() updateLocalTreinamentoDto: UpdateLocalTreinamentoDto
  ) {
    return this.localTreinamentoService.update(
      idLocal,
      updateLocalTreinamentoDto
    );
  }

  @Delete(':id')
  remove(@Param('id') idLocal: number) {
    return this.localTreinamentoService.remove(idLocal);
  }
}
