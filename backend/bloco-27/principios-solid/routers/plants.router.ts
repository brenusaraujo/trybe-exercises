import express from "express";
import plantsController from "../controllers/plants.controller";

const plantsRouter = express();
plantsRouter.get("./", plantsController.getPlantsController);

export default plantsRouter;
