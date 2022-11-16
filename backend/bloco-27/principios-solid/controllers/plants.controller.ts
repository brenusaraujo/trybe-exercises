import { Request, Response } from "express";
import plantsService from "../services/plants.service";

const getPlantsController = async (req: Request, res: Response) => {
  const result = await plantsService.getPlantsService();
  return res.status(200).json({ result });
};

export default {
  getPlantsController
};
