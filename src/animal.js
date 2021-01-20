class Animal {
  constructor(name) {
    this.name = name;
  }

  sounds() {
    return("Animal Sounds");
  }

  eat() {
    return(`${this.name} eats`);
  }
}

class Dog extends Animal {
  sounds() {
    return(`Dog barks`);
  }
}

class Cat extends Animal {
  sounds() {
    return(`Cat meows`);
  }
}

class Home {
  constructor() {
    this.adoptedAnimals = [];
  }

  adoptPet(newPet) {
    this.adoptedAnimals.push(newPet);
  }

  makeAllSounds() {
    for (let i = 0; i < this.adoptedAnimals.length; i++) {
      return this.adoptedAnimals[i].sounds();
    }
  }
}

module.exports = {Animal, Cat, Dog, Home}