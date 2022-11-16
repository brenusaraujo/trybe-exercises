import { IPlant } from "../interfaces";

export default class Plants implements IPlant {
  constructor(
    id: string,
    breed: string,
    needsSun: boolean,
    origin: string,
    size: number
  ) {
    this._id = id;
    this._breed = breed;
    this._needsSun = needsSun;
    this._origin = origin;
    this._size = size;
  }
  _id: string;
  _breed: string;
  _needsSun: boolean;
  _origin: string;
  _size: number;
  specialCare?: { waterFrequency: number } | undefined;

  public get id(): string {
    return this._id;
  }
  public get breed(): string {
    return this._breed;
  }
  public get needsSun(): boolean {
    return this._needsSun;
  }
  public get origin(): string {
    return this._origin;
  }
  public get size(): number {
    return this._size;
  }
  public set id(v: string) {
    this._id = v;
  }
  public set breed(v: string) {
    this._breed = v;
  }
  public set needsSun(v: boolean) {
    this._needsSun = v;
  }
  public set origin(v: string) {
    this._origin = v;
  }
  public set size(v: number) {
    this._size = v;
  }
}
