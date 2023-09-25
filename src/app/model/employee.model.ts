export interface IEmployee {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: Date;
  basicSalary: number;
  status: string;
  group: string;
  description: Date;
}

export class Employee {
  constructor(
    public id: number,
    public userName: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public birthDate: Date,
    public basicSalary: number,
    public status: string,
    public group: string,
    public description: Date
  ) {}
}
