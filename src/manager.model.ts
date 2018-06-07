import { Employee } from "./employee.model";
import { Title } from "./title.enum";

export default class Manager extends Employee {
  constructor(
    employeeId: number,
    firstName: string,
    lastName: string,
    salary: number,
    public title: Title) {
    super(employeeId, firstName, lastName, salary);
  }

  public toString() {
    return `${super.toString()} - Title: ${this.title}`;
  }
}
