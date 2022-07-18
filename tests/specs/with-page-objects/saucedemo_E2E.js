describe('quick tests to validate E2E scenarios on SauceDemo', function() {
  const homePage = browser.page.saucedemo.login(); // first page-object
  const inventoryPage = browser.page.saucedemo.iventory();
  const cartPage = browser.page.saucedemo.cart();
  const checkoutStep1Page = browser.page.saucedemo.checkoutstep1();
  const checkoutStep2Page = browser.page.saucedemo.checkoutstep2();
  const checkoutStepCompletePage = browser.page.saucedemo.checkoutstepcomplete();



  before(async () => homePage.navigate());

  after(async (browser) => browser.quit());

  it('should login successfully', function(browser) {
    //login steps
    homePage.fillUsername('standard_user');
    homePage.fillPassword('secret_sauce');
    homePage.submit();
    inventoryPage.expect.element('@results').to.be.present;

  });

  it('should add item to cart successfully', function(browser) {
    inventoryPage.expect.element('@shoppingCartLink').to.not.have.property('span[class=shopping_cart_badge]'); //expects that the cart is empty
    inventoryPage.addToCartFirstItem();
    const shoppingCartBadgeValue = inventoryPage.shopingCartBadgeValue();
    if (shoppingCartBadgeValue >= 1) {
      //pass
      
    } else {
      console.log('Shooping cart not updated.')
    }
    inventoryPage.expect.element('@removeButton').to.be.visible;
  });

  it('should checkout the item added to cart successfully', function() {
    const firstItemValue = inventoryPage.firstItemValue();
    inventoryPage.clickShoppingCart();
    const cartItemPrice = cartPage.itemPriceValue();
    if (cartItemPrice == firstItemValue) {
      //pass
    } else {
      console.log('The price of first item is different at cart page.');
    }
    cartPage.expect.element('@cartQuantity').text.to.contain('1');
    cartPage.clickCheckout();
  })

  it('should fill in the delivery information', function() {
    checkoutStep1Page.fillFirstName('Rafa');
    checkoutStep1Page.fillLastName('Bambino');
    checkoutStep1Page.fillPostalCode('06830');
    checkoutStep1Page.expect.element('@firstName').to.have.value.that.equals("Rafa");
    checkoutStep1Page.expect.element('@lastName').to.have.value.that.equals("Bambino");
    checkoutStep1Page.expect.element('@postalCode').to.have.value.that.equals("06830");
    checkoutStep1Page.clickContinue();
  })

  it('should have all information correct in overview', function() {
    checkoutStep2Page.expect.element('@itemPrice').text.to.contain("$29.99");
    checkoutStep2Page.expect.element('@totalPrice').text.to.contain("$32.39");
  })

  it('should finish the order and validate thank you note', function() {
    checkoutStep2Page.clickFinish();
    checkoutStepCompletePage.expect.element('@completeMessage').text.to.contain('THANK YOU FOR YOUR ORDER')
  })
});
