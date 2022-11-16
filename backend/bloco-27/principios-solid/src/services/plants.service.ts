import { IPlant } from "../interfaces";
import plantsModel from "../models/plants.model";

const getPlantsService = async (): Promise<IPlant[] | null> => {
  const result = await plantsModel.getPlants();
  return result;
};

const getPlantByIdService = async (id: string): Promise<IPlant | null> => {
  const result = await plantsModel.getPlantsByID(id);
  return result;
};

export default {
  getPlantsService,
  getPlantByIdService
};
