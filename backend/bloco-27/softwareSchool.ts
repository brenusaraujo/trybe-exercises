class studentEnrolled {
  enrollment: number;
  name: string;
  examGrade1: number;
  examGrade2: number;
  examGrade3: number;
  examGrade4: number;
  constructor(
    e: number,
    n: string,
    eg1: number,
    eg2: number,
    eg3: number,
    eg4: number
  ) {
    this.enrollment = e;
    this.name = n;
    this.examGrade1 = eg1;
    this.examGrade2 = eg2;
    this.examGrade3 = eg3;
    this.examGrade4 = eg4;
  }

  public get firstGrade(): number {
    return this.examGrade1;
  }
  public get secondGrade(): number {
    return this.examGrade2;
  }
  public get thirdGrade(): number {
    return this.examGrade3;
  }
  public get fourthGrade(): number {
    return this.examGrade4;
  }

  public get getEnrollment(): number {
    return this.enrollment;
  }

  public get getName(): string {
    return this.name;
  }

  public get sumAllGrades(): number {
    return (
      this.examGrade1 + this.examGrade2 + this.examGrade3 + this.examGrade4
    );
  }

  public get average(): number {
    const sumAllGrades = this.sumAllGrades;
    return sumAllGrades / 4;
  }
}
