class Animal {
    constructor(name) {
        this.name = name;
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

var dog = new Dog();

dog.eat();
dog.sounds();

var cat = new Cat();

cat.eat();
cat.sounds();

