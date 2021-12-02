import {
  TransactionCategory,
  TransactionCategoryList,
  TransactionType,
  TransactionTypeList,
} from '../types/transaction.type';
import {
  IsIn,
  IsISO8601,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateTransactionDto {
  @IsNotEmpty()
  @IsISO8601()
  payment_date: Date;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  description: string;

  @IsNotEmpty()
  @IsIn(TransactionCategoryList)
  category: TransactionCategory;

  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  @IsIn(TransactionTypeList)
  type: TransactionType;
}
