import express from "express";
import plantsController from "../controllers/plants.controller";

const plantsRouter = express();
plantsRouter.get("/", plantsController.getPlantsController);
plantsRouter.get("/:id", plantsController.getPlantByIdController);
plantsRouter.delete("/:id", plantsController.deletePlantController);

export default plantsRouter;
