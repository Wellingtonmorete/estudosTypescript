"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Cliente_1 = require("./Cliente");
var PessoaFisica = /** @class */ (function (_super) {
    __extends(PessoaFisica, _super);
    function PessoaFisica(nome, sobrenome, celular, cpf) {
        var _this = _super.call(this, nome, sobrenome, celular) || this;
        _this.cpf = cpf;
        return _this;
    }
    PessoaFisica.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log("CPF:" + this.cpf);
    };
    return PessoaFisica;
}(Cliente_1.Cliente));
exports.PessoaFisica = PessoaFisica;
