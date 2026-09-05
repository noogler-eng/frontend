
// making code more redeable and maintainable by using generics in dart
enum EmployeeType {
  FULL_TIME,
  PART_TIME,
  CONTRACT,
}

void main(){
  // List
  // 10, 20, 30
  // with int, string only that type of data can be stored in the list.
  // <> are calleds as a generics
  Students<int> student1 = Students<int>(10);
  Students<String> student2 = Students<String>('Alice');
  print(student1.name);
  print(student2.name);

  List<int> numbers = [10, 20, 30];
  List<String> names = ['John', 'Doe', 'Jane'];
  
  print(numbers[0]);
  print(names[1]);
  print(names[1].length);
  print(names.length);

  for(int i=0; i<names.length; i++){
    print(names[i]);
  }

  List dynamicList = [10, 'John', true, 20.5];
  print(dynamicList);

  // every obhect of the class Students is a subtype of the class Students
  // having memory address of the object of the class Students.
  List<Students> studentList = [student1, student2, Students<String>('Bob')];
  for(int i=0; i<studentList.length; i++){
    print(studentList[i].toString());
  }

  // adding elements to the list in last position
  numbers.add(40);
  // adding to the first postiion
  numbers.insert(0, 5);
  // removing the last element from the list
  numbers.removeLast();
  // removing the first element from the list
  numbers.removeAt(0);
  // we can also remove specific element but we need reference of that element
  // for object first store it in variable then only we can remove it from the list.
  numbers.remove(20);
  // remove all the elements from the list
  numbers.clear();
  // returns true if the list contains the element else false
  numbers.contains(10);


  // filtering out all the number > 20 from the list
  print(numbers);
  numbers.add(40);
  List<int> filteredNumbers = numbers.where((num) => num > 20).toList();
  print('Filtered Numbers: $filteredNumbers');
  if(filteredNumbers.isNotEmpty){
    print('Filtered Numbers: $filteredNumbers');
  } else {
    print('No numbers greater than 20 found.');
  }

  print(numbers);
  print(student1);
  print(student2);

  // Set
  // it will automatically remove the duplicate values from the set.
  // converting any list to set will remove the duplicate values from the list.
  Set<int> numbersSet = numbers.toSet();
  print('$numbersSet');
  Set<int> numberSet = {10, 20, 30};
  print(numberSet);

  // map is collection of key value pairs
  // key needs to be unique and value can be duplicate
  Map<String, int> studentMarks = {
    'Alice': 90,
    'Bob': 85,
    'Charlie': 95,
  };
  print(studentMarks);
  print(studentMarks['Alice']);
  print(studentMarks.keys);
  print(studentMarks.values); 
  // giving itertable string
  print((studentMarks.keys).runtimeType);

  for(int i=0; i<studentMarks.keys.length; i++){
    print('${studentMarks.keys.elementAt(i)}: ${studentMarks.values.elementAt(i)}');
  }
  // giving error when there is no key found
  // print(studentMarks['sharad']!.isEven);
  if(studentMarks.containsKey('sharad')){
    print(studentMarks['sharad']!.isEven);
  } else {
    print('Key not found');
  }

  // addall, remove, removeall, clear, containskey, containsvalue, keys, values
  studentMarks.addAll({'sharad': 80, 'john': 70});
  print(studentMarks);

  studentMarks['sharad'] = 80;
  studentMarks.remove('john');
  print(studentMarks);
  studentMarks.removeWhere((key, value) => value < 80);
  print(studentMarks);

  numbers.forEach((num) => print(num));
  numbers.map((num) => num * 2).forEach((num) => print(num));

  print('Employee Type: ${EmployeeType.FULL_TIME}');
  print(EmployeeType.values);

  // Exception handling
  // used it a places like this or calling an external api or database 
  // where we are not sure about the response.
  try {
    int result = 10 ~/ 0; 
    print('Result: $result');
  } catch (e) {
    print('Error: $e');
  } finally {
    print('Finally block executed');
  }
}


// generic class with T can be any type of data type like int, string, double, etc.
class Students<T> {
  final T name;
  Students(this.name);

  void print(T name){
    print(name);
  }

  // here we are overriding the toString method of the Object class
  // dart has a default toString method in the Object class which is 
  // the super class of all the classes in dart.
  @override
  toString() {
    return 'Student name is $name';
  }
}