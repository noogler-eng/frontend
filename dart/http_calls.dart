import 'package:http/http.dart' as http;
import 'dart:io';

void main() {
  print('start of main func');

  String url = 'https://jsonplaceholder.typicode.com/todos/';
  http.get(Uri.parse(url)).then((response) {
    print('Response received');
  
    // making an json file and storing it in the dart folder
    final file = File('./dart/data/todo.json');
    try{
      // writing the response body to the file
      // file.absolute.writeAsStringSync(response.body) ? 
      // absolute is used to get the absolute path of the file, 
      // and writeAsStringSync is used to write the response body 
      // to the file synchronously.
      file.absolute.writeAsStringSync(response.body);
    }catch(e){
      print('Error: $e');
    }
  });

  print('end of main func');
}


