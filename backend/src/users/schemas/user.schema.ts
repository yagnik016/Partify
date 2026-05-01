import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum UserRole {
  PLANNER = 'planner',
  VENDOR = 'vendor',
}

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true, enum: UserRole })
  role: UserRole;

  @Prop()
  phone?: string;

  @Prop()
  avatar?: string;

  @Prop()
  company?: string;

  @Prop({ default: [] })
  events: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
