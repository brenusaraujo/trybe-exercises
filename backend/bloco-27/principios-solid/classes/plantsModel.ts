import { IPlant } from "../interfaces";
import Database from "../interfaces/database";

export default class PlantsModel implements Database {
  constructor(parameters) {}
  async savePlant(plant: IPlant): Promise<IPlant> {
    throw new Error("Method not implemented.");
  }
}
