import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UnderTaskController } from './undertask.controller';
import { UnderTaskService } from './undertask.service';
import { UnderTaskSchema,UnderTask } from './schemas/undertask.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: UnderTask.name, schema: UnderTaskSchema }])],
  controllers: [UnderTaskController],
  providers: [UnderTaskService]
})
export class UnderTaskModule {}