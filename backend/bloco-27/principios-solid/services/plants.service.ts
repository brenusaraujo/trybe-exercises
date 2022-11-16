import plantsModel from "../models/plants.model";

const getPlantsService = async () => {
  const result = await plantsModel.getPlants();
  return result;
}