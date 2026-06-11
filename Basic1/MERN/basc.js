 class Animal {
    constructor(name, sound) {
        this.name = name
        this.sound = sound
    }
}
 
class Dog extends Animal {
    constructor(name, sound, colour) {
        super(name, sound)
        this.colour = colour
    }
    get() {
        console.log(`Name  :${this.name}`);
        console.log(`Sound  :${this.sound}`);
        console.log(`colour  :${this.colour}`);
    }
}
class Cat extends Animal {
    constructor(name, sound, colour) {
        super(name, sound)
        this.colour = colour
    }
 
    get() {
        console.log(`Name  :${this.name}`);
        console.log(`Sound  :${this.sound}`);
        console.log(`colour  :${this.colour}`);
    }
}
 
const GermanShefard = new Dog("max", "bhaubhau", "black")
const Aegan = new Dog("tiger", "mew mew", "black")
 
GermanShefard.get()
Aegan.get()
 