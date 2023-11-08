import { CompanyAccount } from "./CompanyAccount"

export class SecretAccount extends CompanyAccount {
  gov_id: number

  constructor(gov_id: number, name: string, accountNumber: number){
    super(name, accountNumber)
    this.gov_id = gov_id
  }

  checkSpecialOfferEligibility = (): void => {
    if (this.balance >= 50000 && this.gov_id % 2 === 0) {
      console.log("You are eligible for a special offer!");
    } else {
      console.log("You are not eligible for the special offer.");
    }
  };

  getGovernmentID = (): number => {
    return this.gov_id;
  };

  setGovernmentID = (newGovID: number): void => {
    this.gov_id = newGovID;
    console.log("Government ID updated successfully.");
  };
}