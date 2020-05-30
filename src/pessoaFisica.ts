import { Cliente } from "./Cliente";

export class PessoaFisica extends Cliente {
    cpf:string;

    constructor(nome:string,sobrenome:string, celular:number,cpf:string){
        super(nome, sobrenome, celular);
        this.cpf = cpf;
    }
    print():void{
        super.print();
        console.log("CPF:"+this.cpf);
    }
}