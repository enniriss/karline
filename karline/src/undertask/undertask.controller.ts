
import { Body, Controller, Delete, Get, Param, Post, Put, Req, Render, Res } from '@nestjs/common';
import { UnderTaskService } from './undertask.service';
import { UnderTask } from './schemas/undertask.schema';
import { CreateUnderTaskDto } from './dto/create-undertask.dto';
import { Request, Response } from 'express';

@Controller('under-tasks')
export class UnderTaskController {
  constructor(private readonly underTaskService: UnderTaskService) {}

  //Create
  @Post()
  async create(@Body() underTaskData: any, @Res() res: Response, req: Request): Promise<void> {
    try {
        // Votre code de création ici
        await this.underTaskService.create(underTaskData);
        res.redirect('/');

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur est survenue lors de la création' });
    }
}
  //Lire tous
  @Get()
  async findAll(): Promise<UnderTask[]> {
    return this.underTaskService.findAll();
  }
  //Lecture unique 
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UnderTask> {
    return this.underTaskService.findOne(id);
  }
  //Update
  @Put(':id')
  async update(@Param('id') id: string, @Body() Promise: UnderTask): Promise<UnderTask> {
    return this.underTaskService.update(id);
  }
  //Supprime
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.underTaskService.delete(id);
  }
}
