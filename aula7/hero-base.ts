abstract class hero {

    private codenome:String;
    private idsecreta:String;

    constructor(){};


    getCodenome():String{
        return this.codenome;
    }

    setCodenome(codenome:String):void{
        this.codenome = codenome;
    }

    getIdsecreta():String{
        return this.idsecreta;
    }

    setIdsecreta(idsecreta:string):void{
        this.idsecreta = idsecreta;
    }
    
}

interface Habilidades{
    superPoder?:String
    pericia?:String
    poder:Number
    
    getFraqueza():String;

}

export {hero,Habilidades}