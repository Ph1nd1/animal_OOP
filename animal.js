class Animal {
  constructor(name) {
    this.name = name;
  }

  sounds() {
    console.log("Animal Sounds");
  }

  eat() {
    console.log(`${this.name} eats`);
  }
}

class Dog extends Animal {
  sounds() {
    console.log(`Dog barks`);
  }
}

class Cat extends Animal {
  sounds() {
    console.log(`Cat meows`);
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
      this.adoptedAnimals[i].sounds();
    }
  }
}