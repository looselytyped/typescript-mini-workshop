import { Employee } from "./employee.model";
import Manager from "./manager.model";

export default class Department {

  constructor(public name: string,
    public manager: Manager,
    public employees: Employee[]) { }

  public hire(employee: Employee): Department {
    this.employees.push(employee);
    return this;
  }

  public averageSalary(): number {
    return this.employees.reduce(((acc, emp) => acc + emp.salary), this.manager.salary) / (1 + this.employees.length);
  }
}
