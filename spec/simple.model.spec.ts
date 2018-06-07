import { Simple } from "../src/simple.model";

describe("simple", () => {
  let simple: Simple;

  beforeEach(() => {
    simple = new Simple("Test Class");
  });

  it('should stringify to it\'s name', () => {
    expect(simple.toString()).toBe('Test Class');
  });
});
