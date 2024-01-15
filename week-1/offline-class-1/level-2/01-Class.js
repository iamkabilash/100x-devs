class Animal {
  constructor(animalName, legCount, speaks) {
    this.name = animalName;
    this.legCount = legCount;
    this.speaks = speaks;
  }
  speak() {
    console.log(`${this.name} says ${this.speaks}`);
  }
  static myType() {
    return "I'm an animal";
  }
}

let dog = new Animal("dog", 4, "woof");
dog.speak();

// static functions are for the class itself, and not for the objects created from the class.
console.log(Animal.myType());
