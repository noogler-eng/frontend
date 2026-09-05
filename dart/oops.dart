// object is base class of all the classes in dart.
// object is bace class of everythign except null.

class Animal {
  void sound(){
    print('Animal sound');
  }
}

class Cat extends Animal {
  @override
  void sound() {
    print('Meow');
  }
}

class Dog extends Animal {
  @override
  void sound() {
    // calling the parent class method
    // also while overriding the method of 
    // the parent class we can also call 
    // the parent class method using super 
    // keyword.
    super.sound(); 
    print('Woof');
  }
}


abstract class Shape {
  void draw();
}

class Circle extends Shape {
  @override
  void draw() {
    print('Drawing a circle');
  }
}

void main(){
  // DateTime is a class and now() is a static method of 
  // that class which returns the current date and time.
  final date = DateTime.now();
  print('current date and time is $date');

  // 1. Polymophism
  // making an object of the parent class and assigning 
  // it to the child class.
  Animal cat = Cat();
  cat.sound();

  // 2. Abstraction
  // Abstract class that cannot be instantiated.
  // but we can create an object of the child class and
  // assign it to the parent class.
  Circle circle = Circle();
  circle.draw();
  Shape shape = Circle();
  shape.draw();


  // 3. Inheritance
  // 4. Encapsulation


  // mixin
  // A mixin is a class that can be used to add functionality 
  // to another class. mixin dont created an parent child relationship.
  // good for code reusability. we can use multiple mixins in a class.
  final bird = Bird();
  bird.fly();
  bird.chirp();
}

mixin Flyable {
  void fly() {
    print('Flying');
  }
}

class Bird with Flyable {
  void chirp() {
    print('Chirp');
  }
}