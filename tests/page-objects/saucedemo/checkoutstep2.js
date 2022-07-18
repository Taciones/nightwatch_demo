
const checkoutStep2PageCommands = {
  clickFinish() {
    this.click('@butonFinish')
  },
};

module.exports = {
  commands: [
    checkoutStep2PageCommands
  ],

  elements: {
    itemPrice: {selector: 'div[class="inventory_item_price"]'},
    totalPrice: {selector: 'div[class="summary_total_label"]'},
    butonFinish: {selector: 'button[id="finish"]'}
  }
};