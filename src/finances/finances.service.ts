import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateFinanceDto } from './dto/create-finance.dto';
import { UpdateFinanceDto } from './dto/update-finance.dto';
import { Finance, FinanceDocument } from './entities/finance.entity';

@Injectable()
export class FinancesService {
  constructor(
    @InjectModel(Finance.name) private financeModel: Model<FinanceDocument>,
  ) {}

  create(createFinanceDto: CreateFinanceDto) {
    const finance = new this.financeModel(createFinanceDto);
    return finance.save();
  }

  findAll() {
    return this.financeModel.find();
  }

  findOne(id: string) {
    return this.financeModel.findById(id);
  }

  update(id: string, updateFinanceDto: UpdateFinanceDto) {
    return this.financeModel.findByIdAndUpdate(
      { _id: id },
      { $set: updateFinanceDto },
      { new: true },
    );
  }

  remove(id: string) {
    return this.financeModel.deleteOne({ _id: id }).exec();
  }
}
