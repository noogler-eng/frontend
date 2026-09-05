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
  // 3. Inheritance
  // 4. Encapsulation



}