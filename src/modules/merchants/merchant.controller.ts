import { Request, Response } from "express";
import { MerchantService } from "./merchant.service";

export class MerchantController {
    constructor(private merchantService: MerchantService) {}

    create = async (req: Request, res: Response) => {
        try {
           const { name, email } = req.body;
           const merchant = await this.merchantService.createMerchant({ name, email })
           return res.status(201).json(merchant)
        } catch (error: any) {
            return res.status(400).json({ message: error.message ?? 'Error creating merchant'})
        }
    }
}