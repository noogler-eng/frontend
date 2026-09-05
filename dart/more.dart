void main() {
  Animal animal = Cats();

  // we handled all the subtype of class animal
  // we are using sealed class to make sure that 
  // we have handled all the subtypes of animal class.
  switch (animal) {
    case Dogs():
      print('This is a dog');
    case Cats():
      print('This is a cat');
    case Humans():
      print('This is a human');
  }
}

// if we are directly implementing or extending the animal
// class then only it is considered as a subtype of animal 
// class and we can use it in the switch statement.
sealed class Animal {}
class Humans implements Animal {}
class Dogs implements Animal {}
class Cats extends Animal {}

// final modifier
// final modifier is used to make sure that the class cannot 
// be extended or implemented by any other class.


base class AnimalBase {}
// The type 'Human' must be 'base', 'final' or 'sealed' because 
// the supertype 'AnimalBase' is 'base'
// base calss can only be extended by other base classes or final classes.
base class Human extends AnimalBase {}  


// interface class
// it can only be implemented by other classes and cannot be extended.
interface class AnimalInterface {}
// proper interface class
// cannot be extended or implemented by any other class.
// cannot be instantiated directly.
abstract interface class AnimalInterfaceProper {}

// mixin class
mixin class AnimalMixin {}
class Dog with AnimalMixin {}