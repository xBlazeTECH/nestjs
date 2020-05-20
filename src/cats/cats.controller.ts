import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './classes/cat.class';

@ApiBearerAuth()
@ApiTags('cats')
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  // Create a Cat
  @Post()
  @ApiOperation({ summary: 'Create Cat' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  // Get All Cats
  @Get()
  @ApiOperation({ summary: 'Get all Cats' })
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  // Get Specific Cat
  @Get(':id')
  @ApiOperation({ summary: 'Get a Cat'})
  @ApiResponse({
      status: 200,
      description: 'The found record',
      type: Cat,
  })
  async findOne(@Param('id') id: string): Promise<Cat> {
      return this.catsService.findOne(+id);
  }

  // Update a Cat
  @Post(':id')
  @ApiOperation({ summary: 'Update a cat'})
  @ApiResponse({
    status: 200,
    description: 'The updated cat',
    type: Cat,
  })
  async update(@Param('id') id: string): Promise<Cat> {
      return this.catsService.update(+id);
  }

  // Delete a Cat
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a cat'})
  @ApiResponse({ status: 200, description: 'The updated record', type: Cat})
  async delete(@Param('id') id: string): Promise<Cat> {
      return this.catsService.delete(+id);
  }
}
