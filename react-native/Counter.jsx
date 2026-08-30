import React from 'react';
import { View, Text, Button, StyleSheet, Image, TextInput } from 'react-native';

const App = () => {
    const [count, setCount] = React.useState(0);
    const [text, setText] = React.useState('');

    const data = [{
        id: 1,
        name: 'Item 1',
    },
    {
        id: 2,
        name: 'Item 2',
    }];
    
    return <View>
        {/* scroll-view, renders a list of items that can be scrolled, immediately */}
        {/* fine for a handful of items, but not for a large list */}
        <ScrollView style={{ flex: 1 }}>
            <Text>Item 1</Text>
            <Text>Item 2</Text>
        </ScrollView>

        {/* FlatList is a more performant alternative for large lists */}
        {/* FlatList only mounts what's visible (+ a small buffer) */}
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            // renderItem is a function that takes an item and returns a component to render
            renderItem={({ item }) => <Text>{item.name}</Text>}
        />
        

        <View>
            {/* Static (bundled at build time — RN can size/optimize it automatically) */}
            <Image source={require('./asset/image.png')}/>
            {/* Network (you MUST specify width/height — RN can't know a remote image's size) */}
            <Image source={{ uri: 'https://example.com/image.png' }}/>
            {/* Base64 (inlined — convenient, but bloats memory/JS bundle; avoid for large images) */}
            <Image source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggT/vFj47wAAAABJRU5ErkJggg==' }}/>
        </View>

        {/* raw text is leagal only in the Text component */}
        <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
        }}>Count: {count}</Text>
        {/* inline styles reprocessed on every render */}
        <Button title="Increment" onPress={() => setCount(count + 1)} style={styles.Button} disabled={count >= 10} />

        <TextInput
            value={text}
            onChangeText={setText}
            placeholder="Type here"
            style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
            }}
            // keyboardType can be one of: 
            // 'default', 
            // 'email-address', 
            // 'numeric', 
            // 'phone-pad', 
            // 'number-pad', 
            // 'decimal-pad', 
            // 'url', 
            // 'ascii-capable', 
            // 'numbers-and-punctuation', 
            // 'name-phone-pad', 
            // 'twitter', 
            // 'web-search'
            keyboardType="default"
        />
    </View>
}

// some styling properties are different for android and ios
// like shadowColor, shadowOffset, shadowOpacity, shadowRadius are for ios only
// elevation is for android only

// no css, cascading css, or psudo class selectors in react native, 
// only inline styles or StyleSheet.create
// takes plane object of css properties and returns a 
// StyleSheet object that can be used in the component 
// (having ids for each style)
// id is used for reference so this style object is used on every render, 
// instead of creating a new object every time
const styles = StyleSheet.create({
    Button: {
        color: 'blue',
        backgroundColor: 'lightgray',
    },
    container: {
        flex: 1,
        // coloumn by default
        flexDirection: 'row',
        // alignment ALONG the main axis
        justifyContent: 'center',
        // alignment ACROSS the main axis (cross axis)
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    // flex: N distributes remaining space proportionally, like CSS flex-grow
    flex: {
        flex: 1,
    },
    box: {
        width: 100, height: 100,
        padding: 10, margin: 10, paddingHorizontal: 20, marginVertical: 30,
        backgroundColor: 'lightblue', borderColor: 'blue', borderWidth: 2, borderRadius: 10,
        shadowColor: 'black', shadowOffset: { width: 5, height: 5 }, 
        shadowOpacity: 0.5, shadowRadius: 10,
        elevation: 5,
        fontSize: 16, fontWeight: 'bold', color: 'darkblue', textAlign: 'center', 
        textAlignVertical: 'center',
    }
})


export default App;