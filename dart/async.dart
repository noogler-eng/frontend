void main() async {
  // Futures (Promises)
  // printing sequence
  print('hi');
  print('hello');
  print('Welcome to Dart!');

  // using await in main function to wait for the result of helperFunc
  // main function will wait for the result of helperFunc before printing 
  // the last statement.
  await helperFunc();
  print('This is the end of the program');
}

Future<void> helperFunc() async {
  String? result = await giveResultAfter2Sec();
  print(result);
  print('This is the end of the program');
}

// making it async function
// return type of the function is Future<String> because it will 
// return a string after some time.

// with the help of await we can pause the execution of the function 
// until the Future is completed and we get the result.
Future<String> giveResultAfter2Sec() async {
  // Future class, static method delayed, which takes a Duration object 
  // as an argument and returns a Future that completes after the specified 
  // duration. naming parameter of the Duration constructor is seconds
  await Future.delayed(Duration(seconds: 2));
  return 'Result after 2 seconds';
}