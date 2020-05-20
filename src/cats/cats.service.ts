import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './schemas/cat.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private readonly catModel: Model<Cat>) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findOne(id: number): Promise<Cat> {
    return this.catModel.findOne(id).exec();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async update(id: number): Promise<Cat> {
    return this.catModel.update(id).exec();
  }

  async delete(id: number): Promise<Cat> {
    return this.catModel.delete(id).exec();
  }
}
