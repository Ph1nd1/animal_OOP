class Animal {
  constructor(name) {
    this.name = name;
  }

  sounds() {
    let sound = "Animal Sounds";
    console.log(sound);
    return(sound);
  }

  eat() {
    let animalEat = `${this.name} eats`;
    console.log(animalEat);
    return(animalEat);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
    this.name = "Rax";
  }
  sounds() {
    let dogSound = "Dog barks";
    console.log(dogSound);
    return dogSound;
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
    this.name = "Stormy";
  }
  sounds() {
    let catSound = `Cat meows`;
    console.log(catSound);
    return catSound;
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
      console.log(this.adoptedAnimals[i].sounds())
      return this.adoptedAnimals[i].sounds();
    }
  }
}

module.exports = {Animal, Cat, Dog, Home}