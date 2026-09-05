void main() async {
  print('start of main func');

  // acts like a seprate function or new line emeges in the event loop, 
  // so it will not block the execution of the main function.
  giveResultAfter2Sec().then((x){
    print('Result received');
  }); 

  print('end of main func');
}

Future<String> giveResultAfter2Sec() async {
  await Future.delayed(Duration(seconds: 2));
  return 'Result after 2 seconds';
}