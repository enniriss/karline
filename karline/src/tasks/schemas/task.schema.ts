import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Document } from 'mongoose';


export type TasksDocument = HydratedDocument<Tasks>;

@Schema({ collection: 'Tasks' })

export class Tasks extends Document {
  @Prop()
  title: string;
  @Prop()
  checked: string;

}

export const TasksSchema = SchemaFactory.createForClass(Tasks);