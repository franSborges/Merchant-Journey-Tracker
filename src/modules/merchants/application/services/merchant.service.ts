import { CreateMerchantDTO } from '../dto/merchant.dto';
import { Merchant } from '../../domain/entities/merchant.entity';
import { IMerchantRepository } from '../../domain/repositories/merchant.repository';

export class MerchantService {
   constructor(private merchantRepository: IMerchantRepository) {}

   async createMerchant(data: CreateMerchantDTO): Promise<Merchant> {
    if (!data.name || data.name.trim().length === 0) {
        throw new Error('Name is required');
    }

    const merchant = await this.merchantRepository.create(data);
    return merchant
   }

   async getMerchantById(id: string): Promise<Merchant | null> {
    const merchant = await this.merchantRepository.findById(id)
    return merchant
   }

   async listMerchants(): Promise<Merchant[]> {
    return this.merchantRepository.findAll()
   }
}