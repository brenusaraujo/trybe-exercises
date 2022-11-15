import IPlant from "./plants";

export default interface Database {
  getPlants(): Promise<IPlant[]>;
  getPlantById(id: string): Promise<IPlant | null>;
  removePlantById(id: string): Promise<IPlant | null>;
  getPlantsThatNeedsSunWithId(id: string): Promise<IPlant[]>
  editPlant(plantId: string, newPlant: IPlant): Promise<IPlant>
  savePlant(plant: IPlant): Promise<IPlant>;
}
