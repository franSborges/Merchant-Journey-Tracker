import { prisma } from "../../../../shared/config/database";
import { CreateMerchantDTO } from "../../application/dto/create-merchant.dto";
import { Merchant } from "../../domain/entities/merchant.entity";
import { IMerchantRepository } from "../../domain/repositories/merchant.repository";


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
        return prisma.merchant.findUnique({
            where: { id },
        })
    
    }


    findAll(): Promise<Merchant[]> {
      return prisma.merchant.findMany()
    }
}