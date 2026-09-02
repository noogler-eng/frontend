import "package:flutter/material.dart";

void main() {
  runApp(const MyApp());
}

// parent widget: MyApp
// stateful widget: HomePage
class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // Theme.of(context)
  // MediaQuery.of(context)
  // Navigator.of(context)



  @override
  Widget build(BuildContext context){
    return MaterialApp(
      title: 'Expenses App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        useMaterial3: true,
      ),
      home: const HomePage(),
    );
  }
}


// rebuilds on setState
class HomePage extends StatefulWidget {
  // immutable widget, can be const
  const HomePage({super.key});


  @override
  State<HomePage> createState() => _HomePageState();
}

// remember state of the widget
class _HomePageState extends State<HomePage> {
  // mutable state, can be changed
  int _counter = 0;
  void _incrementCounter() => setState(() => _counter++);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Expenses App'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Text(
              'You have pushed the button this many times:',
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headlineMedium,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ),
    );
  }
}