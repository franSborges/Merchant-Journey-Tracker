import { Merchant } from './../merchant.entity';
import { CreateMerchantDTO } from './../dto/create-merchant.dto';

export interface IMerchantRepository {
    create(data: CreateMerchantDTO): Promise<Merchant>;
    findById(id: string): Promise<Merchant | null>;
    findAll(): Promise<Merchant[]>;
}
