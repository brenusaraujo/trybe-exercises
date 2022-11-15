import IPlant from "./plants";

export default interface Database {
  savePlant(plant: IPlant): Promise<IPlant>;
}
