class Person {
  constructor(public _name: string, public _birthDate: Date) {}
  public get name(): string {
    return this._name;
  }

  public get birthDate(): Date {
    return this._birthDate;
  }

  public set name(name: string) {
    this._name = name;
  }

  public set birthDate(birthDate: Date) {
    this._birthDate = birthDate;
  }

  /**
   * validateName
   */
  public validateName(value: string): void {
    if (value.length < 3) throw new Error(`${value} must be greater than 3`);
  }

  /**
   * validateDate
   */
  public validateDate(date: Date): void {
    const actualDate = new Date().getTime();
    if (date.getDate() > actualDate)
      throw new Error(`${date} is not a valid date.`);
  }

  /**
   * validateYear
   */
  public validateYear(date: Date): void {
    const year = date.getFullYear();
    if (year > 120) throw new Error("is not a valid year.");
  }
}
