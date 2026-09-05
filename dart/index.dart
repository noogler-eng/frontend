
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