import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum BookingStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

@Schema({ timestamps: true })
export class Booking extends Document {
  @Prop({ required: true })
  eventId: string;

  @Prop({ required: true })
  vendorId: string;

  @Prop({ required: true })
  plannerId: string;

  @Prop({ required: true })
  date: Date;

  @Prop()
  notes?: string;

  @Prop({ required: true, enum: BookingStatus, default: BookingStatus.PENDING })
  status: BookingStatus;

  @Prop()
  amount?: number;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
