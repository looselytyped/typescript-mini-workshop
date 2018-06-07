import Manager from "../src/manager.model";
import { Title } from "../src/title.enum";
import Department from "../src/department.model";
import { Employee } from "../src/employee.model";

describe("department", () => {
  let specialOps: Department;

  beforeEach(() => {
    let manager = new Manager(1, "Jason", "Bourne", 50000, Title.Senior);
    let employeeOne = new Employee(2, "Alex", "Cocklin", 30000, );
    let employeeTwo = new Employee(3, "Marie", "Webb", 40000, );

    specialOps = new Department("Special Ops",
      manager,
      [
        employeeOne,
        employeeTwo,
      ])
  });

  it('should be constructed', () => {
    expect(specialOps).toBeDefined();
  });

  it('should hire employees', () => {
    expect(specialOps.employees.length).toEqual(2);
    specialOps.hire(new Employee(4, "Carlos", "Cain", 30000));
    expect(specialOps.employees.length).toEqual(3);
  });

  it('should average salaries correctly', () => {
    expect(specialOps.averageSalary()).toEqual(40000);
  });
});
