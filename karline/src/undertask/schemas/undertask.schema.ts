import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { HydratedDocument } from 'mongoose';

export type UnderTaskDocument = HydratedDocument<UnderTask>;

@Schema()
export class UnderTask extends Document {
  @Prop()
  title: string;

  @Prop()
  checked: string;

  @Prop({ type: [{ type: String }] })
  subtasks: string[];
}

export const UnderTaskSchema = SchemaFactory.createForClass(UnderTask);
