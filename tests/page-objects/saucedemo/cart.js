
const cartCommands = {
  itemPriceValue() {
    this.getText('@inventoryItemPrice')
  },

  itemQuantityValue() {
    this.getText('@cartQuantity')
  },

  clickCheckout() {
    this.click('@checkoutButton')
  }


};

module.exports = {
  commands: [
    cartCommands
  ],

  elements: {
    cartQuantity: {selector: '.cart_quantity'},
    inventoryItemPrice: {selector: '.inventory_item_price'},
    checkoutButton: {selector: 'button[id=checkout]'},

  }
};