import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  async create(@Body() createEventDto: any) {
    return this.eventsService.create(createEventDto);
  }

  @Get('planner/:plannerId')
  async findByPlanner(@Param('plannerId') plannerId: string) {
    return this.eventsService.findByPlanner(plannerId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.eventsService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateEventDto: any) {
    return this.eventsService.update(id, updateEventDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.eventsService.delete(id);
  }
}
