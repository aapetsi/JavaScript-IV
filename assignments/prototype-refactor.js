/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.stomach = [];
    }

    greet() {
        return `Hello, I am ${this.name} and I am ${this.age} year(s) old.`
    }

    eat(food) {
        this.stomach.push(food)
    }

    poop() {
        this.stomach = [];
    }
}

class Car {
    constructor(model, name, make) {
        this.model = model;
        this.name = name;
        this.make = make;
        this.odometer = 0;
        this.canCrash = false;
        this.canRepair = false;
    }

    drive() {
        if(this.canCrash) {
            return `I crashed at ${this.odometer} miles!`
        }
        return this.odometer = distance;
    }

    crash() {
        this.canCrash = true;
    }

    canBeRepaired() {
        this.canRepair = true;
    }
}

class Baby extends Person {
    constructor(name, age) {
        super(name, age)
    }
    play() {
        return `Googoo gaga. I am playing`
    }
}