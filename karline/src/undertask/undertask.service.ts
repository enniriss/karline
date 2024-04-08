import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UnderTask, UnderTaskDocument } from './schemas/undertask.schema';
import { CreateUnderTaskDto } from './dto/create-undertask.dto';
@Injectable()
export class UnderTaskService {
  constructor(@InjectModel(UnderTask.name) private taskModel: Model<UnderTaskDocument>) {}

  async create(CreateUnderTaskDto: CreateUnderTaskDto): Promise<UnderTask> {
    const createdTask = new this.taskModel(CreateUnderTaskDto);
    return createdTask.save();
  }

  async findAll(): Promise<UnderTask[]> {
    return this.taskModel.find().exec();
  }

  async findOne(id: string): Promise<UnderTask> {
    return this.taskModel.findOne({ _id: id }).exec();
  }

  async update(id: string): Promise<UnderTask> {
    await this.taskModel.updateOne({ _id: id});
    return this.taskModel.findOne({ _id: id});
  }
  async delete(id: string) {
    const deletedUnderTask = await this.taskModel
      .findByIdAndDelete({ _id: id })
      .exec();
    return deletedUnderTask;
  }
}
