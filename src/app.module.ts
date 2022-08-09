import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { FinancesModule } from './finances/finances.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://FilipeLeon:Vanguarda123@cluster0.sp4vnb5.mongodb.net/?retryWrites=true&w=majority',
    ),
    UsersModule,
    FinancesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
