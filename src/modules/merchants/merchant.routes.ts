import { Router } from "express";
import { MerchantPrismaRepository } from "./repository/merchant.prisma.repository";
import { MerchantService } from './service/merchant.service';
import { MerchantController } from "./controller/merchant.controller";

const merchantRouter = Router();

const merchantRepository = new MerchantPrismaRepository();
const merchantService = new MerchantService(merchantRepository);
const merchantController = new MerchantController(merchantService);

merchantRouter.post('/', merchantController.create);
merchantRouter.get('/', merchantController.list);
merchantRouter.get('/:id', merchantController.findById)

export { merchantRouter };