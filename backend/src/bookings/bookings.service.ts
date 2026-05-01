import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking, BookingStatus } from './schemas/booking.schema';

@Injectable()
export class BookingsService {
  constructor(@InjectModel(Booking.name) private bookingModel: Model<Booking>) {}

  async create(createBookingDto: any): Promise<Booking> {
    const createdBooking = new this.bookingModel(createBookingDto);
    return createdBooking.save();
  }

  async findByEvent(eventId: string): Promise<Booking[]> {
    return this.bookingModel.find({ eventId }).exec();
  }

  async findByVendor(vendorId: string): Promise<Booking[]> {
    return this.bookingModel.find({ vendorId }).exec();
  }

  async findByPlanner(plannerId: string): Promise<Booking[]> {
    return this.bookingModel.find({ plannerId }).exec();
  }

  async findById(id: string): Promise<Booking | null> {
    return this.bookingModel.findById(id).exec();
  }

  async updateStatus(id: string, status: BookingStatus): Promise<Booking | null> {
    return this.bookingModel.findByIdAndUpdate(id, { status }, { new: true }).exec();
  }

  async delete(id: string): Promise<Booking | null> {
    return this.bookingModel.findByIdAndDelete(id).exec();
  }
}
