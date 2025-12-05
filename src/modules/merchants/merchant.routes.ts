import { Router } from "express";
import { MerchantPrismaRepository } from "./merchant.prisma.repository";
import { MerchantService } from './merchant.service';
import { MerchantController } from "./merchant.controller";

const merchantRouter = Router();

const merchantRepository = new MerchantPrismaRepository();
const merchantService = new MerchantService(merchantRepository);
const merchantController = new MerchantController(merchantService);

merchantRouter.post('/', merchantController.create);

export { merchantRouter };