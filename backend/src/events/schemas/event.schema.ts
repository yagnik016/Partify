import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Event extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  plannerId: string;

  @Prop({ required: true })
  budget: number;

  @Prop({ default: 0 })
  spent: number;

  @Prop({ default: [] })
  vendors: string[];

  @Prop({ default: [] })
  guests: any[];

  @Prop({ default: [] })
  tasks: any[];
}

export const EventSchema = SchemaFactory.createForClass(Event);
