
const checkoutStep1PageCommands = {
  fillFirstName(name) {
    this.updateValue('@firstName', name)
  },

  fillLastName(lname) {
    this.updateValue('@lastName', lname)
  },

  fillPostalCode(code) {
    this.updateValue('@postalCode', code)
  },

  clickContinue() {
    this.click('@continueButton')
  }
};

module.exports = {
  commands: [
    checkoutStep1PageCommands
  ],

  elements: {
    firstName: {selector: 'input[id=first-name]'},
    lastName: {selector: 'input[id=last-name]'},
    postalCode: {selector: 'input[id=postal-code]'},
    continueButton: {selector: 'input[id=continue]'}

  }
};