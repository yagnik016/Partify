import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { ReviewsService } from './reviews.service';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  async create(@Body() createReviewDto: any) {
    return this.reviewsService.create(createReviewDto);
  }

  @Get('vendor/:vendorId')
  async findByVendor(@Param('vendorId') vendorId: string) {
    return this.reviewsService.findByVendor(vendorId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.reviewsService.findById(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.reviewsService.delete(id);
  }
}
