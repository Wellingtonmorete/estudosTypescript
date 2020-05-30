"use strict";
exports.__esModule = true;
var Cliente = /** @class */ (function () {
    function Cliente(name, sobrenome, celular) {
        this.name = name;
        this.sobrenome = sobrenome;
        this.celular = celular;
    }
    Cliente.prototype.print = function () {
        console.log("nome:" + this.name + "sobrenome:" + this.sobrenome + " celular:" + this.celular);
    };
    return Cliente;
}());
exports.Cliente = Cliente;
