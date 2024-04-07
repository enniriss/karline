import { Body, Controller, Delete, Get, Param, Post, Put, Req, Render } from '@nestjs/common';
import { TaskService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Tasks } from './schemas/task.schema';



@Controller('tasks')
export class TaskController {
  
    constructor(private readonly taskService: TaskService) {}

    @Get()
    async getAll():Promise<Tasks[]>{
      return this.taskService.findAll();                      
    }
    @Post()
    async createTask(@Body() taskData: any): Promise<any> {
        return this.taskService.create(taskData);
    }
  
  @Get()
  @Render('task-form')
  async findAll(): Promise<Tasks[]> {
    return this.taskService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Tasks> {
    return this.taskService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string): Promise<Tasks> {
    return this.taskService.update(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.taskService.delete(id);
  }
}