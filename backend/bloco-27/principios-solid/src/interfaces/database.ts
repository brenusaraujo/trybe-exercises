export default interface Database<T> {
  initPlant(plant: T): T;
  getPlants(): Promise<T[]>;
  getPlantById(id: string): Promise<T | null>;
  removePlantById(id: string): Promise<T | null>;
  getPlantsThatNeedsSunWithId(id: string): Promise<T[]>;
  editPlant(plantId: string, newPlant: T): Promise<T>;
  savePlant(plant: T): Promise<T>;
}
