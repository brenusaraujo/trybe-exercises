import { IPlant } from "../interfaces";
import Database from "../interfaces/database";

export default class PlantsModel implements Database {
  constructor(parameters) {}
  getPlants(): Promise<IPlant[]> {
    throw new Error("Method not implemented.");
  }
  getPlantById(id: string): Promise<IPlant | null> {
    throw new Error("Method not implemented.");
  }
  removePlantById(id: string): Promise<IPlant | null> {
    throw new Error("Method not implemented.");
  }
  getPlantsThatNeedsSunWithId(id: string): Promise<IPlant[]> {
    throw new Error("Method not implemented.");
  }
  editPlant(plantId: string, newPlant: IPlant): Promise<IPlant> {
    throw new Error("Method not implemented.");
  }
  async savePlant(plant: IPlant): Promise<IPlant> {
    throw new Error("Method not implemented.");
  }
}
