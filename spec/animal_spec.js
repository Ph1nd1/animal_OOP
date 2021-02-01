const {Animal, Cat, Dog, Home} = require('../src/animal')

describe('Animal class', () => {
    let spotty
    beforeEach(() => {
        spotty = new Animal('Spotty')
    })

    it('should have a sounds method', () => {
        expect(spotty.sounds()).toBe('Animal Sounds')
    })
    it('should have an eat method', () => {
        expect(spotty.eat()).toBe('Spotty eats')
    })
})

describe('Cat class extended from Animal class', () => {
    let cat
    beforeEach(() => {
        cat = new Cat()
    })

    it('should have a sounds method', () => {
        expect(cat.sounds()).toBe('Cat meows')
    })
    it('should inherit eat method', () => {
        expect(cat.eat()).toBe('Stormy eats')
    })
})

describe('Dog class extended from Animal class', () => {
    let dog
    beforeEach(() => {
        dog = new Dog()
    })

    it('should have a sounds method', () => {
        expect(dog.sounds()).toBe('Dog barks')
    })
    it('should inherit eat method', () => {
        expect(dog.eat()).toBe('Rax eats')
    })
})

describe('Home class', () => {
    let home
    beforeEach(() => {
        home = new Home()
    })

    it('should use Dog class to adopt a pet and make a pet sound', () => {
        let dog = new Dog();
        home.adoptPet(dog);
        expect(home.makeAllSounds()).toEqual('Dog barks')
    })
    it('should use Cat class to adopt a pet and make a pet sound', () => {
        let cat = new Cat();
        home.adoptPet(cat);
        expect(home.makeAllSounds()).toBe('Cat meows')
    })
})