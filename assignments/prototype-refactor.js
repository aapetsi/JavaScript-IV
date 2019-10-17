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

// Game Design
class Humanoid {
    constructor(humanoidProperties) {
        this.team = humanoidProperties.team;
        this.weapons = humanoidProperties.weapons;
        this.language = humanoidProperties.language;
        this.createdAt = humanoidProperties.createdAt;
        this.dimensions = humanoidProperties.dimensions;
        this.healthPoints = humanoidProperties.healthPoints;
        this.name = humanoidProperties.name;
    }

    greet() {
        return `${this.name} offers a greeting in ${this.language}.`
    }

    takeDamage() {
        return `${this.name} took damage.`
    }

    destroy() {
        return `${this.name} was removed from the game.`
    }
}

class GameObject extends Humanoid {

}

class CharacterStats extends Humanoid {

}

// test of game design
const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 1,
    },
    healthPoints: 5,
    name: "Bruce",
    team: "Mage Guild",
    weapons: [
        "Staff of Shamalama",
    ],
    language: "Common Tongue"
})

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.