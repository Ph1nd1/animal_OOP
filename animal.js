class Animal {
    constructor(name) {
        this.name = name;
    }
    sounds() {
        console.log('sound...');
    }
    eat() {
        console.log(`${this.name} eats`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
        this.name = 'Rax';
    }
    sounds() {
        console.log(`Dog barks`);
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
        this.name = 'Stormy';
    }
    sounds() {
        console.log(`Cat meows`);
    }
}

let adoptedAnimals = [];

class Home {
    adoptPet(newPet) {
        adoptedAnimals.push(newPet);
    }

    makeAllSounds() {
        for (let i = 0; i < adoptedAnimals.length; i++) {
            adoptedAnimals[i].sounds();
        }
    }
}
var dog = new Dog();

dog.eat();
dog.sounds();

var cat = new Cat();

cat.eat();
cat.sounds();

var home = new Home();
var dog1 = new Dog();
var dog2 = new Dog();
var cat = new Cat();

home.adoptPet(dog1);
home.adoptPet(cat);
home.adoptPet(dog2);
home.makeAllSounds();