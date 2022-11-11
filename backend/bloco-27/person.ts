abstract class Person {
  constructor(private _name: string, private _birthDate: Date) {}
  public get name(): string {
    return this._name;
  }

  public get birthDate(): Date {
    return this._birthDate;
  }

  public set name(name: string) {
    if (name.length < 3) throw new Error(`${name} must be greater than 3`);
    this._name = name;
  }

  public set birthDate(birthDate: Date) {
    const actualDate = new Date().getTime();
    if (birthDate.getDate() > actualDate)
      throw new Error(`${birthDate} is not a valid date.`);
    const year = birthDate.getFullYear();
    if (year > 120) throw new Error("is not a valid year.");
    this._birthDate = birthDate;
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

interface Employee {
  registration: number;
  salary: number;
  admissionDate: Date;
  generateRegistration(): number;
}

class Subject {
  constructor(private _name: string) {
    this.name = _name;
  }

  public get name(): string {
    return this._name;
  }

  public set name(v: string) {
    if (v.length < 3) throw new Error(`${v} must be greater than 3.`);
    this._name = v;
  }
}

class Teacher extends Person implements Employee {
  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate);
    this._salary = salary;
    this._registration = this.generateRegistration();
    this._admissionDate = new Date();
  }
  _registration: number;
  _salary: number;
  _admissionDate: Date;
  generateRegistration(): number {
    return Math.random() * 100000;
  }

  public set salary(v: number) {
    if (v < 0) throw new Error("salary must not be negative");
    this._salary = v;
  }

  public set registration(v: number) {
    if (v < 100000)
      throw new Error("registration must be greater than 6 characters");
    this._registration = v;
  }

  public set admissionDate(v: Date) {
    if (v.getDate() > Date.now())
      throw new Error("the date must not be in the future");
    this._admissionDate = v;
  }
}
