import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { ToNumber } from '../../common/db/to-number-decorator';

@Table({
  tableName: 'accounts',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class Account extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: false })
  subdomain: string;

  @ToNumber
  @Column({ allowNull: false, defaultValue: 0, type: DataType.DECIMAL(10, 2) })
  balance: number;
}
