export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): void => {
    this.name = name;
    console.log('Nome alterado com sucesso!');
  }

  getName = (): string => {
    return this.name;
  }

  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposit successful. New balance: ${this.balance}`);
      } else {
        console.log('Invalid deposit amount. Please provide a positive number.');
      }
    }
  }

  withdraw = (amount: number): void => {
    if (this.validateStatus()) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdraw successful. New balance: ${this.balance}`);
      } else {
        console.log('Invalid withdrawal amount or insufficient balance.');
      }
    }
  }

  getBalance = (): void => {
    console.log(`Current balance: ${this.balance}`);
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error('Conta inválida');
  }
}
