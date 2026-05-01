import { Controller, Get, Post, Put, Body, Param, Query } from '@nestjs/common';
import { VendorsService } from './vendors.service';

@Controller('vendors')
export class VendorsController {
  constructor(private readonly vendorsService: VendorsService) {}

  @Post()
  async create(@Body() createVendorDto: any) {
    return this.vendorsService.create(createVendorDto);
  }

  @Get()
  async findAll(@Query('category') category?: string) {
    if (category) {
      return this.vendorsService.findByCategory(category);
    }
    return this.vendorsService.findAll();
  }

  @Get('search/:query')
  async search(@Param('query') query: string) {
    return this.vendorsService.search(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.vendorsService.findById(id);
  }
}
