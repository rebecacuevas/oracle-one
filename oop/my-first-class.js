//Importación de clases
import {Account} from './account.js';
import {Client} from './cliente.js';

// Objeto o instancia
const marge = new Client();
const homer = new Client();

const margeAccount = new Account();
const homerAccount = new Account();

// Propiedades o atributos
marge.clientName = "Marge";
marge.clientId = "MAF21453";

homer.clientName = "Homer";
homer.clientId = "HSA1341";

margeAccount.bank = "HSBC";
margeAccount.number = "34532563256";
margeAccount.client = marge;

homerAccount.bank = "Banamemex";
homerAccount.number = "35325325368";
homerAccount.client = homer;

console.log(margeAccount);
console.log(homerAccount);

margeAccount.depositAccount(100);
homerAccount.depositAccount(100);

console.log(homerAccount.checkBalance());

homerAccount.transfer(100, margeAccount);
console.log(homerAccount.checkBalance());
console.log(margeAccount.checkBalance());