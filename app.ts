import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SecretAccount } from './class/SecretAccount';

// Create a PeopleAccount instance for an individual
const individualAccount = new PeopleAccount(123456789, "John Smith", 98765);

// Perform operations on the individual account
individualAccount.deposit(2000);
individualAccount.getBalance(); // Check the balance

// Change the account holder's name
individualAccount.setName("Alice Johnson");
console.log("Account holder name: " + individualAccount.getName());

// Get and set the document ID
console.log("Document ID: " + individualAccount.doc_id);
individualAccount.doc_id = 987654321; // Update the document ID
console.log("Updated Document ID: " + individualAccount.doc_id);

// Create a CompanyAccount instance
const companyAccount = new CompanyAccount("Company XYZ", 54321);

// Deposit some initial funds
companyAccount.deposit(100000);

// Check the balance and debt
companyAccount.getBalance(); // Output: 100000
console.log("Current debt: $" + companyAccount.getDebt()); // Output: 0

// Get a loan
companyAccount.getLoan(50000);
console.log("Current debt: $" + companyAccount.getDebt()); // Output: 50000
companyAccount.getBalance(); // Output: 150000

// Pay off part of the debt
companyAccount.payLoan(20000);
console.log("Current debt: $" + companyAccount.getDebt()); // Output: 30000
companyAccount.getBalance(); // Output: 130000