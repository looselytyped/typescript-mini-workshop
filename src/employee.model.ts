export class Employee {
  constructor(
    public employeeId: number,
    public firstName: string,
    public lastName: string,
    public salary: number) { }

  public fullName(): string {
    return `${this.firstName} ${this.lastName}`
  }

  public toString(): string {
    return `${this.fullName()} (EID: ${this.employeeId})`;
  }
}
