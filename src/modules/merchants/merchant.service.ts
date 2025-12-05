import { CreateMerchantDTO } from './dto/create-merchant.dto';
import { Merchant } from './merchant.entity';
import { IMerchantRepository } from './merchant.repository';

export class MerchantService {
   constructor(private merchantRepository: IMerchantRepository) {}

   async createMerchant(data: CreateMerchantDTO): Promise<Merchant> {
    if (!data.name || data.name.trim().length === 0) {
        throw new Error('Name is required');
    }

    const merchant = await this.merchantRepository.create(data);
    return merchant
   }
}