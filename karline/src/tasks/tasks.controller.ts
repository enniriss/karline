import { Body, Controller, Delete, Get, Param, Post, Put, Req, Render, Res } from '@nestjs/common';
import { TaskService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Tasks } from './schemas/task.schema';
import { Request, Response } from 'express';

@Controller('tasks')
export class TaskController {
  
    constructor(private readonly taskService: TaskService) {}
    // Read
    @Get()
    async getAll():Promise<Tasks[]>{
      return this.taskService.findAll();                      
    }
    // Create
    @Post()
    async create(@Body() taskData: any, @Res() res: Response, req: Request): Promise<void> {
      try {
          // Votre code de création ici
          await this.taskService.create(taskData);
          res.redirect('/');

      } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Une erreur est survenue lors de la création' });
      }
  }
  // Lire une tâche unique
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Tasks> {
    return this.taskService.findOne(id);
  }

  //Modifie
  @Put(':id')  
  
  async update(@Param('id') id: string, @Body() newValues: Partial<Tasks>) {
    return this.taskService.update(id, newValues);
  }
  //Supprime
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.taskService.delete(id);
  }
}