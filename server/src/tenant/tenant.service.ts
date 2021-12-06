import { Injectable } from '@nestjs/common';
import { Account } from '../account/entities/account.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TenantService {
  private account: Account | null = null;

  constructor(@InjectModel(Account) private accountModel: typeof Account) {}

  get tenant() {
    return this.account;
  }

  set tenant(tenant: Account) {
    this.account = tenant;
  }

  async setTenantBy(subdomain: string) {
    this.tenant = await this.accountModel.findOne({
      where: {
        subdomain,
      },
      rejectOnEmpty: true,
    });
  }
}
