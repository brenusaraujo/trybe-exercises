import { IPlant, IOpsInfo, Database } from "../interfaces";
// import Plants from "./plants";
import fs from "fs/promises";

export default class PlantsDatabase implements Database<IPlant> {
  private readonly plantsFile = "plantsData.json";
  private readonly opsFile = "opsInfo.json";

  constructor() // breed: string, // id: string,
  // needsSun: boolean,
  // origin: string,
  // size: number
  {
    // super(id, breed, needsSun, origin, size);
  }
  initPlant(plant: IPlant): IPlant {
    const { id, breed, needsSun, origin, specialCare, size } = plant;
    const waterFrequency = needsSun
      ? size * 0.77 + (origin === "Brazil" ? 8 : 7)
      : (size / 2) * 1.33 + (origin === "Brazil" ? 8 : 7);

    const newPlant: IPlant = {
      id,
      breed,
      needsSun,
      origin,
      specialCare: {
        ...specialCare,
        waterFrequency
      },
      size
    };

    return newPlant;
  }
  async getPlants(): Promise<IPlant[]> {
    const plantsRaw = await fs.readFile(this.plantsFile, { encoding: "utf8" });
    const plants: IPlant[] = JSON.parse(plantsRaw);
    return plants;
  }
  async getPlantById(id: string): Promise<IPlant | null> {
    const plantsRaw = await fs.readFile(this.plantsFile, { encoding: "utf8" });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const plantById = plants.find((plant) => plant.id === id);
    if (!plantById) return null;
    return plantById;
  }
  async removePlantById(id: string): Promise<IPlant | null> {
    const plantsRaw = await fs.readFile(this.plantsFile, { encoding: "utf8" });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const removedPlant = plants.find((plant) => plant.id === id);
    if (!removedPlant) return null;

    const newPlants = plants.filter((plant) => plant.id !== id);
    await fs.writeFile(this.plantsFile, JSON.stringify(newPlants));

    return removedPlant;
  }
  async getPlantsThatNeedsSunWithId(id: string): Promise<IPlant[]> {
    const plantsRaw = await fs.readFile(this.plantsFile, { encoding: "utf8" });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const filteredPlants = plants.filter(
      (plant) =>
        plant.id === id &&
        plant.needsSun &&
        (!plant.specialCare || plant.specialCare.waterFrequency > 2)
    );

    return filteredPlants;
  }
  async editPlant(plantId: string, newPlant: IPlant): Promise<IPlant> {
    const plantsRaw = await fs.readFile(this.plantsFile, { encoding: "utf8" });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const updatedPlants = plants.map((plant) => {
      if (plant.id === plantId) return newPlant;
      return plant;
    });

    await fs.writeFile(this.plantsFile, JSON.stringify(updatedPlants));
    return newPlant;
  }
  async savePlant(plant: IPlant): Promise<IPlant> {
    const plantsRaw = await fs.readFile(this.plantsFile, { encoding: "utf8" });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const newPlant = this.initPlant({ ...plant });
    plants.push(newPlant);

    const opsInfoRaw = await fs.readFile(this.opsFile, { encoding: "utf8" });
    let { createdPlants }: IOpsInfo = JSON.parse(opsInfoRaw);
    createdPlants += 1;
    await fs.writeFile(this.opsFile, JSON.stringify({ createdPlants }));

    await fs.writeFile(this.plantsFile, JSON.stringify(plants));
    return newPlant;
  }
}
