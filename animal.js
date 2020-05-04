class Home {
    constructor(name) {
        this.name = name;
        this.array = [];
    }
    adoptPet() {
        this.array += this.name;
    }
    makeAllSounds() {
        if (this.array == dog1 || this.array == dog2) {
            console.log(dog.sounds());
        }
        else if (this.array == cat){
            return cat.sounds();
        }
    }
}

class Animal extends Home {
    constructor(name) {
        super(name);
    }
    sound() {
        console.log('sound...');
    }
    eat() {
        console.log(`${this.name} eats`);
    }
}

class Dog extends Home {
    constructor(name) {
        super(name);
        this.name = 'Rax';
    }
    sounds() {
        console.log(`Dog barks`);
    }
}

class Cat extends Home {
    constructor(name) {
        super(name);
        this.name = 'Stormy';
    }
    sounds() {
        console.log(`Cat meows`);
    }
}

var home = new Home();
var dog1 = new Dog();
var dog2 = new Dog();
var cat = new Cat();


home.makeAllSounds();
home.adoptPet(dog1);
home.makeAllSounds();