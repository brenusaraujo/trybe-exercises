interface Enrollable {
  enrollment: number;
  generateEnrollment(): number;
}

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
  generateRegistration(): number {
    return Math.random() * 100000;
  }
}

class Student extends Person implements Enrollable {
  private _examsGrades: number[] = [];
  private _workGrades: number[] = [];

  constructor(name: string, birthDate: Date, enrollment: number) {
    super(name, birthDate);
    enrollment = this.generateEnrollment();
  }
  generateEnrollment(): number {
    return Math.random() * 100000;
  }

  public get enrollment(): number {
    return this.enrollment;
  }
  public get examsGrades(): number[] {
    return this._examsGrades;
  }
  public get workGrades(): number[] {
    return this._workGrades;
  }
  public set enrollment(v: number) {
    if (v < 16) throw new Error("the enrollment must be greater than 16");
    this.enrollment = v;
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

class Employee extends Person implements Enrollable {
  constructor(name: string, birthDate: Date, s: number, registration: number) {
    super(name, birthDate);
    // this.enrollment = this.generateEnrollment();
    registration = this.generateRegistration();
    this._salary = s;
    this._admissionDate = new Date();
  }
  enrollment: number = this.generateEnrollment();
  generateEnrollment(): number {
    return Math.random() * 120000;
  }
  _salary: number;
  _admissionDate: Date;
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

class Teacher extends Employee {
  constructor(
    name: string,
    birthDate: Date,
    salary: number,
    subject: Subject,
    registration: number
  ) {
    super(name, birthDate, salary, registration);
    this._subject = subject;
  }
  _subject: Subject;

  public get subject(): Subject {
    return this._subject;
  }

  public set salary(v: number) {
    if (v < 0) throw new Error("salary must not be negative");
    this._salary = v;
  }

  public set registration(v: number) {
    if (v < 100000)
      throw new Error("registration must be greater than 6 characters");
    this.registration = v;
  }

  public set admissionDate(v: Date) {
    if (v.getDate() > Date.now())
      throw new Error("the date must not be in the future");
    this._admissionDate = v;
  }
}

class Evaluation {
  constructor(_score: number, _teacher: Teacher, _type: string) {}

  public get score(): number {
    return this.score;
  }
  public get teacher(): Teacher {
    return this.teacher;
  }
  public get type(): string {
    return this.type;
  }

  public set score(v: number) {
    if (v < 0) throw new Error("the score must not be negative.");
    this.score = v;
  }

  public set type(v: string) {
    if (v === "prova") {
      if (this.score > 25)
        throw new Error("the score must not be greater than 25.");
      this.type = v;
    } else if (v === "trabalho") {
      if (this.score > 50)
        throw new Error("the score must not be greater than 50.");
      this.type = v;
    }
  }
}

class EvaluationResult {
  constructor(evaluation: Evaluation, score: number) {}

  public get evaluation(): Evaluation {
    return this.evaluation;
  }

  public get score(): number {
    return this.score;
  }

  public set evaluation(v: Evaluation) {
    this.evaluation = v;
  }

  public set score(v: number) {
    if (v < 0) throw new Error("the score must not be negative");
    if (v > this.evaluation.score)
      throw new Error(" the score must not be greater than the evaluation");
    this.score = v;
  }
}
