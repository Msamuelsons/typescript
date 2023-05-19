// Dio Banking

// nome, account number
// Depositar, Sacar


import { PeopleAccount } from './class/PeopleAccount';
import { CompanyAccount } from './class/CompanyAccount';

const peopleAccount = new PeopleAccount(1, 'Anakin Skywalker', 1);
peopleAccount.deposit();

const companyAccount: CompanyAccount = new CompanyAccount('Obiwan Kenobi', 10);
companyAccount.deposit();