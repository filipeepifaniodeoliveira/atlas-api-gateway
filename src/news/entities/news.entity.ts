import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NewsDocument = News & Document;

@Schema()
export class News {
  @Prop()
  title: string;

  @Prop()
  author: string;

  @Prop()
  type: string;

  @Prop()
  image: string;

  @Prop()
  description: string;

  @Prop()
  subDescription: string;

  @Prop()
  date: string;

  @Prop()
  credits: string;

  @Prop()
  array: Array<string>;
}

export const NewsSchema = SchemaFactory.createForClass(News);
