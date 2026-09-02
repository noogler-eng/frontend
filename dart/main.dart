class Point {
  double x;
  double y;

  // default constructor
  // HomePage({super.key});
  // passing key to parent class
  Point(this.x, this.y);
  // named constructor, now Pointer.named(x: 3, y: 4)
  // deafult optional parameters
  Point.named({required this.x, required this.y});
}

class Circle {
  final double radius;
  final double area;

  // only shorthand filed where we have to declare all the final fields
  Circle(this.radius) : area = 3.14 * radius * radius {
    print('Circle created with radius: $radius and area: $area');
  } 
}

class Temperature {
  final double celsius;

  Temperature(this.celsius);
  Temperature.fahrenheit(double fahrenheit) : celsius = (fahrenheit - 32) * 5 / 9;
  Temperature.kelvin(double kelvin) : celsius = kelvin - 273.15;

  @override
  String toString() {
    return 'Temperature: $celsius°C';
  }
}


class ImmutablePoint {
  final double x;
  final double y;

  // const constructor
  const ImmutablePoint(this.x, this.y);
}


class Logger {
  // we can initlize final at same time also
  // static means it is shared across all instances of the class
  static final Map<String, Logger> _cache = {};
  final String name;

  // private constructor
  Logger._internal(this.name);

  factory Logger(String name){
    // return an EXISTING instance
    if(_cache.containsKey(name)){
      return _cache[name]!;
    }

    // making an new instance
    // storing it and retuning it
    final logger = Logger._internal(name);
    _cache[name] = logger;
    return logger;
  }
}


// redirecting constructor
class Rectangle {
  final double width;
  final double height;

  Rectangle(this.width, this.height);

  // redirecting constructor
  Rectangle.square(double size) : this(size, size);
}

class User {
  final String name;
  final String? nickname;
  User(this.name, {this.nickname});
}

class ApiClient {
  // late — deferred initialization, and its real danger
  late final String baseUrl;
  void configure(String url) {
    baseUrl = url;
  }
}

void main() {
  const p1 = ImmutablePoint(3, 4);
  const p2 = ImmutablePoint(1, 2);
  const p3 = ImmutablePoint(3, 4);

  // const means all the memebers of class is final, not changing
  // same memory in the heap, so p1 and p3 are same object, so true
  // const Text('Hello World');
  // const Text`('Hello World');
  print(identical(p1, p3));
  print(identical(p1, p2));

  // using name constructor
  // EdgeInsets.all(10);
  // EdgeInsets.symmetric(horizontal: 12, vertical: 8)
  print(Temperature.fahrenheit(64).toString());
  print(Temperature.kelvin(300).toString());

  final a = Logger('A');
  final b = Logger('B');
  final a2 = Logger('A');
  print(identical(a, a2));
  print(identical(a, b));

  String name = 'John';
  String? name2 = null;
  print('name: ${name} with length ${name.length}');  
  print(name2 ?? 'Default Name');
  print(name.toUpperCase());
  print(name.toLowerCase());

  String? cache;
  // assigning default value to cache if it is null
  cache ??= 'Default Value';
  print(cache);

  final clinet = ApiClient();
  clinet.configure('https://api.example.com');
  print(clinet.baseUrl);
}