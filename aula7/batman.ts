import {hero, Habilidades} from './hero-base'

export class Batman extends hero implements Habilidades{

    superPoder?: String;
    pericia?: String;
    poder: Number;
    
    
    constructor(){
        super()
    }
    
    getFraqueza(): String {
        return 'Alfred';
    }

    getArqueRival():String{
        return 'Coringa'
    }
    
    getSuperPoder():String{
        return this.superPoder;
    }
    
    setSuperPoder(superPoder:string):void{
        this.superPoder = superPoder;
    }
    
    getPericia():String{
        return `A(s) pericia(a) do ${this.getCodenome()} é(são): ${this.pericia}`
    }
    
    setPericia(pericia:String):void{
        this.pericia = pericia;
    }
    
    getPoder():Number{
        return this.poder;
    }
    
    setPoder(poder:Number):void{
        this.poder = poder;
    }
    
}
