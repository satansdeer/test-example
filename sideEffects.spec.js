import { notify } from "./sideEffects"

jest.spyOn(window, 'alert').mockImplementation(() => {})

describe("notify", () => {
  it("alerts the given message", () => {
    notify("Test message")
    expect(window.alert).toBeCalledWith("Test message")
  })
})