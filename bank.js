function Bank(customers) {
  this.customers = [];
}

Bank.prototype.addCustomer = function(customer) {
    this.customers.push({
      name: customer,
      balance: 0,
    });
}

Bank.prototype.deposit = function(customer, amount) {
  for(var i = 0; i < this.customers.length; i++) {
    if(amount > 0 && this.customers[i].name === customer) {
      bank.customers[i].balance += amount;
    }
  }
}

Bank.prototype.withdraw = function(customer, amount) {
  for(var j = 0; j < this.customers.length; j++) {
    if(bank.customers[j].balance - amount >= 0 && this.customers[j].name === customer) {
      bank.customers[j].balance -= amount;
    }
  }
}

Bank.prototype.printAccount = function(customer) {
  for(var k = 0; k < this.customers.length; k++) {
    if(bank.customers[k].name === customer) {
      console.log(bank.customers[k].name + " account is " + bank.customers[k].balance);
    }
  }
}

var bank = new Bank();
bank.addCustomer('Sheldor');
bank.printAccount('Sheldor');
bank.deposit('Sheldor', 10);
bank.printAccount('Sheldor');
bank.addCustomer('Raj');
bank.printAccount('Raj');
bank.deposit('Raj', 10000);
bank.printAccount('Raj');
bank.withdraw('Raj', 100);
bank.printAccount('Sheldor'); // this should print 'Sheldor account is 10'
bank.printAccount('Raj'); // this should print 'Raj account is 9900'
