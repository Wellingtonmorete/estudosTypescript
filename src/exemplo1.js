"use strict";
exports.__esModule = true;
var pessoaFisica_1 = require("./pessoaFisica");
var p = document.createElement('p');
var ola = "nome wellington";
var numero = 5;
p.textContent = ola;
document.body.appendChild(p);
var day;
(function (day) {
    day[day["NOME"] = 0] = "NOME";
})(day || (day = {}));
console.log("teste");
var pf = new pessoaFisica_1.PessoaFisica("welligton", "Morete", 22992647009, "162.558.787-24");
pf.print();
