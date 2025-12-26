import { Request, Response } from "express";
import { MerchantService } from "./../../../application/services/merchant.service";

export class MerchantController {
    constructor(private merchantService: MerchantService) { }

    create = async (req: Request, res: Response) => {
        try {
            const { name, email } = req.body;
            const merchant = await this.merchantService.createMerchant({ name, email })
            return res.status(201).json(merchant)
        } catch (error: any) {
            return res.status(400).json({ message: error.message ?? 'Error creating merchant' })
        }
    };

    findById = async (req: Request, res: Response) => {
        const { id } = req.params

        if (!id || id.trim()) {
            return res.status(400).json({ message: "ID is required" })
        }

        try {
            const merchant = await this.merchantService.getMerchantById(id)

            if (!merchant) {
                return res.status(404).json({ message: 'Merchant not found' })
            }

            return res.json(merchant)

        } catch (error: any) {
            return res.status(400).json({ message: error.message ?? 'Error when searching for id' })
        }
    }

    list = async (req: Request, res: Response) => {

        try {
            const merchants = await this.merchantService.listMerchants()
            return res.json(merchants)
        } catch (error: any) {
            return res.status(400).json({ message: error.message ?? 'Error while searching' })

        }

    }
}