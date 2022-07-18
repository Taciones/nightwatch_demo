
const loginCommands = {
  fillUsername(user) {
    this.waitForElementVisible('@username', 1000)
    .updateValue('@username', user)
  },

  fillPassword(pass) {
    this.waitForElementVisible('@username', 1000)
    .updateValue('@password', pass)
  },
  
  submit() {
    this.waitForElementVisible('@submitButton', 1000)
      .click('@submitButton');    
    this.pause(1000);

    return this; // for command-chaining
  }
};

module.exports = {
  url: 'https://www.saucedemo.com/',

  commands: [
    loginCommands
  ],

  elements: {
    username: {
      selector: 'input[name=user-name]'
    },
    
    password: {
      selector: 'input[name=password]'
    },

    submitButton: {
      selector: 'input[id="login-button"]'
    }
  }
};
