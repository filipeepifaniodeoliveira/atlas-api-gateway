import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FinanceDocument = Finance & Document;

@Schema()
export class Finance {
  @Prop()
  name: string;

  @Prop()
  type: string;

  @Prop()
  value: string;

  @Prop()
  date: Date;
}

export const FinanceSchema = SchemaFactory.createForClass(Finance);
