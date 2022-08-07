export class Account {
    client;
    number;
    #balance; //atributo privado
    bank;

    // El constructor se ejecuta al momento de crear la instancia
    constructor() {
        this.client = null;
        this.#balance = 0;
        this.number = "";
        this.bank = "";
    }

    // método
    depositAccount(value) {
        if(value > 0){
            //this.balance = this.balance + valor;
            this.#balance += value;
        }
    }

    withdrawal(value) {
        if(value <= this.#balance){
            this.#balance -=  value;
        } 
    }

    checkBalance(){
        return this.#balance;
    }

    transfer(value, toAccount){
        this.withdrawal(value);
        toAccount.depositAccount(value);
    }
}
