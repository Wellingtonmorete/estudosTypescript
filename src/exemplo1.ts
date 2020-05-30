import { PessoaFisica } from "./pessoaFisica";

let p = document.createElement('p');
var ola:string = "nome wellington";
var numero:number = 5 ;
p.textContent = ola;
document.body.appendChild(p);

enum day{NOME}
console.log(
    "teste"
);


let pf = new PessoaFisica("welligton","Morete",22992647009,"162.558.787-24");

pf.print();

