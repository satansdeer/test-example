import { greet } from "./pureFunctions"

describe("greet", () => {
  it("returns greeting with a given name", () => {
    expect(greet("Test")).toEqual("Hello, Test!")
  })
})