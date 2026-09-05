import 'package:http/http.dart' as http;
import 'dart:convert';
import 'dart:io';

void main() {
  print('start of main func');

  String url = 'https://jsonplaceholder.typicode.com/todos/';
  http.get(Uri.parse(url)).then((response) {
    print('Response received');
    // jsonEncode is used to convert the response body to a json string
    // jsonDecode is used to convert the response body to a json object
    print((jsonDecode(response.body))[0]);

  
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
  }).catchError((error) {
    print('Error: $error');
  });

  print('end of main func');
}


