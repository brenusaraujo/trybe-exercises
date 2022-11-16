// // Plants.ts
import { IPlant } from "./interfaces";
// import fs from "fs/promises";

// interface IOpsInfo {
//   createdPlants: number;
// }

class Plants {
  public initPlant(plant: IPlant): IPlant {
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
}

export default Plants;
