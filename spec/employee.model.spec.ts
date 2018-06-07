import { Employee } from "../src/employee.model";

describe("employee", () => {
  let raju: Employee;

  beforeEach(() => {
    raju = new Employee(1, 'raju', 'gandhi', 10000);
  });

  it('should be constructed', () => {
    expect(raju).toBeDefined();
  });

  it('should stringify correctly', () => {
    expect(raju.toString()).toEqual('raju gandhi (EID: 1)');
  });
});
