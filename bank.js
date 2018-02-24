function Bank(customers, balance) {
  this.customers = {};
}

Bank.prototype.addCustomer = function(customer) {
  this.customers.name = customer,
  this.customers.balance = 0
}

Bank.prototype.printAccount = function(customer) {
  console.log(this.customers.name + " account is " + this.customers.balance);
}

Bank.prototype.deposit = function(customer, amount) {
  return this.customers.balance += amount;
}

Bank.prototype.withdraw = function(customer, amount) {
  return this.customers.balance -= amount;
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
bank.printAccount('Raj');
