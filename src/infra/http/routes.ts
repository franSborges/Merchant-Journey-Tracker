import { Router } from "express";
import { merchantRouter } from "./../../modules/merchants/merchant.routes";

const routes = Router();

routes.use('/merchants', merchantRouter);

export { routes };