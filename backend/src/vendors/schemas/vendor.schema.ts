import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Vendor extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  phone?: string;

  @Prop()
  location?: string;

  @Prop()
  description?: string;

  @Prop({ default: [] })
  images: string[];

  @Prop({ type: [String] })
  services: string[];

  @Prop({ type: { min: 0, default: 0 } })
  priceRange: { min: number; max: number };

  @Prop({ default: 0 })
  rating: number;

  @Prop({ default: [] })
  reviews: string[];
}

export const VendorSchema = SchemaFactory.createForClass(Vendor);
