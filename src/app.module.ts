import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { FinancesModule } from './finances/finances.module';
import { NewsModule } from './news/news.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://filipeepifaniooliveira:Vagalumes@arenasport.p1ccroc.mongodb.net/arena?retryWrites=true&w=majority',
    ),
    UsersModule,
    FinancesModule,
    NewsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
