import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vendor } from './schemas/vendor.schema';

@Injectable()
export class VendorsService {
  constructor(@InjectModel(Vendor.name) private vendorModel: Model<Vendor>) {}

  async create(createVendorDto: any): Promise<Vendor> {
    const createdVendor = new this.vendorModel(createVendorDto);
    return createdVendor.save();
  }

  async findAll(): Promise<Vendor[]> {
    return this.vendorModel.find().exec();
  }

  async findByCategory(category: string): Promise<Vendor[]> {
    return this.vendorModel.find({ category }).exec();
  }

  async findById(id: string): Promise<Vendor | null> {
    return this.vendorModel.findById(id).exec();
  }

  async search(query: string): Promise<Vendor[]> {
    return this.vendorModel.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { category: { $regex: query, $options: 'i' } },
      ],
    }).exec();
  }

  async updateRating(id: string, rating: number): Promise<void> {
    const vendor = await this.vendorModel.findById(id);
    if (vendor) {
      const newRating = ((vendor.rating * (vendor.reviews.length - 1)) + rating) / vendor.reviews.length;
      await this.vendorModel.findByIdAndUpdate(id, { rating: newRating });
    }
  }
}
