//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class Expresso {
    constructor(flavor,sugar,heat){
        this.flavor = flavor,
        this.sugar = sugar,
        this.heat = heat;
    }

    // set flavor(a){
    //    return this.flavor = a 
    // }

    
    get taste(){
        return `It seems to be ${this.flavor} expresso.`
    }

    get temp(){
        return `It is ${this.heat}!`
    }

    get sweetness(){
        return `The beverage contains ${this.sugar} spoons of sugar`
    }
}

const choco = new Expresso('Cocoa',"3","very hot");
console.log(
    choco.sweetness,
    choco.taste,
    choco.temp)