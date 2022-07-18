
const util = require('util');
const menuXpath = '//div[contains(@class, "hdtb-mitem")][contains(., "%s")]';

const inventoryCommands = {
  addToCartFirstItem() {
    this.click('@addToCart')
  },

  firstItemValue() {
    this.getText('@iventoryItemPrice')
  },

  shopingCartBadgeValue() {
    this.getText('@shoppingCartLink')
  },

  clickShoppingCart() {
    this.click('@shoppingCartLink')
  }
};

module.exports = {
  commands: [
    inventoryCommands
  ],

  elements: {
    results: {selector: '.title'},
    addToCart: {selector: 'button[id=add-to-cart-sauce-labs-backpack]'},
    removeButton: {selector: 'button[id=remove-sauce-labs-backpack]'},
    iventoryItemPrice: {selector: 'div[class=inventory_item_price]'},
    shoppingCartLink: {selector: 'a[class=shopping_cart_link]'},
    shoopingCartBadge: {selector: 'span[class=shopping_cart_badge]'}


  },

  sections: {
    filter: {
      selector: 'select[data-test=product_sort_container',
      commands: [inventoryCommands],
      elements: {
        all: {
          selector: util.format(menuXpath, 'All'),
          locateStrategy: 'xpath',
          index: 0
        }
      }
    }
  }
};