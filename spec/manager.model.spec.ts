import Manager from "../src/manager.model";
import { Title } from "../src/title.enum";

describe("manager", () => {
  let raju: Manager;

  beforeEach(() => {
    raju = new Manager(1, 'raju', 'gandhi', 10000, Title.Junior);
  });

  it('should be constructed', () => {
    expect(raju).toBeDefined();
  });

  it('should stringify correctly', () => {
    expect(raju.toString()).toEqual('raju gandhi (EID: 1) - Title: Junior');
  });
});
