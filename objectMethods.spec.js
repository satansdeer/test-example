import {Cart} from './objectMethods'

describe("Cart", () => {
  describe("addItem", () => {
    it("adds an item to the items list", () => {
      const cart = new Cart()

      cart.addItem("tomato")

      expect(cart.items).toEqual(["tomato"])
    })
  })
})