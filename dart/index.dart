// multiple inheritance is not supported in dart but we 
// can use mixins to achieve that

// we can extend or implement the asbtract class in dart
// override must be used to override the methods and variables of the abstract class
// in implement we have to override all the methods and variables of the abstract class
// in extend we can override the methods and variables of the abstract class but not necessary
abstract class Engine {
  bool isEngineWorking = true;
  // we dont need to write a code block for this
  void accelerate();
}

class CarEngine implements Engine {
  @override
  bool isEngineWorking = true;

  @override
  void accelerate() {
    print('Engine is working');
  }
}




class A {
  bool isEngineWorking = true;
  void accelerate() {
    print('Engine is working');
  }
}

// we have to override the methods and variables of the class A in class B
// implements means we are implementing the class A in class B
class B implements A {
  @override
  bool isEngineWorking = true;

  @override
  void accelerate() {
    print('Engine is working');
  }
}

class Vehicle {
  int speed = 10;
  bool isVehicle = true;

  void accelerate() => speed += 10;
}

// inheritance
class Car extends Vehicle {
  int wheels = 4;
  bool isCar = true;

  @override
  void accelerate() {
    super.accelerate();
    print('Car is accelerating ${this.speed}');
  }
}


void main(){
  // here above variables comes but not initlized
  // Car method will be invoked not of the Vehicle class
  Car car = Car();
  car.accelerate();
  print(car.speed);
  (car as Vehicle).accelerate();
}