import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { FinancesModule } from './finances/finances.module';
import { NewsModule } from './news/news.module';
import { env } from 'process';

@Module({
  imports: [
    MongooseModule.forRoot(env.DATABASE_URL),
    UsersModule,
    FinancesModule,
    NewsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
