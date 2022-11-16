import PlantsDatabase from "../classes/plantsDatabase";
// import Plants from "../classes/plants";
import { IPlant } from "../interfaces";
const plantsDatabase = new PlantsDatabase();
// const newPlant = new Plants(
//   "cb9aea00-d3fa-44b0-a4b4-7bd4c1a32770",
//   "Orquídea",
//   true,
//   "Brazil",
//   99
// );

const getPlants = async (): Promise<IPlant[] | null> => {
  const allPlants = await plantsDatabase.getPlants();
  return allPlants;
};

const getPlantsByID = async (id: string): Promise<IPlant | null> => {
  const plant = await plantsDatabase.getPlantById(id);
  return plant;
};

export default { getPlants, getPlantsByID };
