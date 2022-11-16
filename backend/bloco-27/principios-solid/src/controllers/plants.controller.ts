import { Request, Response } from "express";
import plantsService from "../services/plants.service";

const getPlantsController = async (req: Request, res: Response) => {
  const result = await plantsService.getPlantsService();
  return res.status(200).json({ result });
};

const getPlantByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await plantsService.getPlantByIdService(id);
  return res.status(200).json(result);
};

const deletePlantController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await plantsService.deletePlantService(id);
  return res.status(201).json({ message: `${result} deleted` });
};

export default {
  getPlantsController,
  getPlantByIdController,
  deletePlantController
};
