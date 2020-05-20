import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class Cat extends Document {

  @ApiProperty({ example: 'Kitty', description: 'The name of the cat.'})
  name: string;

  @ApiProperty({ example: 1, description: 'The age of the cat' })
  @Prop()
  age: number;

  @ApiProperty({ example: 'Maine Coon', description: 'The breed of the cat'})
  @Prop()
  breed: string;

}

export const CatSchema = SchemaFactory.createForClass(Cat);