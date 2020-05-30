export class Cliente{
    name:string;
    sobrenome:string;
    celular:number;
    constructor(name:string, sobrenome:string,celular:number){
        this.name = name;
        this.sobrenome = sobrenome;
        this.celular = celular;
    }

    print():void{
        console.log("nome:"+this.name+"sobrenome:"+this.sobrenome+" celular:"+this.celular)
    }
}