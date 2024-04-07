import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tasks, TasksDocument } from './schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksModel } from './interfaces/task.interface';

@Injectable()
export class TaskService {
    constructor(@InjectModel(Tasks.name) private readonly taskModel: Model<TasksDocument>) {}

  async create(CreateTaskDto: CreateTaskDto): Promise<Tasks> {
    const createdTask = new this.taskModel(CreateTaskDto);
    return await createdTask.save();
  }

  async update(id: string): Promise<Tasks> {
    await this.taskModel.updateOne({ _id: id});
    return this.taskModel.findOne({ _id: id});
  }

  async findAll(): Promise<Tasks[]> {
    return this.taskModel.find().exec();
  }

  async findOne(id: string): Promise<Tasks> {
    return this.taskModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedTask = await this.taskModel
      .findByIdAndDelete({ _id: id })
      .exec();
    return deletedTask;
  }
}