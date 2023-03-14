import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { News, NewsDocument } from './entities/news.entity';

@Injectable()
export class NewsService {
  constructor(@InjectModel(News.name) private newsModel: Model<NewsDocument>) {}

  create(createNewsDto: CreateNewsDto) {
    const news = new this.newsModel(createNewsDto);
    return news.save();
  }

  findAll() {
    return this.newsModel.find();
  }
}
