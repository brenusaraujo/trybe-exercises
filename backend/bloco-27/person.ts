class Person {
  constructor(private _name: string, private _birthDate: Date) {}
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

class Student extends Person {
  private _enrollment: number = Math.random() * 10000;
  private _examsGrades: number[] = [];
  private _workGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
  }

  public get enrollment(): number {
    return this._enrollment;
  }
  public get examsGrades(): number[] {
    return this._examsGrades;
  }
  public get workGrades(): number[] {
    return this._workGrades;
  }
  public set enrollment(v: number) {
    if (v < 16) throw new Error("the enrollment must be greater than 16");
    this._enrollment = v;
  }
  public set examsGrades(v: number[]) {
    if (v.length < 4)
      throw new Error("the exams grades array must be less than 4");
    this._examsGrades = v;
  }
  public set workGrades(v: number[]) {
    if (v.length < 2)
      throw new Error("the work grades array must be less than 4");
    this._workGrades = v;
  }

  public sumGrades(): number {
    return this._examsGrades.reduce((acc, curr) => acc + curr, 0);
  }

  public sumAverageGrade(): number {
    return this.sumGrades() / this._examsGrades.length;
  }
}
