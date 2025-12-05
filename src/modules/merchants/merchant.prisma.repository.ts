import { prisma } from "../../config/database";
import { CreateMerchantDTO } from "./dto/create-merchant.dto";
import { Merchant } from "./merchant.entity";
import { IMerchantRepository } from "./merchant.repository";


export class MerchantPrismaRepository implements IMerchantRepository {
    async create(data: CreateMerchantDTO): Promise<Merchant> {
        const merchant = await prisma.merchant.create({
            data: {
                name: data.name,
                email: data.email
            }
        })

        return merchant;
    }

    findById(id: string): Promise<Merchant | null> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<Merchant[]> {
        throw new Error("Method not implemented.");
    }
}