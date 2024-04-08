import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Made extends Document {
  @Prop({ required: true })
  made: string;
    
  // Autres champs d'utilisateur

}

export const MadeSchema = SchemaFactory.createForClass(Made);