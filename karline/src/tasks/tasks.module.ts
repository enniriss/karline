import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskController } from './tasks.controller';
import { TaskService } from './tasks.service';
import { TasksSchema,Tasks } from './schemas/task.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Tasks.name, schema: TasksSchema }])],
  controllers: [TaskController],
  providers: [TaskService]
})
export class TaskModule {}