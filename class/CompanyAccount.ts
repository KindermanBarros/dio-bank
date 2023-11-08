import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  private debt: number = 0;

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  };

  getLoan = (amount: number): void => {
    if (amount > 0 && this.balance > 200000) {
      this.debt += amount;
      this.balance += amount;
      console.log(
        `The sum of $${amount} was added to your debt, resulting in $${this.debt} of debt.`
      );
    } else {
      console.log("This loan amount is invalid.");
    }
  };

  payLoan = (amount: number): void => {
    if (this.debt > 0 && amount > 0 && amount <= this.balance) {
      this.debt -= amount;
      this.balance -= amount;
      console.log(
        `The sum of $${amount} was paid, resulting in $${this.debt} of debt and a balance of $${this.balance}.`
      );
    } else {
      console.log("This paying amount is invalid.");
    }
  };

  getDebt = (): number => {
    return this.debt;
  };
}
