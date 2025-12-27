import { Merchant } from '../entities/merchant.entity';
import { CreateMerchantDTO } from '../../application/dto/merchant.dto';

export interface IMerchantRepository {
    create(data: CreateMerchantDTO): Promise<Merchant>;
    findById(id: string): Promise<Merchant | null>;
    findAll(): Promise<Merchant[]>;
}
