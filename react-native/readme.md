# React Native — The Complete Field Guide

*A senior-engineer walkthrough of React Native, built from a 62-page "Complete React Native Interview Questions & Answers Guide" shared on LinkedIn, expanded with the concepts a 2026-era React Native codebase actually needs that the original guide skipped.*

## How to use this document

This isn't a list of flashcards. For every topic you'll get four things:

- **What it is** — the plain-English definition.
- **Why it matters** — the actual engineering reason it exists, not just "it's used for X."
- **How it works** — code, and where useful, an ASCII diagram of what's happening under the hood.
- **Where people get burned** — the gotcha an interviewer is actually listening for.

The first 30 sections (Part 1) follow the structure of the source PDF, because that's a solid, industry-standard curriculum for a React Native interview loop. Part 2 is everything I added: the stuff that's genuinely load-bearing in a real 2025/2026 React Native codebase — the New Architecture (Fabric/TurboModules/JSI), Hermes, the threading model, Expo, TypeScript, modern state management, accessibility, i18n, deep linking, OTA updates, CI/CD, and how to structure a codebase that has to survive contact with a real team. Part 3 is a bank of interview follow-up questions and a difficulty-tiered practice plan.

> **A note on freshness:** the source PDF teaches React Native the way it looked circa 2019–2022 — the old "Bridge" architecture, class-based patterns sprinkled in, plain Redux instead of Redux Toolkit, React Navigation without the newer static config API. All of that is still *asked* in interviews (interviewers learned RN back then too), and it's still *correct*, but as of 2026 most production apps run on the **New Architecture** (Fabric + TurboModules + JSI) with **Hermes** as the default JS engine, and most new projects start with **Expo**. Part 2 exists so you're not caught flat-footed when someone asks "so how does that compare to the New Architecture?"

---

## Table of Contents

**Part 1 — The Core Curriculum (from the source guide)**

1. [What Is React Native?](#1-what-is-react-native)
2. [React Native vs React](#2-react-native-vs-react)
3. [Core Components](#3-core-components)
4. [Styling in React Native](#4-styling-in-react-native)
5. [Navigation](#5-navigation)
6. [Networking / API Calls](#6-networking--api-calls)
7. [State Management](#7-state-management)
8. [Async Operations](#8-async-operations)
9. [Performance Optimization](#9-performance-optimization)
10. [Native Modules](#10-native-modules)
11. [Debugging](#11-debugging)
12. [Platform Differences](#12-platform-differences)
13. [FlatList / ScrollView](#13-flatlist--scrollview)
14. [Image Handling](#14-image-handling)
15. [Storage](#15-storage)
16. [Permissions](#16-permissions)
17. [Testing](#17-testing)
18. [Error Handling](#18-error-handling)
19. [Animations](#19-animations)
20. [Gestures](#20-gestures)
21. [Keyboard Handling](#21-keyboard-handling)
22. [Camera Integration](#22-camera-integration)
23. [Location Services](#23-location-services)
24. [Push Notifications](#24-push-notifications)
25. [Background Tasks](#25-background-tasks)
26. [Security](#26-security)
27. [App Optimization](#27-app-optimization)
28. [Building for Production](#28-building-for-production)
29. [Common Pitfalls](#29-common-pitfalls)
30. [Best Practices](#30-best-practices)

**Part 2 — What the source guide leaves out (added)**

31. [Architecture Deep-Dive: Bridge vs. New Architecture (Fabric, TurboModules, JSI)](#31-architecture-deep-dive-bridge-vs-new-architecture-fabric-turbomodules-jsi)
32. [The Threading Model](#32-the-threading-model)
33. [Hermes — the JavaScript Engine](#33-hermes--the-javascript-engine)
34. [Metro — the Bundler](#34-metro--the-bundler)
35. [Expo vs. Bare React Native](#35-expo-vs-bare-react-native)
36. [TypeScript in React Native](#36-typescript-in-react-native)
37. [Modern State Management (Redux Toolkit, Zustand, TanStack Query)](#37-modern-state-management-redux-toolkit-zustand-tanstack-query)
38. [Rendering & Reconciliation, Explained Properly](#38-rendering--reconciliation-explained-properly)
39. [Accessibility (a11y)](#39-accessibility-a11y)
40. [Internationalization (i18n) & Localization](#40-internationalization-i18n--localization)
41. [Deep Linking & Universal Links](#41-deep-linking--universal-links)
42. [Over-the-Air Updates (CodePush / EAS Update) & Their Limits](#42-over-the-air-updates-codepush--eas-update--their-limits)
43. [CI/CD & Release Automation](#43-cicd--release-automation)
44. [Structuring a Large-Scale App](#44-structuring-a-large-scale-app)

**Part 3 — Interview Prep**

- [Interview Tips & Red Flags](#interview-tips--red-flags)
- [Curveball Follow-Up Questions (with answer sketches)](#curveball-follow-up-questions-with-answer-sketches)
- [Bonus Q&A: FlatList, Push Notifications & Deep Linking in Production](#bonus-qa-flatlist-push-notifications--deep-linking-in-production)
- [Quick Reference](#quick-reference)
- [A Study Plan](#a-study-plan)

---

# PART 1 — THE CORE CURRICULUM

## 1. What Is React Native?

**What it is.** React Native is a framework from Meta that lets you write mobile apps in JavaScript/TypeScript using React's component model, and have that code produce **real native UI elements** — `UIView` on iOS, `android.view.View` on Android — instead of rendering into a browser or a WebView.

**Why it matters.** This is the detail that separates React Native from something like Cordova/PhoneGap (which wraps a website in a native shell) or Flutter (which draws its own pixels with a custom rendering engine, Skia). React Native doesn't draw anything itself — it *describes* a tree of native views, and the platform's own rendering engine draws them. That's why an RN `<Text>` looks and behaves like a real native label, gets real native accessibility support, and benefits from platform-level optimizations for free.

**How it works — the classic picture:**

```
┌───────────────────────┐
│    JavaScript Code    │   Your React components, business logic
└───────────────────────┘
            │  (the "Bridge" — see Topic 31 for the modern version)
            ▼
┌───────────────────────┐
│  React Native Bridge  │   Serializes calls to/from JSON, async, batched
└───────────────────────┘
            │
            ▼
┌───────────────────────┐
│      Native Code      │   Objective-C/Swift (iOS), Java/Kotlin (Android)
└───────────────────────┘
            │
            ▼
┌───────────────────────┐
│   Native Mobile App   │   Real UIKit / Android View widgets on screen
└───────────────────────┘
```

```jsx
import React from 'react';
import { View, Text, Button } from 'react-native';

const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Count: {count}</Text>
      <Button
        title="Increment"
        onPress={() => setCount(count + 1)}
      />
    </View>
  );
};

export default App;
```

Notice this is *exactly* a React component — `useState`, JSX, a function component — the only difference from a web React app is the import source (`react-native` instead of `react-dom`) and the primitives you render (`View`/`Text` instead of `div`/`span`).

**Advantages:** one codebase for iOS + Android, near-native performance (it's not a WebView), hot reload for fast iteration, you get React's whole mental model and ecosystem, and one team can ship two platforms.

**Limitations:** you're still slightly behind fully-native performance for very heavy graphics/animation work; some platform-specific UI patterns (like iOS's large-title nav bars or Android's Material ripple) take extra work to get pixel-perfect; anything not exposed by RN or a library requires you (or someone) to write a **Native Module** (Topic 10); and debugging spans two runtimes (JS + native), which is a real skill of its own (Topic 11).

**Where people get burned:** candidates often say "it compiles to native code" — that's imprecise. Your *JavaScript stays JavaScript* (interpreted/JIT'd by Hermes or JSC at runtime); it's the *UI* that's native, not your business logic. Be precise about that distinction — it's usually the first thing that separates someone who's read a blog post from someone who's shipped an app.

---

## 2. React Native vs React

**What it is.** React (the library) defines the *component model* — JSX, props, state, hooks, context, the reconciliation algorithm. React Native and React DOM are both **renderers** that plug into that same core and turn your component tree into something concrete: React DOM turns it into HTML/CSS in a browser; React Native turns it into native views on a phone.

**Why it matters.** This is why your React knowledge fully transfers — `useState`, `useEffect`, `useContext`, `useReducer`, `useMemo`, `useCallback` all work identically. What *doesn't* transfer is anything DOM-shaped: there's no `<div>`, no CSS files, no `window`, no `document`, no cascading stylesheets, no CSS-in-JS libraries that manipulate the DOM.

| Feature | React Native | React (web) |
|---|---|---|
| Target | Mobile (iOS/Android) | Web browsers |
| Renders to | Native components | HTML DOM |
| Primitives | `View`, `Text`, `Image` | `div`, `span`, `img` |
| Styling | `StyleSheet` objects | CSS |
| Routing | React Navigation | React Router |
| Data fetching | `fetch`, `axios` | `fetch`, `axios` |
| Performance ceiling | Native performance | Browser-dependent |
| Learning curve (if you know React) | Moderate (new primitives + mobile concerns) | — |

**Component mapping**, so the mental translation is automatic:

```jsx
// React Web
<div>Content</div>
<span>Text</span>
<img src="image.png" />
<input />

// React Native
<View>Content</View>
<Text>Text</Text>
<Image source={{ uri: 'image.png' }} />
<TextInput />
```

**Styling difference** — no cascade, no CSS files, no `className`:

```css
/* React (CSS) */
.button {
  width: 100%;
  padding: 10px;
  background-color: blue;
}
```

```jsx
// React Native (StyleSheet) — a plain JS object, not CSS
const styles = StyleSheet.create({
  button: {
    width: '100%',
    padding: 10,
    backgroundColor: 'blue'
  }
});
```

**What's identical either way:** `useState`, `useEffect`, Context API, custom hooks, `useReducer`/`useCallback`/`useMemo`, and the whole idea of "props flow down, events flow up."

**Where people get burned:** saying "React Native styles use CSS" — they don't. There's no cascading, no pseudo-classes (`:hover` doesn't really exist on a touchscreen), no `class`/`id` selectors, and units are unitless density-independent pixels, not `px`/`em`/`rem`. Every RN style prop is really a flattened, JS-computed subset of what Flexbox/Yoga (the layout engine) understands.

---

## 3. Core Components

**What it is.** A small set of built-in primitives that every RN app is built from. Everything else — `FlatList`, `SafeAreaView`, third-party UI kits — is composed out of these.

**Why it matters.** These map 1:1 onto real native views, so knowing exactly what each one is *for* (and what it isn't for) prevents an entire category of performance and layout bugs later.

```
View (generic container — like <div>, no scrolling, no text rendering)
├── Text (the ONLY component that can render text directly)
├── Image (static, network, or base64-sourced)
├── Button (minimal, hard to restyle — most apps replace it)
├── TextInput (user text entry)
├── ScrollView (renders and mounts ALL children up front)
│   └── View
│       └── Text
└── FlatList (virtualized — only renders what's near the viewport)
    └── ListItem
        └── Text
```

**View** — the workhorse container:
```jsx
import { View, StyleSheet } from 'react-native';

const MyComponent = () => {
  return (
    <View style={styles.container}>
      {/* Content */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' }
});
```

**Text** — the *only* place raw text is legal. You cannot put a bare string inside a `<View>` — RN will throw ("Text strings must be rendered within a `<Text>` component"). Text also nests, inheriting style from its parent `<Text>`:
```jsx
<Text style={{ fontSize: 18, fontWeight: 'bold' }}>Hello World</Text>

// Nested text — the child inherits, then overrides
<Text>
  Normal <Text style={{ fontWeight: 'bold' }}>bold</Text> text
</Text>
```

**Image** — three source shapes, each with different performance implications:
```jsx
// Static (bundled at build time — RN can size/optimize it automatically)
<Image source={require('./assets/image.png')} style={{ width: 200, height: 200 }} />

// Network (you MUST specify width/height — RN can't know a remote image's size)
<Image source={{ uri: 'https://example.com/image.png' }} style={{ width: 200, height: 200 }} />

// Base64 (inlined — convenient, but bloats memory/JS bundle; avoid for large images)
<Image source={{ uri: 'data:image/png;base64,iVBOR...' }} style={{ width: 200, height: 200 }} />
```

**Button** and **TextInput** — the basic interactive primitives:
```jsx
<Button
  title="Press me"
  onPress={() => console.log('Pressed')}
  color="#841584"
  disabled={false}
/>

const [text, setText] = React.useState('');

<TextInput
  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
  placeholder="Type here"
  value={text}
  onChangeText={setText}
  keyboardType="email-address"
  secureTextEntry={false}
/>
```
Note `TextInput` is a **controlled component**, same idea as web React forms: `value` + `onChangeText` (not `onChange`), you own the state.

**ScrollView vs FlatList** (the short version — full comparison in Topic 13):
```jsx
// ScrollView renders every child immediately. Fine for a handful of items.
<ScrollView style={{ flex: 1 }}>
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</ScrollView>

// FlatList only mounts what's visible (+ a small buffer). Use this for anything
// that could grow — a feed, a chat log, search results.
const data = [{ id: '1', name: 'Item 1' }, { id: '2', name: 'Item 2' }];
<FlatList
  data={data}
  renderItem={({ item }) => <Text>{item.name}</Text>}
  keyExtractor={item => item.id}
/>
```

**Where people get burned:** rendering a raw string as a child of `View` (crashes/warns), forgetting `width`/`height` on a network `Image` (it silently renders as 0×0), and using `ScrollView` for a list that could realistically grow past ~20-30 items (memory blows up because every row is mounted, styled, and kept in memory forever).

---

## 4. Styling in React Native

**What it is.** `StyleSheet.create()` — an API that takes a plain JS object of style objects and returns... almost the same object back, but with IDs attached. Styles are then handed to components via the `style` prop, which accepts an object, an array of objects (later ones win, like CSS specificity by order), or `null`/`false` (handy for conditional styling).

**Why it matters — the performance angle interviewers actually want:** `StyleSheet.create()` isn't just "nicer syntax." Each call registers the style object once and can hand components a lightweight numeric ID instead of creating a brand-new object literal on every single render. An inline style (`style={{ flex: 1 }}`) creates a **new object every render**, which means it has to be reprocessed (flattened, diffed) every render, and — more importantly for `React.memo`/`PureComponent` — a new object reference can defeat shallow-equality checks and trigger unnecessary re-renders of children.

```jsx
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 10 },
  text: { fontSize: 16, color: '#333', fontWeight: 'bold' }
});
// Usage
<View style={styles.container}>
  <Text style={styles.text}>Styled Text</Text>
</View>
```

**Flexbox layout** — this is the single most important thing to be fluent in. Unlike web CSS, RN's `flexDirection` defaults to `'column'`, not `'row'` — a classic gotcha for anyone coming from CSS:

```jsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',       // main axis: 'row' or 'column' (default!)
    justifyContent: 'center',   // alignment ALONG the main axis
    alignItems: 'center',       // alignment ACROSS the main axis (cross axis)
  },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  flex: { flex: 1 }
});

// flex: N distributes remaining space proportionally, like CSS flex-grow
<View style={styles.container}>
  <View style={{ flex: 1 }}>Left</View>
  <View style={{ flex: 2 }}>Right (2x width)</View>
</View>
```

```
flexDirection: 'row'              flexDirection: 'column' (DEFAULT)
┌──────────────────────────┐      ┌──────────┐
│ [Left]      [Right (2x)] │      │ [Item A] │
│ ──── main axis ────►     │      │ [Item B] │  ▲
│                          │      │ [Item C] │  │ main axis
└──────────────────────────┘      └──────────┘
```

**Common style properties**, grouped the way you'd actually reach for them:
```jsx
const styles = StyleSheet.create({
  box: {
    // Dimensions
    width: 100, height: 100,
    // Spacing
    padding: 10, margin: 5, paddingHorizontal: 10, marginVertical: 5,
    // Color & border
    backgroundColor: '#fff', borderColor: '#ccc', borderWidth: 1, borderRadius: 10,
    // Shadow — iOS reads these 4 properties...
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25, shadowRadius: 3.84,
    // ...Android ignores all of them and reads THIS one instead
    elevation: 5,
    // Text
    fontSize: 16, fontWeight: 'bold', textAlign: 'center', color: '#333'
  }
});
```
That shadow/elevation split is a real platform-differences gotcha (see Topic 12): iOS shadows are `shadowColor`/`shadowOffset`/`shadowOpacity`/`shadowRadius`; Android ignores every one of those and only honors `elevation`. Cross-platform shadow components (or `react-native-shadow-2`) exist specifically to paper over this.

**Inline vs. StyleSheet:**
```jsx
// Avoid — creates a brand-new object every render
<View style={{ flex: 1, padding: 10 }}>Content</View>

// Prefer — created once, referenced by ID thereafter
const styles = StyleSheet.create({ container: { flex: 1, padding: 10 } });
<View style={styles.container}>Content</View>
```

**Responsive design** — there's no media queries, so you read the screen size explicitly:
```jsx
import { Dimensions, useWindowDimensions } from 'react-native';

const { width, height } = Dimensions.get('window'); // snapshot — doesn't update on rotation!

const styles = StyleSheet.create({
  container: { width: width > 600 ? 600 : width, height: height * 0.8 }
});

// Prefer the hook for anything that must react to rotation/split-screen/foldables:
const MyComponent = () => {
  const { width, height } = useWindowDimensions(); // re-renders on change
  return <View style={{ width: width * 0.8 }} />;
};
```

**Where people get burned:** assuming `flexDirection` defaults to `'row'` (it's `'column'`); forgetting the iOS-shadow/Android-elevation split; using `Dimensions.get('window')` for something that needs to survive a rotation (it's a one-time read, not reactive — that's exactly what `useWindowDimensions` is for).

---

## 5. Navigation

**What it is.** Mobile apps don't have URLs, so there's no browser history stack to lean on — **React Navigation** (the de-facto standard library) recreates the idea of "screens" and "back button behavior" entirely in JS, on top of native primitives where possible.

**Why it matters.** Understanding *which* navigator to reach for is really understanding three different real-world UI patterns:

```
   STACK              TABS               DRAWER    
(push / pop)    (persistent tabs)    (hidden side panel)

┌─────────┐    ┌────┬────┬─────┐    ┌───┬─────────┐
│ Home    │    │ Hm │Set │ ... │    │ ≡ │ Home    │
├─────────┤    └────┴────┴─────┘    └───┴─────────┘
│ Details │
└─────────┘

push() adds    switching tabs is    tap the icon to
a new          instant — NOT a      reveal a hidden
screen;        push, no back-       list of
goBack()       stack entry          destinations
returns to     created
the
previous
one
```

```jsx
// Stack — for drill-down flows (list → detail → edit)
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

// Tab — for top-level sibling sections (Home / Search / Profile)
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const TabApp = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

// Drawer — for a long list of destinations you don't want to permanently show
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

const DrawerApp = () => (
  <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
);
```

**Nested navigation** — real apps almost always nest a Stack *inside* each Tab, so tapping a tab doesn't lose that tab's own drill-down history:
```jsx
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="HomeList" component={HomeList} />
    <Stack.Screen name="Details" component={Details} />
  </Stack.Navigator>
);

const App = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />   {/* an entire stack, nested */}
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);
```

**Passing data and reading it back** — every screen component automatically receives `navigation` and `route` props:
```jsx
const HomeScreen = ({ navigation }) => (
  <View>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Details', { id: 123, name: 'Item' })}
    />
    <Button title="Go Back" onPress={() => navigation.goBack()} />
  </View>
);

const DetailsScreen = ({ route }) => {
  const { id, name } = route.params;      // params only exist if navigate() sent them
  return <Text>{name} (ID: {id})</Text>;
};
```

**`useNavigation`** — for reaching the navigator from a component that *isn't* itself a registered screen (a deeply nested child, a shared header button):
```jsx
import { useNavigation } from '@react-navigation/native';

const MyComponent = () => {
  const navigation = useNavigation();
  return <Button title="Navigate" onPress={() => navigation.navigate('Other')} />;
};
```

**Where people get burned:** confusing `navigate()` with `push()` — `navigate('X')` will *re-use* an existing `X` screen already on the stack instead of stacking a duplicate, which surprises people who expect browser-tab-style pushing every time; and forgetting that `route.params` can be `undefined` on first mount if a screen is also reachable without params (always guard with a default or optional chaining).

---

## 6. Networking / API Calls

**What it is.** React Native ships the same Web-standard `fetch` API you'd use in a browser — there's no special RN networking API for basic JSON requests. Everything you already know about `fetch`/`axios`, `async`/`await`, and HTTP status codes applies unchanged.

**Why it matters.** The RN-specific part isn't the networking call itself, it's *wiring it into a component's lifecycle correctly* — loading states, error states, and cleanup — since a fetch that resolves after a component has unmounted is a classic source of the "Can't perform a React state update on an unmounted component" warning (and worse, a memory leak).

```jsx
import { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) throw new Error('Network error');
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <ActivityIndicator />;
  if (error) return <Text>Error: {error}</Text>;
  return <Text>{JSON.stringify(data)}</Text>;
};
```

**Axios** — a common alternative, mostly for its nicer defaults (automatic JSON parsing/stringifying, request/response interceptors for things like attaching auth tokens globally, built-in request cancellation):
```jsx
import axios from 'axios';

useEffect(() => {
  const fetchData = async () => {
    try {
      const { data } = await axios.get('https://api.example.com/data');
      setData(data);
    } catch (error) {
      setError(error.message);
    }
  };
  fetchData();
}, []);
```

**POST requests** — note the headers, and that the body must be a *string* (JSON.stringify):
```jsx
const postData = async () => {
  try {
    const response = await fetch('https://api.example.com/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer token' },
      body: JSON.stringify({ name: 'Ali', email: 'ali@example.com' })
    });
    const data = await response.json();
    console.log('Success:', data);
  } catch (error) {
    console.error('Error:', error);
  }
};
```

**Handling status codes explicitly** — a subtlety worth internalizing: `fetch` only rejects on *network failure* (DNS, no connection, timeout in some environments). A 404 or 500 response is still a "successful" fetch as far as the Promise is concerned — you must check `response.ok` / `response.status` yourself:
```jsx
const fetchData = async () => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      setData(await response.json());
    } else if (response.status === 404) {
      setError('Not found');
    } else if (response.status === 401) {
      setError('Unauthorized');
    } else {
      setError('Server error');
    }
  } catch (error) {
    setError('Network error');   // this branch is DNS failures, timeouts, offline, etc.
  }
};
```

**Where people get burned:** treating a 4xx/5xx response as a caught exception (it isn't — `fetch` doesn't throw on HTTP error statuses, only `axios` does by default); and not aborting an in-flight request when a component unmounts or its inputs change (use an `AbortController` with `fetch`, or track an `isMounted`/cancellation flag — see Topic 8 for the pattern).

---

## 7. State Management

**What it is.** The umbrella term for "where does data live, and how does a change to it get reflected in the UI." React Native gives you the same four building blocks as web React: local component state (`useState`), state-machine-style local state (`useReducer`), state shared across a subtree without prop drilling (`Context`), and — for large apps — a dedicated external store (Redux and friends).

**Why it matters.** Picking the *smallest* tool that solves the actual problem is the real skill here. A huge fraction of "my app re-renders too much" performance complaints trace back to reaching for global state (Context or Redux) for something that should have been local `useState`, because every Context update re-renders *every* consumer, whereas local state only re-renders that one component's subtree.

```jsx
// useState — local, simple, the default choice
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};
```

```jsx
// useReducer — when the next state depends on more than one piece of
// prior state, or you have several related actions (loading/success/error)
const initialState = { count: 0, loading: false };
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT': return { ...state, count: state.count + 1 };
    case 'SET_LOADING': return { ...state, loading: action.payload };
    default: return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <View>
      <Text>Count: {state.count}</Text>
      <Button title="Increment" onPress={() => dispatch({ type: 'INCREMENT' })} />
    </View>
  );
};
```

```jsx
// Context API — for state that many DIFFERENT, distant components need
// (theme, auth/session, locale) — not a general-purpose "global state" hammer
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};

const MyComponent = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <View style={{ backgroundColor: theme === 'light' ? '#fff' : '#000' }}>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
};
```

```jsx
// Redux — for large apps: centralized store, predictable one-way data flow,
// time-travel debugging, and state that needs to be read/written from
// deeply unrelated parts of a big app
import { createStore } from 'redux';
import { useSelector, useDispatch, Provider } from 'react-redux';

const initialState = { count: 0 };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT': return { ...state, count: state.count + 1 };
    default: return state;
  }
};
const store = createStore(reducer);

const Counter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => dispatch({ type: 'INCREMENT' })} />
    </View>
  );
};

const App = () => (
  <Provider store={store}><Counter /></Provider>
);
```

```
Redux's one-way data flow:

┌────────┐                          ┌────────┐
│  View  │ ─── dispatch(action) ──► │Reducer │
└────────┘ ◄─ notify + new state ── └────────┘

useSelector re-renders only the components whose slice of
state actually changed — not the whole tree.
```

**Where people get burned:** using raw `createStore`/`react-redux` verbatim in a 2026 codebase is a code smell — modern Redux is **Redux Toolkit** (`configureStore`, `createSlice`), which removes almost all the boilerplate above (see Topic 37). Also: putting *everything* in Context "because it's built-in" is the single most common React Native performance mistake juniors make — every value change on a Context re-renders every component that calls `useContext` on it, with no selective subscription, unlike Redux's `useSelector`.

---

## 8. Async Operations

**What it is.** Patterns for `async`/`await` specific to two things you'll always need: reading/writing persisted local data (`AsyncStorage`), and correctly running/cleaning up asynchronous work inside `useEffect`.

**Why it matters.** `useEffect` callbacks **cannot be `async` functions themselves** (an effect's cleanup function is supposed to be either `undefined` or a plain function — returning a Promise instead silently breaks cleanup), so every async-in-an-effect pattern wraps the async logic in an inner function that's declared and immediately invoked.

```jsx
import AsyncStorage from '@react-native-async-storage/async-storage';

// Save / Get / Remove / Clear — a simple, unencrypted, string-only key-value store
const saveData = async () => {
  try {
    await AsyncStorage.setItem('user', JSON.stringify({ name: 'Ali', age: 25 }));
  } catch (error) { console.error('Error saving:', error); }
};

const getData = async () => {
  try {
    const data = await AsyncStorage.getItem('user');
    return data ? JSON.parse(data) : null;   // getItem returns null, not undefined, if missing
  } catch (error) { console.error('Error getting:', error); }
};

const removeData = async () => {
  try { await AsyncStorage.removeItem('user'); }
  catch (error) { console.error('Error removing:', error); }
};

const clearAll = async () => {
  try { await AsyncStorage.clear(); }   // wipes EVERY key — use with care
  catch (error) { console.error('Error clearing:', error); }
};
```

**The `isMounted` cleanup pattern** — this is the pattern every interviewer wants to see you produce from memory, because it prevents the "race condition" pitfall (also covered in Topic 29):
```jsx
useEffect(() => {
  let isMounted = true;

  const loadData = async () => {
    try {
      const data = await fetchData();
      if (isMounted) setData(data);      // don't setState after unmount
    } catch (error) {
      if (isMounted) setError(error);
    }
  };

  loadData();

  return () => { isMounted = false; };   // cleanup runs on unmount / before next effect
}, []);
```

**Sequential vs. parallel async calls** — a concrete, common interview ask ("how would you load a user and their posts?"):
```jsx
// Sequential — use when the second call NEEDS the first call's result
useEffect(() => {
  const loadData = async () => {
    try {
      const userData = await fetchUser();
      setUser(userData);
      const postsData = await fetchPosts(userData.id);   // needs userData.id
      setPosts(postsData);
    } catch (error) { console.error(error); }
  };
  loadData();
}, []);

// Parallel — use when the calls are independent; this is strictly faster
useEffect(() => {
  const loadData = async () => {
    try {
      const [userData, postsData] = await Promise.all([fetchUser(), fetchPosts()]);
      setUser(userData);
      setPosts(postsData);
    } catch (error) { console.error(error); }
  };
  loadData();
}, []);
```

**Where people get burned:** `Promise.all` rejects (and abandons all results) the moment **any one** promise rejects — if you need partial success (e.g., "show whichever of these 3 widgets loaded, ignore the ones that failed"), reach for `Promise.allSettled` instead, which never rejects and gives you a status per-promise. This is a very common follow-up question.

---

## 9. Performance Optimization

**What it is.** A specific toolkit for preventing unnecessary re-renders and unnecessary re-computation: `useMemo`, `useCallback`, `React.memo`, `FlatList` tuning props, and deferring non-urgent work.

**Why it matters.** React re-renders a component whenever its state changes *or its parent re-renders* — by default, a re-render cascades to every child regardless of whether that child's own props actually changed. On a phone (much less CPU headroom than a laptop, and the user's thumb expects 60fps), an unnecessary cascade of re-renders is the single most common cause of "this app feels janky."

```jsx
// useMemo — cache an expensive CALCULATION, only recompute when a dependency changes
const ExpensiveComponent = ({ items }) => {
  const sortedItems = useMemo(() => {
    console.log('Sorting...'); // only logs when `items` actually changes
    return items.sort();
  }, [items]);

  return (
    <FlatList data={sortedItems} renderItem={({ item }) => <Text>{item}</Text>} keyExtractor={item => item} />
  );
};
```

```jsx
// useCallback — cache a FUNCTION reference, so a memoized child doesn't
// see "a new prop" every render just because the parent re-rendered
const Parent = ({ items }) => {
  const handleItemPress = useCallback((id) => {
    console.log('Item pressed:', id);
  }, []);   // empty deps: this function reference never changes

  return <ChildList items={items} onItemPress={handleItemPress} />;
};

const ChildList = React.memo(({ items, onItemPress }) => (
  <FlatList
    data={items}
    renderItem={({ item }) => (
      <TouchableOpacity onPress={() => onItemPress(item.id)}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    )}
  />
));
```

```jsx
// React.memo — skip re-rendering a component entirely if its props are
// shallow-equal to last time (this is WHY useCallback/useMemo matter —
// without them, "new object every render" defeats memo silently)
const MyComponent = React.memo(({ name, age }) => {
  console.log('Rendered');
  return <Text>{name} - {age}</Text>;
});
```

**`FlatList` tuning** — the props that actually move the needle on a long, fast-scrolling list:
```jsx
<FlatList
  data={items}
  renderItem={({ item }) => <ListItem item={item} />}
  keyExtractor={item => item.id}
  removeClippedSubviews={true}       // unmount off-screen rows' native views (Android win)
  maxToRenderPerBatch={10}           // rows rendered per batch during scroll
  updateCellsBatchingPeriod={50}     // ms between render batches
  initialNumToRender={10}            // rows rendered on first mount
/>
```

**Deferring heavy, non-urgent work** so it doesn't block the in-progress screen transition animation:
```jsx
import { InteractionManager } from 'react-native';

useEffect(() => {
  const task = InteractionManager.runAfterInteractions(() => {
    performExpensiveCalculation();   // runs AFTER animations/gestures settle
  });
  return () => task.cancel();
}, []);
```

**Where people get burned:** reaching for `useMemo`/`useCallback` *everywhere*, "just in case" — they have their own overhead (memory for the cached value, a comparison on every render), so wrapping something trivial (like a plain string concatenation) is often a net loss. The right answer is "measure first" (Topic 11's profiling tools), then memoize the things that are (a) actually expensive, or (b) passed to a `React.memo`-wrapped child where reference stability matters.

---

## 10. Native Modules

**What it is.** The escape hatch: when RN's built-in components/APIs don't expose something the OS can do (a proprietary Bluetooth SDK, a platform-specific biometric API, some vendor's payment SDK), you write a small bridge in native code (Swift/Obj-C, Kotlin/Java) and expose it to JavaScript as a normal-looking async function.

**Why it matters.** This is what "cross-platform, not platform-agnostic-at-all-costs" really means — RN doesn't pretend every native capability is already wrapped for you; it gives you a clean, documented way to reach into the platform yourself, and a huge ecosystem of community libraries exist specifically because someone already wrote that native module for a common need (camera, maps, biometrics, Bluetooth...).

```jsx
// JavaScript side — calling into native code looks like any other async call
import { NativeModules } from 'react-native';
const { NativeBridge } = NativeModules;

const result = await NativeBridge.performAction('data');
```

```objectivec
// NativeBridge.h
#import <React/RCTBridgeModule.h>
@interface NativeBridge : NSObject <RCTBridgeModule>
@end

// NativeBridge.m
#import "NativeBridge.h"

@implementation NativeBridge
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(performAction:(NSString *)action
                     resolver:(RCTPromiseResolveBlock)resolve
                     rejecter:(RCTPromiseRejectBlock)reject)
{
  @try {
    NSString *result = [NSString stringWithFormat:@"Performed: %@", action];
    resolve(result);
  } @catch (NSException *exception) {
    reject(@"error", @"Native error", nil);
  }
}
@end
```

```bash
# Linking a third-party native library (autolinking has made this mostly automatic
# since RN 0.60+ — you usually just `pod install` on iOS and rebuild)
npx react-native link react-native-library
```

**Common pre-built native modules you'll actually use instead of writing your own:**
```jsx
import Geolocation from '@react-native-community/geolocation';   // GPS
import RNFS from 'react-native-fs';                              // filesystem access
import { RNCamera } from 'react-native-camera';                  // camera
import ImagePicker from 'react-native-image-picker';              // photo library
```

**Where people get burned:** implying that *every* feature requires writing a custom native module — in practice, for 95% of apps you're gluing together existing community modules, not writing Objective-C/Kotlin yourself. Also: the `resolve`/`reject` pattern above (`RCTPromiseResolveBlock`/`RCTPromiseRejectBlock`) is exactly how a native method becomes a JS `Promise` — knowing that connection is a good signal you actually understand the bridge, not just that you've copy-pasted a snippet.

---

## 11. Debugging

**What it is.** React Native debugging spans *two* runtimes — your JS logic, and the native shell around it — so the toolkit is correspondingly split: console logging and JS-side tools for your React code, plus native tools (Xcode/Android Studio logs, crash reporters) for the native layer.

**Why it matters.** A candidate who says "I just use `console.log`" hasn't debugged a real production issue — a release build has no Metro dev server attached, no red-box error overlay, and (in a New Architecture / Hermes app) you're debugging **Hermes bytecode**, not readable JS, unless you've got the source map.

```jsx
console.log('Debug message');
console.warn('Warning message');
console.error('Error message');
```

```jsx
// Gate dev-only tooling behind __DEV__ — RN injects this global automatically;
// it's false (and dead-code-eliminated) in release/production bundles
if (__DEV__) {
  import('./RNDebugger');
}
```

```
// The classic "Debug JS Remotely" flow (legacy, being phased out in favor of
// Hermes' own inspector via Chrome DevTools / Flipper):
// Shake device (or Cmd+D iOS sim / Cmd+M Android emulator) → Debug menu → Debug JS Remotely
// → opens Chrome DevTools, breakpoints/console attach to the running JS
```

**Error Boundaries** — a class component is *still* required here; there is no hook equivalent (`getDerivedStateFromError`/`componentDidCatch` have no hook form) as of React 19/RN 0.7x:
```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);   // log to Sentry/Crashlytics here
  }
  render() {
    if (this.state.hasError) {
      return (
        <View>
          <Text>Something went wrong</Text>
          <Text>{this.state.error?.message}</Text>
        </View>
      );
    }
    return this.props.children;
  }
}
```

**Network debugging** — inspect requests via the in-app dev menu's Network tab, or with **Flipper** (Meta's official desktop debugging app — network inspector, layout inspector, and a React DevTools panel, all in one).

**Basic performance timing:**
```jsx
const startTime = performance.now();
// Do something
const endTime = performance.now();
console.log('Took ' + (endTime - startTime) + 'ms');
```

**Where people get burned:** not knowing that an Error Boundary **cannot catch** errors from: event handlers, asynchronous code (`setTimeout`, a Promise rejection), server-side rendering, or errors thrown in the boundary itself — it only catches errors thrown during rendering, in lifecycle methods, and in constructors of the tree *below* it. That's exactly why you also need a global handler (Topic 18) for everything else.

---

## 12. Platform Differences

**What it is.** iOS and Android are different operating systems with different design languages, APIs, and quirks — the `Platform` module is how you branch your code (or your styles) per-OS when RN's abstraction isn't enough.

**Why it matters.** "Cross-platform" was never meant to mean "pixel-identical on both platforms" — Apple's Human Interface Guidelines and Google's Material Design actively *disagree* on things like where the back button lives, how tab bars look, and what a "share sheet" looks like. Good RN engineers know when to lean into the platform's native feel rather than fight it.

```jsx
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { height: Platform.OS === 'ios' ? 200 : 250 }
});

if (Platform.OS === 'android') {
  // Android-specific code
} else if (Platform.OS === 'ios') {
  // iOS-specific code
}
```

**Platform-specific *files*** — RN's bundler (Metro) automatically picks the right file per platform at build time, no `Platform.OS` check needed inside them:
```
MyComponent.ios.js       // only bundled into the iOS build
MyComponent.android.js   // only bundled into the Android build
MyComponent.js           // fallback used by both, if the above don't exist
```

**OS version checks** — because "iOS" and "Android" aren't single targets; you're really supporting a range of OS versions:
```jsx
if (Platform.OS === 'ios' && Platform.Version >= 13) {
  // iOS 13+ specific (Version is a number on iOS)
}
if (Platform.OS === 'android' && Platform.Version >= 28) {
  // Android 28+ specific (Version is the numeric API level on Android)
}
```

**Safe areas** — notches, home indicators, and status bars eat into the screen; `SafeAreaView` (or, better today, `react-native-safe-area-context`'s `useSafeAreaInsets`) keeps content clear of them:
```jsx
import { SafeAreaView } from 'react-native';
const App = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <Text>Safe area content</Text>
  </SafeAreaView>
);
```

**Branching whole components**, when the platforms' UI patterns genuinely diverge:
```jsx
const HeaderComponent = () => {
  if (Platform.OS === 'ios') return <IosHeader />;
  return <AndroidHeader />;
};
```

**Where people get burned:** hardcoding pixel values that happened to look right on one test device — always design against Safe Area insets and `useWindowDimensions`, never a fixed notch height. Also, the built-in `SafeAreaView` on Android is actually a no-op (it only ever did anything on iOS) — that's exactly why the community package `react-native-safe-area-context` exists and is what most real apps use now.

---

## 13. FlatList / ScrollView

**What it is.** Two different scrolling strategies, plus `SectionList` for grouped data. `ScrollView` mounts every child up front; `FlatList` **virtualizes** — it only mounts what's on (or near) screen and recycles views as you scroll, exactly like `RecyclerView` on Android or `UITableView` on iOS under the hood.

**Why it matters.** This is the difference between an app that scrolls at 60fps with 10,000 rows and one that runs out of memory with 200.

```
ScrollView (renders ALL rows immediately)   FlatList (only renders near-viewport rows)

┌───────────┐                 ┌───────────┐  ← viewport top
│  Row 1    │ ◄ mounted       │  Row 41   │ ◄ mounted (visible)
│  Row 2    │ ◄ mounted       │  Row 42   │ ◄ mounted (visible)
│  Row 3    │ ◄ mounted       │  Row 43   │ ◄ mounted (visible)
│   ...     │ ◄ mounted       └───────────┘  ← viewport bottom
│  Row 998  │ ◄ mounted (!)     Row 44...    ◄ NOT mounted yet
│  Row 999  │ ◄ mounted (!)     Row 1000     ◄ NOT mounted yet
└───────────┘                 (mounted/unmounted as you scroll)
```

```jsx
import { FlatList, Text, View } from 'react-native';

const MyList = () => {
  const data = [
    { id: '1', name: 'Item 1' }, { id: '2', name: 'Item 2' }, { id: '3', name: 'Item 3' }
  ];
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <View><Text>{item.name}</Text></View>}
      keyExtractor={item => item.id}
      ListHeaderComponent={<Text>Header</Text>}
      ListFooterComponent={<Text>Footer</Text>}
      ListEmptyComponent={<Text>No data</Text>}
      onEndReached={loadMore}            // triggers pagination
      onEndReachedThreshold={0.7}        // fire when 70% scrolled to the end
      numColumns={2}                     // grid layout
    />
  );
};
```

```jsx
// ScrollView — fine, even preferable, for a small, known, static amount of content
const MyScrollView = () => (
  <ScrollView>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
  </ScrollView>
);
```

```jsx
// SectionList — grouped data with sticky-ish section headers (settings screens,
// contact lists grouped by letter, a menu grouped by category)
const data = [
  { title: 'Category A', data: [{ id: '1', name: 'Item 1' }, { id: '2', name: 'Item 2' }] },
  { title: 'Category B', data: [{ id: '3', name: 'Item 3' }, { id: '4', name: 'Item 4' }] }
];

<SectionList
  sections={data}
  renderItem={({ item }) => <Text>{item.name}</Text>}
  renderSectionHeader={({ section: { title } }) => <Text style={{ fontWeight: 'bold' }}>{title}</Text>}
  keyExtractor={(item, index) => item.id + index}
/>
```

| | FlatList | ScrollView |
|---|---|---|
| Performance | Excellent (virtualized) | Poor at scale (loads all) |
| Best for | Large / unbounded lists | Small, static, known content |
| Memory | Efficient | High — grows with content |
| Scroll feel | Smooth at any length | Can lag once content is large |

**Where people get burned:** using `.map()` inside a `ScrollView` to render a "list" that can actually grow unbounded — this is one of the single most common junior-to-mid-level RN code smells, and interviewers know to look for it. A second one: `keyExtractor`/`key` using the array **index** instead of a stable ID (Topic 29 covers exactly why that's dangerous with reorderable/filterable data).

---

## 14. Image Handling

**What it is.** Loading images from four different sources (bundled, network, local file URI, base64), each with different caching/sizing implications, plus patterns for loading states and optimization.

**Why it matters.** Images are usually the single biggest contributor to both memory usage and perceived load time in a typical app — getting sizing, caching, and compression right is a real, measurable performance lever, not just polish.

```jsx
import { Image, StyleSheet } from 'react-native';

// Static — bundled at build time; RN knows its actual dimensions automatically
<Image source={require('./assets/logo.png')} style={{ width: 200, height: 200 }} />

// Network — you MUST provide width/height; RN can't measure a remote image
<Image source={{ uri: 'https://example.com/image.png' }} style={{ width: 200, height: 200 }} />

// Local file URI (e.g. a photo just taken or picked)
<Image source={{ uri: 'file:///sdcard/image.png' }} style={{ width: 200, height: 200 }} />

// Base64 — no network round-trip, but bloats memory/bundle; use sparingly
<Image source={{ uri: 'data:image/png;base64,iVBOR...' }} style={{ width: 200, height: 200 }} />
```

**Loading state + graceful failure:**
```jsx
const ImageWithLoader = ({ uri }) => {
  const [loading, setLoading] = useState(true);
  return (
    <View>
      {loading && <ActivityIndicator />}
      <Image
        source={{ uri }}
        style={{ width: 200, height: 200 }}
        onLoadEnd={() => setLoading(false)}
        onError={() => setLoading(false)}
      />
    </View>
  );
};
```

**A simple lazy-load pattern, with a placeholder shown first:**
```jsx
const LazyImage = ({ uri, style }) => {
  const [imageSrc, setImageSrc] = useState(null);
  useEffect(() => {
    setTimeout(() => setImageSrc(uri), 1000);
  }, [uri]);
  return (
    <Image
      source={imageSrc ? { uri: imageSrc } : null}
      style={style}
      defaultSource={require('./placeholder.png')}
    />
  );
};
```

**Optimization** — compress before you upload/display, and use a caching image component for anything network-heavy:
```jsx
import ImageResizer from 'react-native-image-resizer';
ImageResizer.createResizedImage(uri, 800, 600, 'JPEG', 80, 0, outputPath)
  .then((response) => console.log('Image resized:', response.uri));

import FastImage from 'react-native-fast-image';
<FastImage source={{ uri: 'https://example.com/image.png' }} cacheControl="web" style={{ width: 200, height: 200 }} />
```

**Where people get burned:** the built-in `<Image>` component's disk caching behavior is genuinely inconsistent across iOS/Android and easy to overestimate — that's the whole reason `react-native-fast-image` (backed by native `SDWebImage`/`Glide`) became a near-default dependency for any content-heavy app (feeds, galleries). Also: not resizing a 12MP camera photo before uploading it or rendering it in a 100×100 thumbnail is a very real, very common memory/bandwidth bug.

---

## 15. Storage

**What it is.** Three tiers of local persistence, roughly ordered by how structured/large the data is: `AsyncStorage` (simple key-value strings), SQLite (real relational tables via `react-native-sqlite-storage` or the newer `op-sqlite`/`expo-sqlite`), and Realm (an object database with a query API, no SQL required).

**Why it matters.** Picking the wrong tier is a real architectural mistake — using `AsyncStorage` to store a growing list of thousands of JSON records (instead of a real embedded database) leads to serializing/deserializing that entire blob on every read/write, which gets slower and slower as it grows.

```jsx
import AsyncStorage from '@react-native-async-storage/async-storage';
// Good for: settings, tokens, small flags, cached "current user" objects
const saveUser = async (user) => {
  try { await AsyncStorage.setItem('user', JSON.stringify(user)); }
  catch (error) { console.error('Error saving:', error); }
};
const getUser = async () => {
  try {
    const data = await AsyncStorage.getItem('user');
    return data ? JSON.parse(data) : null;
  } catch (error) { console.error('Error getting:', error); }
};
const removeUser = async () => {
  try { await AsyncStorage.removeItem('user'); }
  catch (error) { console.error('Error removing:', error); }
};
```

```jsx
// Realm — object database; good for structured, queryable, growing datasets
// (offline-first apps, a local cache of a large catalog) without writing SQL
import Realm from 'realm';

const UserSchema = {
  name: 'User',
  properties: { id: 'int', name: 'string', email: 'string' },
  primaryKey: 'id'
};
const realm = new Realm({ schema: [UserSchema] });

realm.write(() => { realm.create('User', { id: 1, name: 'Ali', email: 'ali@example.com' }); });

const users = realm.objects('User');
const user = realm.objectForPrimaryKey('User', 1);

realm.write(() => { user.name = 'Ahmed'; });     // all writes must be inside realm.write()
realm.write(() => { realm.delete(user); });
```

```jsx
// SQLite — real relational tables, transactions, joins; good when your data
// genuinely has relations, or you need full-text search / complex queries
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({ name: 'MyDatabase.db', location: 'default' });

db.transaction((txn) => {
  txn.executeSql('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)', []);
});
db.transaction((txn) => {
  txn.executeSql('INSERT INTO users (name) VALUES (?)', ['Ali'], () => console.log('Success'));
});
db.transaction((txn) => {
  txn.executeSql('SELECT * FROM users', [], (_, result) => console.log(result.rows._array));
});
```

**Where people get burned:** treating `AsyncStorage` as encrypted or secure — it is **not** encrypted at rest on either platform by default; never store tokens, passwords, or PII in it directly (that's what `expo-secure-store` / Keychain / Keystore-backed storage is for — see Topic 26).

---

## 16. Permissions

**What it is.** iOS and Android both require explicit, runtime user consent for sensitive capabilities (camera, location, contacts, microphone, notifications) — `react-native-permissions` gives you one JS API to request/check them on both platforms, even though the underlying OS mechanisms are quite different.

**Why it matters.** Getting this flow wrong is one of the fastest ways to get an app **rejected from the App Store**, and a bad permissions UX (asking for location the instant the app opens, with no context) is one of the fastest ways to get a low-star review and a "Don't Allow" tap you can then never re-prompt for on iOS.

```jsx
import { request, check, PERMISSIONS, RESULTS } from 'react-native-permissions';

const requestCameraPermission = async () => {
  try {
    const result = await request(PERMISSIONS.IOS.CAMERA);
    if (result === RESULTS.GRANTED) console.log('Camera permission granted');
    else if (result === RESULTS.DENIED) console.log('Camera permission denied');
  } catch (error) { console.error('Error:', error); }
};

const requestMultiplePermissions = async () => {
  try {
    const results = await requestMultiple([PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.PHOTO_LIBRARY]);
    if (results[PERMISSIONS.IOS.CAMERA] === RESULTS.GRANTED) {
      // proceed
    }
  } catch (error) { console.error('Error:', error); }
};

const checkPermission = async () => {
  try {
    const result = await check(PERMISSIONS.IOS.CAMERA);
    console.log(result); // GRANTED, DENIED, BLOCKED, UNAVAILABLE, LIMITED
  } catch (error) { console.error('Error:', error); }
};
```

```jsx
// Common permission constants
PERMISSIONS.IOS.CAMERA
PERMISSIONS.IOS.PHOTO_LIBRARY
PERMISSIONS.IOS.MICROPHONE
PERMISSIONS.IOS.CONTACTS
PERMISSIONS.IOS.LOCATION_WHEN_IN_USE

PERMISSIONS.ANDROID.CAMERA
PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
PERMISSIONS.ANDROID.RECORD_AUDIO
```

**Where people get burned:** on iOS, if the user taps "Don't Allow," calling `request()` again does **not** show the system dialog again — it just immediately resolves to `BLOCKED`; you have to deep-link the user to the app's Settings page (`Linking.openSettings()`). Also, the *result values themselves* differ subtly by platform (Android historically didn't have a `BLOCKED`-vs-`DENIED` distinction the same way iOS does) — always test the "denied twice" and "revoke in Settings mid-session" paths, not just the happy "granted" path.

---

## 17. Testing

**What it is.** Jest as the test runner (bundled with RN's default project setup), plus `@testing-library/react-native` for rendering components and simulating user interaction the way a *user* would (by visible text/role, not by internal implementation details).

**Why it matters.** Testing Library's whole philosophy — "the more your tests resemble the way your software is used, the more confidence they can give you" — matters even more on mobile, where a test that reaches into component internals will break the moment you refactor, even if the app's actual behavior didn't change at all.

```jsx
import { render, fireEvent, screen } from '@testing-library/react-native';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello')).toBeTruthy();
  });

  it('handles button press', () => {
    const { getByRole } = render(<MyComponent />);
    const button = getByRole('button');
    fireEvent.press(button);
    expect(screen.getByText('Clicked')).toBeTruthy();
  });
});
```

```jsx
// Testing async / loading states — findBy* queries return a Promise and
// retry until the element appears (or a timeout elapses)
it('loads data on mount', async () => {
  render(<DataComponent />);
  expect(screen.getByText('Loading')).toBeTruthy();
  const data = await screen.findByText('Data loaded');
  expect(data).toBeTruthy();
});
```

```jsx
// Mocking a network dependency so the test is fast and deterministic
jest.mock('axios');
import axios from 'axios';

it('fetches data', async () => {
  axios.get.mockResolvedValue({ data: { name: 'Ali' } });
  render(<DataComponent />);
  const name = await screen.findByText('Ali');
  expect(name).toBeTruthy();
});
```

**Where people get burned:** querying by `getByTestId` as the default/first choice — Testing Library's own guidance (and most interviewers) prefer `getByText`/`getByRole`/`getByLabelText` because they mirror how a real user (or a screen reader — see Topic 39) actually perceives the UI; `testID` is a fallback for when nothing accessible distinguishes an element. Also, for full app-level flows (a real login → checkout journey across real screens), Jest/Testing Library isn't enough — that's what **Detox** or **Maestro** (E2E testing frameworks that drive the actual compiled app on a simulator/device) are for.

---

## 18. Error Handling

**What it is.** Three complementary layers: `try/catch` around individual async operations, an Error Boundary for render-time crashes in a subtree, and a *global* handler for anything neither of those catches (unhandled promise rejections, errors outside React's render cycle).

**Why it matters.** No single mechanism catches everything — this is one of the most-tested "do you actually understand error handling, or do you just wrap things in try/catch" interview topics.

```jsx
useEffect(() => {
  const loadData = async () => {
    try {
      const data = await fetchData();
      setData(data);
    } catch (error) {
      setError(error.message);
      console.error('Error:', error);
    } finally {
      setLoading(false);   // runs whether it succeeded or failed — great for loading flags
    }
  };
  loadData();
}, []);
```

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) { return { hasError: true, error }; }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
    // report to Sentry/Crashlytics/Bugsnag here
  }
  render() {
    if (this.state.hasError) {
      return (
        <View>
          <Text>Something went wrong</Text>
          <Text>{this.state.error?.message}</Text>
        </View>
      );
    }
    return this.props.children;
  }
}
```

```jsx
// Global handler — catches errors an Error Boundary structurally CANNOT:
// event handler exceptions, timers, unhandled promise rejections
import * as Sentry from '@sentry/react-native';
Sentry.init({ dsn: 'https://key@sentry.io/project' });

const errorHandler = (error, isFatal) => {
  console.error('Unhandled error:', error);
  Sentry.captureException(error);
};

if (!__DEV__) {
  ErrorUtils.setGlobalHandler(errorHandler);   // RN's own global JS error hook
}
```

**Where people get burned:** assuming an Error Boundary is a complete solution — restate clearly, if asked, that it only covers render/lifecycle/constructor errors in the subtree beneath it, and that async errors, event-handler errors, and errors in the boundary component itself all need the other two layers above.

---

## 19. Animations

**What it is.** RN's built-in `Animated` API, plus the community-standard, much higher-performance **Reanimated** library for anything beyond simple fades/slides.

**Why it matters.** The single most important concept here is `useNativeDriver`. By default, an animation's math runs on the **JS thread** and sends a new style value across the bridge to native **on every single frame** (Topic 32 explains the threading model in depth) — if the JS thread is ever busy (a network response arriving, a big re-render), the animation stutters. `useNativeDriver: true` instead sends the *entire animation configuration* (from/to/duration/easing) across **once**, and lets the native side (UIKit/Android's animation system) drive every frame itself, immune to JS thread hiccups.

```jsx
import { Animated, View, Button } from 'react-native';
import { useRef } from 'react';

const AnimatedComponent = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false   // false here ONLY because `interpolate`->non-transform
                               // style props (like `width`) aren't native-driver-eligible;
                               // for transform/opacity, always prefer true
    }).start();
  };

  const translateX = animatedValue.interpolate({ inputRange: [0, 1], outputRange: [0, 100] });

  return (
    <View>
      <Animated.View style={{ transform: [{ translateX }] }}>
        <Text>Animated</Text>
      </Animated.View>
      <Button title="Animate" onPress={startAnimation} />
    </View>
  );
};
```

```jsx
// Sequence — animations run one after another
Animated.sequence([
  Animated.timing(animatedValue1, { toValue: 1, duration: 500, useNativeDriver: false }),
  Animated.timing(animatedValue2, { toValue: 1, duration: 500, useNativeDriver: false })
]).start();

// Parallel — animations run simultaneously
Animated.parallel([
  Animated.timing(animatedValue1, { toValue: 1, duration: 500, useNativeDriver: false }),
  Animated.timing(animatedValue2, { toValue: 1, duration: 500, useNativeDriver: false })
]).start();
```

```jsx
// Reanimated — runs animation logic on the UI thread via "worklets" (small
// JS functions compiled to run natively), so even gesture-driven animations
// stay smooth regardless of what the JS thread is doing
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const ReanimatedComponent = () => {
  const translateX = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({ transform: [{ translateX: translateX.value }] }));
  const handlePress = () => { translateX.value = withSpring(100); };

  return (
    <Animated.View style={animatedStyle}>
      <Pressable onPress={handlePress}><Text>Tap me</Text></Pressable>
    </Animated.View>
  );
};
```

**Where people get burned:** not every style property is native-driver-eligible — layout properties like `width`/`height`/`top`/`left` still require the JS thread (`useNativeDriver: false`) because they can affect *other elements'* layout, which only the JS-side Yoga layout engine currently computes; only `transform` and `opacity` are safely native-driver-able in the classic `Animated` API. This is precisely the limitation Reanimated was built to blow past, by moving the whole computation to a worklet that runs alongside the UI thread.

---

## 20. Gestures

**What it is.** Basic tap/press handling comes free via `Touchable*`/`Pressable` components; anything richer (drag, pinch-to-zoom, swipe-to-dismiss) needs `react-native-gesture-handler`, usually paired with Reanimated for the animated response.

**Why it matters.** RN's default touch system (`Touchable*`) is JS-thread-driven and single-touch — it's fine for buttons, but can't give you the low-latency, multi-touch, native-feeling drag/pinch interactions users expect from a polished app. `react-native-gesture-handler` recognizes gestures **natively**, side-stepping the JS thread bottleneck entirely.

```jsx
import { TouchableOpacity, Text } from 'react-native';

const GestureComponent = () => (
  <TouchableOpacity
    onPress={() => console.log('Pressed')}
    onPressIn={() => console.log('Press in')}
    onPressOut={() => console.log('Press out')}
    onLongPress={() => console.log('Long press')}
    delayLongPress={500}
  >
    <Text>Press me</Text>
  </TouchableOpacity>
);
```

```jsx
// Pan gesture — drag-to-move, using Reanimated's shared values for the
// position so the drag tracks the finger with zero JS-thread lag
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';

const PanComponent = () => {
  const translationX = useSharedValue(0);
  const translationY = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.startX = translationX.value;
      context.startY = translationY.value;
    },
    onActive: (event, context) => {
      translationX.value = context.startX + event.translationX;
      translationY.value = context.startY + event.translationY;
    }
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translationX.value }, { translateY: translationY.value }]
  }));

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={animatedStyle}>
        <View style={{ width: 100, height: 100, backgroundColor: 'blue' }} />
      </Animated.View>
    </PanGestureHandler>
  );
};
```

```jsx
// Pinch gesture — zoom
import { PinchGestureHandler } from 'react-native-gesture-handler';

const PinchComponent = () => {
  const scale = useSharedValue(1);
  const gestureHandler = useAnimatedGestureHandler({ onActive: (event) => { scale.value = event.scale; } });
  const animatedStyle = useAnimatedStyle(() => ({ transform: [{ scale: scale.value }] }));
  return (
    <PinchGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={animatedStyle}><Text>Pinch me</Text></Animated.View>
    </PinchGestureHandler>
  );
};
```

**Where people get burned:** the API shown above (`useAnimatedGestureHandler`, class-based `PanGestureHandler` wrapping) is the **Gesture Handler v1** style — as of Gesture Handler v2, the modern idiom is the composable `Gesture.Pan()`/`Gesture.Pinch()` API with `GestureDetector`. Both are still seen in real codebases and interview material, so recognize both, but know the newer one is preferred for new code.

---

## 21. Keyboard Handling

**What it is.** APIs for reacting to the on-screen keyboard's appearance (`Keyboard` events), for automatically shifting content out from behind it (`KeyboardAvoidingView`), and for dismissing it programmatically.

**Why it matters.** The keyboard covering a form's submit button — or a chat app's input field — is one of the most common, most visible mobile UI bugs, and iOS and Android need genuinely different handling (`behavior="padding"` vs `"height"`).

```jsx
import { Keyboard } from 'react-native';
import { useEffect } from 'react';

const KeyboardComponent = () => {
  useEffect(() => {
    const keyboardDidShow = Keyboard.addListener('keyboardDidShow', () => console.log('Keyboard shown'));
    const keyboardDidHide = Keyboard.addListener('keyboardDidHide', () => console.log('Keyboard hidden'));
    return () => { keyboardDidShow.remove(); keyboardDidHide.remove(); };   // always clean up listeners
  }, []);
  return <View />;
};
```

```jsx
import { KeyboardAvoidingView, TextInput, Button, Platform } from 'react-native';

const FormComponent = () => (
  <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
    <TextInput placeholder="Name" />
    <TextInput placeholder="Email" />
    <Button title="Submit" onPress={() => {}} />
  </KeyboardAvoidingView>
);
```

```jsx
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';

const dismissKeyboard = () => Keyboard.dismiss();

// Tapping anywhere outside an input dismisses the keyboard — a very common UX pattern
<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  <View style={{ flex: 1 }}>{/* Content */}</View>
</TouchableWithoutFeedback>
```

**Where people get burned:** `behavior="height"` on iOS looks wrong (it resizes the whole view rather than padding it) — `"padding"` is the iOS-correct choice, `"height"` is Android's; mixing them up is an instant visual bug that's easy to miss if you only ever tested on one platform's simulator.

---

## 22. Camera Integration

**What it is.** Native camera access via a library (classically `react-native-camera`, though as of 2026 most new projects use the actively-maintained **`react-native-vision-camera`** instead — see the freshness note below), plus `react-native-image-picker` for choosing an existing photo/video from the library.

**Why it matters.** Camera access always requires the runtime permission flow from Topic 16 first — showing a camera preview without a granted permission just shows a black screen or throws, so permission-then-capture is the pattern to internalize, not just the capture call itself.

```jsx
import { RNCamera } from 'react-native-camera';
import { useRef } from 'react';

const CameraComponent = () => {
  const cameraRef = useRef(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const data = await cameraRef.current.takePictureAsync({ quality: 0.7 });
        console.log('Photo saved:', data.uri);
      } catch (error) { console.error('Error taking photo:', error); }
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <RNCamera
        ref={cameraRef}
        style={{ flex: 1 }}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        captureAudio={true}
      />
      <Button title="Take Photo" onPress={takePicture} />
    </View>
  );
};
```

```jsx
import { launchImageLibrary } from 'react-native-image-picker';

const pickImage = () => {
  launchImageLibrary({ mediaType: 'photo', maxWidth: 800, maxHeight: 800 }, (response) => {
    if (response.didCancel) console.log('Cancelled');
    else if (response.error) console.error('Error:', response.error);
    else console.log('Image selected:', response.assets[0].uri);
  });
};
```

**Where people get burned (and a freshness flag):** `react-native-camera` is effectively **deprecated/unmaintained** as a project as of the last few years — nearly every real 2025/2026 codebase uses `react-native-vision-camera` (frame-processor support for real-time ML/barcode scanning, much better performance) instead. Know the concept and the older API for interviews, but mention the modern library by name if asked "what would you actually reach for today" — that's the kind of answer that signals real, current experience.

---

## 23. Location Services

**What it is.** GPS access via `@react-native-community/geolocation` (a one-shot read or a continuous "watch"), plus map rendering via `react-native-maps`.

**Why it matters.** Location is one of the most battery-sensitive APIs on a phone — the difference between `getCurrentPosition` (one reading) and `watchPosition` (continuous updates, which you *must* remember to clear) is a real production battery-drain bug if handled carelessly.

```jsx
import Geolocation from '@react-native-community/geolocation';

const LocationComponent = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      (error) => setError(error.message)
    );
  }, []);

  return (
    <View>
      {location && <Text>Lat: {location.latitude}, Lng: {location.longitude}</Text>}
      {error && <Text>Error: {error}</Text>}
    </View>
  );
};
```

```jsx
// watchPosition — continuous tracking; ALWAYS clearWatch on cleanup or the
// GPS radio keeps running (and the battery keeps draining) after the screen unmounts
useEffect(() => {
  const watchId = Geolocation.watchPosition(
    (position) => console.log('Location updated:', position.coords),
    (error) => console.error('Location error:', error),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  );
  return () => { Geolocation.clearWatch(watchId); };
}, []);
```

```jsx
import MapView, { Marker } from 'react-native-maps';

const MapComponent = () => (
  <MapView
    style={{ flex: 1 }}
    initialRegion={{ latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
  >
    <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} title="Marker" description="This is a marker" />
  </MapView>
);
```

**Where people get burned:** forgetting `clearWatch` in the effect's cleanup function is the exact same *shape* of bug as forgetting to remove an event listener — it's worth explicitly connecting this to the general "always clean up subscriptions in `useEffect`'s return function" principle rather than treating it as a location-specific quirk.

---

## 24. Push Notifications

**What it is.** Firebase Cloud Messaging (`@react-native-firebase/messaging`) is the most common cross-platform push provider; it handles requesting notification permission, obtaining a device token, and receiving messages in three different app states (foreground, background, killed).

**Why it matters.** Each of those three app states needs a *different* handler, and this is exactly the kind of thing that's easy to get right in a demo (foreground only) and wrong in production (a notification that silently does nothing when the app was killed).

```jsx
import messaging from '@react-native-firebase/messaging';
import { useEffect } from 'react';

const NotificationComponent = () => {
  useEffect(() => {
    messaging().requestPermission().then(authStatus => console.log('Auth status:', authStatus));
    messaging().getToken().then(token => console.log('FCM Token:', token));   // send this to your backend

    // Foreground — app is open and in view
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      console.log('Notification received:', remoteMessage);
    });
    return unsubscribe;
  }, []);
  return <View />;
};
```

```jsx
// Background — app is backgrounded but still running (must be registered
// OUTSIDE any component, at the top level of index.js)
messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log('Background notification:', remoteMessage);
});

// Killed — app was fully closed and the notification tap RELAUNCHED it
messaging().getInitialNotification().then((remoteMessage) => {
  if (remoteMessage) console.log('App opened by notification:', remoteMessage);
});
```

**Where people get burned:** forgetting that `setBackgroundMessageHandler` must be registered at the **module top level**, not inside a component — by the time a component would mount, the JS engine may not even be running yet (the OS can deliver a push and wake just enough of the app to run this one handler, without a full app launch). Also: iOS requires explicit user permission for **every** notification type (alerts, sounds, badges) individually, and enterprise apps often also need to configure APNs certificates/keys correctly server-side — a step that has nothing to do with your RN code but blocks the whole feature if misconfigured.

---

## 25. Background Tasks

**What it is.** Running code while the app isn't in the foreground — `AppState` tells you the app's current lifecycle state (active/background/inactive), and libraries like `react-native-background-timer` let a timer keep firing even while backgrounded (within OS-imposed limits).

**Why it matters.** Both iOS and Android **aggressively limit** background execution to protect battery life — this isn't an RN limitation, it's a fundamental mobile OS constraint, and it's a very common "gotcha" question: "can you run this every 5 seconds forever in the background?" (answer: not indefinitely, no — both platforms will suspend or throttle you within a limited window unless you're using a specific OS-sanctioned background mode like audio playback, location tracking, or a registered background fetch task).

```jsx
import BackgroundTimer from 'react-native-background-timer';

const startBackgroundTask = () => {
  BackgroundTimer.setInterval(() => {
    console.log('Running in background');
    // sync data, check for updates, etc. — but only reliably for a limited window
  }, 5000);
};
const stopBackgroundTask = () => BackgroundTimer.clearInterval();
```

```jsx
import { AppState } from 'react-native';
import { useEffect, useRef } from 'react';

const AppStateComponent = () => {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', handleAppStateChange);
    return () => subscription.remove();
  }, []);

  const handleAppStateChange = (nextAppState) => {
    if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App came to foreground');   // great place to refresh stale data
    }
    appState.current = nextAppState;
  };

  return <View />;
};
```

**Where people get burned:** assuming background execution is unlimited "because the code compiles and runs on my phone while I'm holding it" — the real constraints (iOS Background App Refresh budgets, Android Doze mode and battery optimization) only show up after the app has been backgrounded for a while on a real device, which is exactly why this is a common "have you actually shipped this to production" screening question.

---

## 26. Security

**What it is.** Four separate concerns that get lumped under "security": encrypted local storage for secrets, certificate/SSL pinning against man-in-the-middle attacks, keeping real secrets out of the JS bundle, and validating user input.

**Why it matters.** A JS bundle — even a Hermes bytecode one — is **not** a secure place for secrets. It ships inside the app package on the user's device, and a sufficiently motivated attacker can extract strings from it. "Where do secrets actually live" is a foundational security question for any client-side app, mobile or web.

```jsx
import * as SecureStore from 'expo-secure-store';   // backed by iOS Keychain / Android Keystore

const saveToken = async (token) => {
  try { await SecureStore.setItemAsync('auth_token', token); }
  catch (error) { console.error('Error saving token:', error); }
};
const getToken = async () => {
  try { return await SecureStore.getItemAsync('auth_token'); }
  catch (error) { console.error('Error getting token:', error); }
};
const removeToken = async () => {
  try { await SecureStore.deleteItemAsync('auth_token'); }
  catch (error) { console.error('Error removing token:', error); }
};
```

```jsx
// SSL/certificate pinning — pin your API's certificate so the app refuses
// to trust even a validly-signed-but-different certificate (defends against
// a compromised CA or a MITM proxy on public wifi)
import RNBlobUtil from 'react-native-blob-util';

const createSSLPinningClient = (certificatePath) =>
  RNBlobUtil.config({ trusty: true }).fetch('GET', 'https://secure-api.example.com', { certificate: certificatePath });
```

```bash
# .env — NEVER commit real secrets here for a client-side mobile app; anything
# in the bundle is extractable. Use this for non-sensitive config (API base
# URLs, feature flags) — real secrets belong server-side, behind YOUR backend.
API_KEY=your_api_key_here
API_URL=https://api.example.com
```
```jsx
import Config from 'react-native-config';
const apiKey = Config.API_KEY;
const apiUrl = Config.API_URL;
```

```jsx
import validator from 'email-validator';
const validateEmail = (email) => validator.validate(email);
const validatePassword = (password) => password.length >= 8 && /\d/.test(password);
```

**Where people get burned:** believing `react-native-config`/`.env` files make a secret "safe" because it's not hardcoded in a `.js` file — it still ends up embedded in the shipped bundle either way. The correct mental model: **anything the client needs to function** (a public API base URL, a publishable Stripe key) is fine in `.env`; **anything that grants privileged access** (a secret API key, a database credential) must live only on your server, accessed through an authenticated endpoint your app calls.

---

## 27. App Optimization

**What it is.** Reducing bundle size (code splitting, removing dev-only code from production), preventing memory leaks (cleanup functions), and speeding up cold-start time (deferring non-critical work).

**Why it matters.** Bundle size directly affects install conversion (users abandon large downloads, especially on metered connections) and app launch time (a bigger bundle takes longer for Hermes/JSC to parse and execute on startup).

```jsx
// Code splitting via dynamic import — defer loading a heavy screen/component
// until it's actually needed
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

// Strip console logs from production — they have real overhead and can leak
// information in a production build
if (!__DEV__) {
  console.log = () => {};
}
```

```jsx
// Memory leak prevention — the SAME pattern for every subscription type
useEffect(() => {
  const timer = setTimeout(() => { /* ... */ }, 1000);
  return () => clearTimeout(timer);
}, []);

const subscription = someEmitter.on('event', handler);
return () => { subscription.remove(); };
```

```jsx
import { InteractionManager } from 'react-native';

InteractionManager.runAfterInteractions(() => {
  // analytics init, heavy one-time computations — deferred past the first paint
});

// Lazy-loading a module only when a rarely-used feature is actually reached
const expensiveModule = require.lazy(() => require('./ExpensiveModule'));
```

```bash
# Analyze what's actually in your production bundle
npx react-native bundle --dev false --platform ios --entry-file index.js --bundle-output ~/bundle.js
```

**Where people get burned:** treating "optimization" as a one-time pass at the end of a project instead of an ongoing discipline — the cleanup-function pattern above is something you should write correctly the *first* time for every subscription/timer/listener, not retrofit later once a memory-profiler flags it.

---

## 28. Building for Production

**What it is.** The actual commands/process for producing a signed, installable, store-ready build: Xcode archiving for iOS, Gradle assembling/bundling for Android, plus version management and code signing.

**Why it matters.** This is where "it works on my machine" meets the reality of app store requirements — code signing, versioning, and build configuration are a real, sometimes painful, part of shipping that's easy to under-practice if you've only ever run a dev build.

```bash
# iOS — clean build
rm -rf ios/Pods ios/Podfile.lock
cd ios && pod install && cd ..

# Build for release
cd ios
xcodebuild -workspace YourProject.xcworkspace \
  -scheme YourProject -configuration Release -derivedDataPath build -verbose
cd ..

# Archive (produces an .xcarchive, which you then export/upload via
# Xcode Organizer or `xcodebuild -exportArchive`)
xcodebuild -workspace ios/YourProject.xcworkspace \
  -scheme YourProject -archivePath ~/Desktop/YourProject.xcarchive \
  -configuration Release archive
```

```bash
# Android — clean build
rm -rf android/build
cd android && ./gradlew clean && cd ..

# APK (for direct install / sideloading / some enterprise distribution)
cd android && ./gradlew assembleRelease && cd ..

# AAB — App Bundle, REQUIRED for Play Store submissions since 2021
cd android && ./gradlew bundleRelease && cd ..

# Signed APK, with signing config passed inline (normally you'd configure
# this once in gradle.properties / build.gradle instead of on the command line)
cd android
./gradlew assembleRelease \
  -Pandroid.injected.signing.store.file=path/to/keystore \
  -Pandroid.injected.signing.store.password=password \
  -Pandroid.injected.signing.key.alias=alias \
  -Pandroid.injected.signing.key.password=password
cd ..
```

```json
// package.json — track your marketing version and Android's internal build number separately
{
  "version": "1.0.0",
  "versionCode": 1
}
```
```jsx
import { getVersion } from 'react-native-device-info';
const appVersion = getVersion();
```

```bash
# iOS code signing, conceptually (in practice, Xcode/Fastlane/match handle this)
openssl genrsa -out private_key.pem 2048
openssl req -new -x509 -key private_key.pem -out certificate.pem
codesign -s "iPhone Developer" path/to/app
```

**Where people get burned:** not knowing the difference between an APK and an **AAB** (Android App Bundle) — Google Play has required AAB submissions since August 2021, and an AAB lets Google Play generate device-optimized APKs (smaller downloads) rather than shipping one universal APK to every device. On iOS, losing track of provisioning profiles/certificates is the single most common release-day fire drill — which is exactly why most real teams automate this with **Fastlane** or **EAS Build** rather than running these commands by hand (see Topic 43).

---

## 29. Common Pitfalls

**What it is.** Five specific, recurring mistakes that show up in real codebases and in code review — each with the "bad" version and the fix.

```jsx
// Pitfall 1: Prop drilling — passing a value through many layers that don't use it themselves
// Bad
<Component1 theme={theme}>
  <Component2 theme={theme}>
    <Component3 theme={theme} />
  </Component2>
</Component1>

// Good — Context lets Component3 read theme directly, no pass-through needed
<ThemeProvider>
  <Component1><Component2><Component3 /></Component2></Component1>
</ThemeProvider>
```

```jsx
// Pitfall 2: index-as-key — breaks when the list is reordered/filtered/inserted-into,
// because React uses `key` to decide whether a given list item IS the same item as
// before or a brand new one; index-as-key lies about that whenever order changes
// Bad
<FlatList data={items} renderItem={({ item, index }) => <Text key={index}>{item}</Text>} />

// Good — a stable, unique ID that travels WITH the data, not with its position
<FlatList data={items} renderItem={({ item }) => <Text key={item.id}>{item.name}</Text>} keyExtractor={item => item.id} />
```

```jsx
// Pitfall 3: race conditions from un-cleaned-up async effects
// Bad — if `id` changes quickly (fast taps), an OLDER request can resolve
// AFTER a newer one and overwrite it with stale data
useEffect(() => { fetchData(id); }, [id]);

// Good
useEffect(() => {
  let isMounted = true;
  const loadData = async () => {
    const data = await fetchData(id);
    if (isMounted) setData(data);
  };
  loadData();
  return () => { isMounted = false; };
}, [id]);
```

```jsx
// Pitfall 4: mutating state directly — React can't detect a mutation (same
// object reference in, same object reference out), so it won't re-render
// Bad
state.count = 5;

// Good
setState({ count: 5 });     // class components
setCount(5);                 // hooks
```

```jsx
// Pitfall 5: missing/wrong dependency array causes infinite render loops
// Bad — no dependency array means this effect runs after EVERY render,
// and setState inside it triggers another render, forever
useEffect(() => {
  setState({ ...state, count: count + 1 });
});

// Good — an explicit (even empty) dependency array
useEffect(() => {
  console.log('Component mounted');
}, []);
```

**A sixth pitfall worth adding** (not in the source list, but at least as common): **passing a new inline function/object as a prop to a memoized child**, which silently defeats `React.memo` every time:
```jsx
// Bad — `onPress` is a brand-new function every render, so MemoizedChild
// re-renders every time Parent does, regardless of React.memo
const Parent = () => <MemoizedChild onPress={() => doThing()} />;

// Good
const Parent = () => {
  const handlePress = useCallback(() => doThing(), []);
  return <MemoizedChild onPress={handlePress} />;
};
```

---

## 30. Best Practices

**Component structure** — hooks first, then handlers, then render, in a consistent order every file:
```jsx
import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

const MyComponent = ({ prop1, prop2, onPress }) => {
  const [state, setState] = useState(null);           // 1. hooks

  useEffect(() => { /* side effects */ }, []);          // 2. effects

  const handlePress = () => { /* handle action */ };    // 3. handlers

  return (                                              // 4. render
    <View style={styles.container}>
      <Text>{prop1}</Text>
      <Button title="Press" onPress={handlePress} />
    </View>
  );
};
export default MyComponent;
```

**Naming conventions:**
```jsx
const MyComponent = () => {};        // Components — PascalCase
const myFunction = () => {};         // Functions/variables — camelCase
const myVariable = 5;
const MAX_ITEMS = 10;                // Constants — UPPER_SNAKE_CASE
const API_URL = 'https://api.example.com';
const _privateFunction = () => {};   // Private/internal — underscore prefix (convention only)
```

**File organization** — a shape almost every mid-to-large RN codebase converges on:
```
src/
├── components/     # small, reusable, presentation-focused pieces
│   ├── Button.js
│   ├── Header.js
│   └── List.js
├── screens/        # one file per navigable screen
│   ├── HomeScreen.js
│   ├── ProfileScreen.js
│   └── SettingsScreen.js
├── navigation/     # navigator setup, linking config
│   └── RootNavigator.js
├── services/       # I/O boundaries — API clients, auth, storage
│   ├── api.js
│   ├── auth.js
│   └── storage.js
├── utils/          # pure helper functions, constants
│   ├── helpers.js
│   └── constants.js
├── hooks/          # reusable custom hooks
│   ├── useAuth.js
│   └── useFetch.js
├── context/        # React Context providers
│   └── ThemeContext.js
└── App.js
```

**Performance checklist** (the ten habits, not the ten one-off fixes):
1. Use `FlatList`/`SectionList` for anything that could grow — never `.map()` in a `ScrollView`.
2. Memoize genuinely expensive components (`React.memo`), not everything.
3. `useCallback` for callbacks passed to memoized children.
4. `useMemo` for real computational cost, not trivial expressions.
5. Avoid inline style objects on hot-path components.
6. Use `useNativeDriver: true` (or Reanimated) for animations.
7. Defer non-critical work with `InteractionManager`.
8. Handle every error path, not just the happy path.
9. Test on real, lower-end devices — the simulator lies about performance.
10. Actually look at profiler output before "optimizing" — measure, don't guess.

**Documentation:**
```jsx
/**
 * Fetches user data from API
 * @param {number} userId - The user ID
 * @returns {Promise<Object>} User data object
 * @throws {Error} When API call fails
 */
const fetchUser = async (userId) => {
  // Implementation
};
```

---

# PART 2 — WHAT THE SOURCE GUIDE LEAVES OUT

Everything below is the material a 2026 React Native interview at a serious company will eventually reach for, that the original 30-topic guide (written in the "classic bridge" era) doesn't cover. If Part 1 is "can you build a screen," Part 2 is "do you actually understand the platform you're building on."

## 31. Architecture Deep-Dive: Bridge vs. New Architecture (Fabric, TurboModules, JSI)

**What it is.** How JavaScript actually talks to native code. There are now two generations of this mechanism, and knowing both — and *why* the second one exists — is one of the clearest signals of real depth in an RN interview.

**The Old Architecture (the "Bridge"), 2015–2024ish:**

```
  JS Thread                "The Bridge"              Native (UI) Thread
┌───────────┐                                       ┌─────────────────┐
│ Your      │  1. serialize call+args to JSON  ──►  │ Native views    │
│ React     │        (ASYNC, batched, queued)       │ (UIKit /        │
│ code      │    ◄──  2. serialize response back    │ Android View)   │
└───────────┘                                       └─────────────────┘

Every call — "render this view," "read this native module value" —
becomes a JSON message queued and shipped across the bridge.
```

The bridge's defining properties: every call is **asynchronous** (you can never synchronously ask native "what's this view's actual on-screen width right now?"), every call is **serialized to JSON** (real, measurable overhead for high-frequency calls — think a gesture firing 60 times a second), and calls are **batched** (native processes a queue of messages once per frame, not the instant JS calls them).

**The New Architecture (default since RN 0.76, GA-stable through 2025), replaces the bridge with:**

```
  JS Thread                      JSI                        C++ / Native
                        (JavaScript Interface)
┌───────────┐                                           ┌─────────────────┐
│ Your      │                                           │ TurboModules    │
│ React     │  direct C++ function pointers/references  │ (native APIs)   │
│ code      │    SYNCHRONOUS calls possible, no JSON    │                 │
│ (Hermes)  │          serialization, no queue          │ Fabric          │
│           │                                           │ (UI renderer)   │
└───────────┘                                           └─────────────────┘
```

- **JSI (JavaScript Interface):** a lightweight C++ layer that lets JS objects hold *direct references* to native C++ objects/functions — no more JSON round-tripping, and calls **can** be synchronous when that's the right choice.
- **Fabric:** the new rendering system. It moves layout/measurement work off the JS thread and lets React's *concurrent features* (from React 18+, like `useTransition`) actually work correctly on native views, because the renderer can now interrupt/prioritize work the way React DOM always could.
- **TurboModules:** the New Architecture's replacement for classic Native Modules — modules are now **lazily loaded** (only initialized the first time JS actually calls them, instead of every module in your app starting up eagerly at launch, which was a real cold-start cost under the old system).

**Why it matters — the interview-ready version:** "the bridge was async-only and JSON-serialized everything, which capped how responsive native-JS interaction could ever be; JSI replaces that with direct references so calls can be synchronous, Fabric lets rendering actually be interruptible/concurrent, and TurboModules lazy-load instead of all initializing at launch." That one sentence covers 90% of what's actually asked.

**Where people get burned:** saying "the New Architecture removed the bridge" as if native code and JS no longer communicate — they still do, constantly; what changed is the *mechanism* (JSI's direct references vs. the bridge's async JSON queue), not the fact that a boundary exists at all.

---

## 32. The Threading Model

**What it is.** A React Native app is really running on (at least) three separate threads, each with a distinct job — understanding which thread does what is the key to debugging "why is my animation janky" or "why did my app freeze for a second."

```
┌────────────────────────────┐  ┌────────────────────────────┐  ┌────────────────────────────┐
│ JS THREAD                  │  │ SHADOW THREAD              │  │ MAIN / UI THREAD           │
│ single-threaded, runs      │  │ runs Yoga, the layout      │  │ native rendering, touch    │
│ Hermes/JSC                 │  │ engine                     │  │ handling                   │
│                            │  │                            │  │                            │
│ Your component logic,      │  │ Computes Flexbox           │  │ Actually draws pixels.     │
│ state, event handlers,     │  │ positions/sizes. Turns     │  │ This is the thread that    │
│ network callbacks. If THIS │  │ your <View> style props    │  │ MUST hit 60fps             │
│ thread is busy, your app   │  │ into concrete              │  │ (16.6ms/frame) or the UI   │
│ FEELS frozen — taps queue  │  │ x/y/width/height numbers   │  │ visibly stutters and drops │
│ up, animations stall.      │  │ for every native view.     │  │ frames.                    │
└────────────────────────────┘  └────────────────────────────┘  └────────────────────────────┘
```

**Why it matters.** This is the mental model behind almost every RN performance concept already covered: `useNativeDriver` (Topic 19) exists to let animations run on the UI thread without depending on the JS thread being free; Reanimated's "worklets" (Topic 19/20) exist to let *your own logic* run there too; `InteractionManager.runAfterInteractions` (Topic 9) exists to keep the JS thread free during an in-flight native animation; and `FlatList`'s virtualization (Topic 13) exists partly to keep the Shadow thread's layout workload bounded.

A useful diagnostic question to ask yourself when something feels slow: **"which thread is actually the bottleneck here?"** A stuttering scroll is usually the JS thread (too much work per `renderItem`) or the Shadow thread (too many/too-complex views to lay out); a frozen tap response is almost always the JS thread being busy with something else (a big synchronous computation, a huge `JSON.parse`).

**Where people get burned:** conflating "my app is slow" with "my JS is slow" — a common real bug is *too many native views* (an overly deep, overly nested `View` tree) overwhelming the Shadow/UI threads even when the JS thread itself is doing very little; the fix there is flattening your view hierarchy, not memoizing more JS.

---

## 33. Hermes — the JavaScript Engine

**What it is.** Hermes is Meta's own JavaScript engine, purpose-built for React Native, and has been the **default** engine on both platforms since RN 0.70+. Before Hermes, RN used JavaScriptCore (JSC) — the same engine as Safari.

**Why it matters.** A general-purpose JS engine (JSC, V8) is optimized for *long-running* processes like a browser tab that stays open for a while and gets faster over its lifetime (JIT compilation warms up). A mobile app is the opposite shape: it needs to **cold-start as fast as possible**, and might only run for a minute before being backgrounded/killed. Hermes is optimized specifically for that: it **precompiles your JS to bytecode at build time**, so at runtime it just loads and executes bytecode directly — no parsing a huge JS file and JIT-compiling it on the user's phone at every cold start.

```
WITHOUT HERMES (JSC)         WITH HERMES

App launches                 App launches
  │                            │
  ▼                            ▼
Load raw JS bundle (text)    Load PRECOMPILED bytecode (.hbc)
  │                            │
  ▼                            ▼
Parse + compile JS           Execute directly
  ◄── slow, every launch       ◄── fast, no parse/compile step
  ▼                            ▼
Execute                      Execute
```

Hermes also brings a smaller memory footprint and its **own debugger** (via Chrome DevTools / Flipper), replacing the old "Debug JS Remotely" flow that actually ran your JS in Chrome's V8 engine instead of the engine your app really uses (which could hide engine-specific bugs).

**Where people get burned:** assuming Hermes makes your JS logic itself run *faster* per-operation — its main win is **startup time and memory**, not raw execution speed of a tight loop (V8's JIT can still out-run Hermes on long, hot, CPU-bound JS). The right framing: Hermes trades some peak throughput for dramatically better, more predictable cold-start behavior — the right trade for a mobile app's actual usage pattern.

---

## 34. Metro — the Bundler

**What it is.** Metro is React Native's own JavaScript bundler (RN's answer to webpack/Vite) — it resolves your `import`/`require` graph, transforms JSX/TypeScript via Babel, and produces the single JS bundle (or, with Hermes, the bytecode) that actually ships in your app.

**Why it matters.** Metro is *why* `npm start -- --reset-cache` is the first thing anyone suggests when RN behaves inexplicably — Metro aggressively caches transformed files for fast rebuilds, and that cache occasionally goes stale in a way that produces genuinely confusing bugs (a file's old content appearing to still be in effect after you've clearly changed and saved it).

```bash
# The single most useful "turn it off and on again" in all of React Native
npm start -- --reset-cache
```

Metro is also what makes the `.ios.js`/`.android.js` platform-specific file resolution from Topic 12 work, and what powers Fast Refresh (the modern replacement for "Hot Reload" — Fast Refresh preserves component state across an edit where the old Hot Reload sometimes didn't).

**Where people get burned:** not knowing Metro exists as a distinct piece of the toolchain at all, and describing bundling/build issues purely in terms of "Xcode" or "Gradle" — those consume the bundle Metro produces; a "module not found" or "unexpected token" error is almost always a Metro/Babel-level problem, not a native build problem, and the fix (clear cache, check `metro.config.js`) is completely different.

---

## 35. Expo vs. Bare React Native

**What it is.** Two different ways to start and manage an RN project. **Expo** is a toolchain and a set of managed native modules (camera, location, notifications, etc., all pre-integrated) built on top of React Native; "bare" React Native is the CLI-only (`npx react-native init`) approach where you own the native iOS/Android project folders directly.

**Why it matters.** As of 2026, **Expo is the default recommendation** from the React Native team itself for new projects — this is a real shift from a few years ago when Expo was seen as "the training-wheels option." Expo's **EAS Build** (cloud-based native builds — no Xcode/Android Studio required locally) and **Expo Router** (file-based routing on top of React Navigation) have made it viable for serious production apps, including ones that need custom native code (via "config plugins" and the "prebuild" step, without permanently ejecting).

```
BARE REACT NATIVE                        EXPO (with Dev Client / EAS)

You own the ios/ and android/ folders    Expo owns/generates ios/ + android/
directly. Any native code change         (via `npx expo prebuild`) — you can
requires Xcode/Android Studio, and a     still eject to bare if truly needed.
real Mac for iOS builds.                 Native modules come pre-integrated;
                                          custom native code goes through
                                          "config plugins", often with no
                                          local Xcode/Android Studio needed,
                                          via EAS Build.
```

**Where people get burned:** describing Expo as "for beginners only, real apps need bare RN" — that was a fair characterization years ago (the old "managed workflow" genuinely couldn't include arbitrary native code), but modern Expo (since SDK 46+'s "prebuild"/continuous native generation model) supports custom native modules and is used in large production apps. The nuanced, current answer: Expo is now a superset of capability with a much better DX (developer experience) for most teams; bare RN still makes sense when you need extremely fine-grained control over native build configuration or have very unusual native requirements.

---

## 36. TypeScript in React Native

**What it is.** RN's official templates have shipped with TypeScript by default for years now — plain JavaScript RN projects are increasingly the exception in professional codebases, not the norm.

**Why it matters.** Mobile apps have an unusually punishing feedback loop for certain classes of bugs: a `TypeError: undefined is not an object` crash in production (from a typo'd prop name, or an API response shape that changed) requires a full app store release cycle to fix if you don't catch it before shipping — there's no "just refresh the page." Static typing catches exactly this category of bug at build time.

```tsx
// Typed props — catches "you forgot to pass a required prop" or "you passed
// the wrong shape" at COMPILE time, not as a runtime crash on a user's phone
type UserCardProps = {
  name: string;
  age: number;
  onPress?: () => void;   // optional
};

const UserCard: React.FC<UserCardProps> = ({ name, age, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{name} ({age})</Text>
  </TouchableOpacity>
);
```

```tsx
// Typing navigation — arguably TypeScript's single biggest RN win: it catches
// "you navigated to a screen that doesn't exist" or "you forgot a required param"
type RootStackParamList = {
  Home: undefined;
  Details: { id: number; name: string };
};

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const DetailsScreen = ({ route }: DetailsScreenProps) => {
  const { id, name } = route.params;   // id: number, name: string — no runtime guessing
  return <Text>{name} (ID: {id})</Text>;
};
```

**Where people get burned:** using `any` to silence a type error instead of modeling the actual shape — this defeats the entire point and is a real code-smell flag in review. Also: forgetting that TypeScript types are erased at build time (they provide zero runtime validation) — if you need to validate data that crosses a real boundary (an API response, `AsyncStorage` data, deep-link params), you still need a runtime validator (e.g. `zod`) alongside your compile-time types.

---

## 37. Modern State Management (Redux Toolkit, Zustand, TanStack Query)

**What it is.** The state-management landscape has moved meaningfully past what Topic 7 describes. Three tools now dominate real 2026 codebases: **Redux Toolkit** (the now-official, boilerplate-free way to write Redux), **Zustand** (a minimal, hook-based store for when Redux feels like overkill), and **TanStack Query** (React Query) — which isn't really "state management" at all, but a **server-state cache** that makes most manual `useEffect`-based fetching obsolete.

**Why it matters.** The single most important idea here is that **not all state is the same kind of state** — and conflating "data from my server" with "is this modal open" leads to a lot of unnecessary complexity.

```jsx
// Redux Toolkit — same Redux, none of the boilerplate from Topic 7
import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => { state.count += 1; }   // looks like mutation, ISN'T —
  }                                                  // Immer under the hood makes this safe
});

const store = configureStore({ reducer: { counter: counterSlice.reducer } });
export const { increment } = counterSlice.actions;
```

```jsx
// Zustand — no Provider wrapper, no reducer boilerplate, just a hook
import { create } from 'zustand';

const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

const Counter = () => {
  const { count, increment } = useCounterStore();
  return <Button title={`Count: ${count}`} onPress={increment} />;
};
```

```jsx
// TanStack Query — replaces the manual useState/useEffect/loading/error
// dance from Topic 6 & 8 entirely: caching, retries, refetch-on-reconnect,
// and de-duping identical in-flight requests, all for free
import { useQuery } from '@tanstack/react-query';

const UserProfile = ({ userId }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetch(`https://api.example.com/users/${userId}`).then(r => r.json())
  });

  if (isLoading) return <ActivityIndicator />;
  if (error) return <Text>Error loading user</Text>;
  return <Text>{data.name}</Text>;
};
```

```
The mental split that actually matters:

┌──────────────────────────┐    ┌──────────────────────────┐
│ CLIENT STATE             │    │ SERVER STATE             │
│ (owned by your app)      │    │ (a cached copy of        │
│                          │    │ something on a server)   │
│ • is this modal open?    │    │                          │
│ • which tab is selected? │    │ • the user's profile     │
│ • form input values      │    │ • a list of products     │
│                          │    │ • search results         │
│ → useState / Zustand /   │    │                          │
│   Redux Toolkit          │    │ → TanStack Query /       │
│                          │    │   RTK Query              │
└──────────────────────────┘    └──────────────────────────┘
```

**Where people get burned:** reaching for Redux (or even Zustand) to store server data — manually managing loading/error/caching/refetch-on-focus for every API call is exactly the boilerplate TanStack Query exists to delete. If asked "how would you architect state in a new app today," the strong answer is: TanStack Query for anything that comes from a server, and a light client-state tool (Zustand, or just Context/`useState`) for everything else — full Redux is now typically reserved for apps with genuinely complex, deeply cross-cutting client state.

---

## 38. Rendering & Reconciliation, Explained Properly

**What it is.** *Why* React re-renders what it re-renders. This underpins essentially every performance topic already covered (9, 13, 19, 29) but is rarely explained end-to-end, which is exactly why interviewers like to probe it directly.

**Why it matters.** React's rendering happens in two distinct phases, and knowing the difference explains why some things (`useMemo`) help and others (`useLayoutEffect`) exist for a totally different reason:

```
       RENDER PHASE                 COMMIT PHASE
(can be                      (synchronous, cannot be
paused/abandoned/restarted   interrupted — this is
by React — this is what      where React actually
"concurrent rendering"       touches real native views)
means)

┌────────────────────────┐   ┌────────────────────────┐
│ Call your component    │   │ Apply the calculated   │
│ functions, build a new │   │ changes to the real    │
│ "virtual" tree (React  │   │ native view tree       │
│ elements)              │   │ (Fabric / old bridge)  │
└────────────────────────┘   └────────────────────────┘

no side effects here; can    useLayoutEffect fires
be re-run or thrown away     HERE, synchronously,
by React                     before the screen paints
```

**Reconciliation** is the diffing algorithm React uses to decide, given a new element tree, which real native views need to be created, updated, or destroyed — and `key` (Topic 29's pitfall #2) is the single piece of information you give it to say "this is the same logical item as before, just possibly moved," versus "this is a completely different item."

**A concrete, commonly-asked follow-up: why does `useEffect` sometimes cause a visible flicker that `useLayoutEffect` doesn't?** `useEffect` runs *after* the browser/screen has already painted the commit; `useLayoutEffect` runs synchronously right after the DOM/native views are updated but **before** the screen paints — so a measurement-and-adjust pattern (e.g., measure a view's real size, then reposition something based on it) needs `useLayoutEffect` to avoid a one-frame flash of the wrong position.

**Where people get burned:** believing "re-render" means "the screen visually flickers/redraws" — a re-render that produces the *exact same* output as before is reconciled away with zero native-view changes (this is exactly what `React.memo`/`useMemo` are protecting against having to redo in the first place: the wasted *render-phase JS work*, not necessarily a wasted native paint).

---

## 39. Accessibility (a11y)

**What it is.** Making your app usable with VoiceOver (iOS) / TalkBack (Android), and more broadly for anyone with a visual, motor, or cognitive disability. This is not covered *at all* in the source guide, and it is both a real engineering responsibility and, in many jurisdictions, a legal requirement (ADA in the US, EAA in the EU) for commercial apps.

**Why it matters.** React Native's core components map to native views specifically *because* that gives you real, free accessibility support (a native `<Text>` is already readable by VoiceOver) — but only if you annotate custom/interactive components correctly, since a plain `View` wrapping a tappable icon has no inherent meaning to a screen reader without help.

```jsx
<TouchableOpacity
  accessible={true}
  accessibilityRole="button"
  accessibilityLabel="Add item to cart"
  accessibilityHint="Adds this product to your shopping cart"
  onPress={addToCart}
>
  <CartIcon />
</TouchableOpacity>
```

```jsx
// Grouping — tell the screen reader several visual elements are ONE unit
<View accessible={true} accessibilityLabel="John Doe, online">
  <Avatar uri={user.avatarUrl} />
  <Text>{user.name}</Text>
  <OnlineDot />
</View>
```

```jsx
// Announcing a dynamic change (e.g. after a form validation error appears)
import { AccessibilityInfo } from 'react-native';
AccessibilityInfo.announceForAccessibility('Form submitted successfully');
```

**Where people get burned:** relying purely on color to convey state (a red vs. green border on a form field) — screen reader users and colorblind users both miss that signal; always pair color with an icon, text, or an explicit `accessibilityLabel`. Also: an icon-only button with no `accessibilityLabel` is functionally invisible to a screen reader user — it announces as "button," with no indication of what it does.

---

## 40. Internationalization (i18n) & Localization

**What it is.** Supporting multiple languages/locales — text translation (`i18next`/`react-i18next` or `expo-localization` + `i18n-js`), but also number/date/currency formatting, and **RTL (right-to-left) layout** for languages like Arabic and Hebrew.

**Why it matters.** RTL support is the part people most often forget entirely — it's not just "flip the text direction," it's flipping the entire layout (a back arrow that pointed left now needs to point right; a `flexDirection: 'row'` layout's visual start/end reverses).

```jsx
import { I18nManager } from 'react-native';

// RN CAN auto-flip flexDirection/text alignment for RTL locales, but you
// often need to force it and reload for a locale change to fully apply
I18nManager.forceRTL(true);
```

```jsx
import { useTranslation } from 'react-i18next';

const Greeting = () => {
  const { t } = useTranslation();
  return <Text>{t('greeting.hello', { name: 'Ali' })}</Text>;   // pulls from locale JSON files
};
```

```jsx
// Locale-aware formatting — never hand-format dates/numbers/currency yourself
new Intl.DateTimeFormat('ar-EG').format(new Date());
new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(1234.5);
```

**Where people get burned:** hardcoding user-facing strings directly in JSX ("Add to Cart") instead of routing everything through a translation function from day one — retrofitting i18n onto an app with hundreds of hardcoded strings scattered through the codebase is a genuinely large, tedious migration that's far cheaper to avoid up front.

---

## 41. Deep Linking & Universal Links

**What it is.** Letting an external URL (`myapp://product/42`, or a real `https://myapp.com/product/42` **Universal Link**/**App Link**) open your app directly to a specific screen with the right data — essential for push notifications, marketing emails, and QR codes.

**Why it matters.** This is where React Navigation's `linking` config connects URL patterns to your actual screen/params structure — get it wrong and a marketing campaign's link either fails to open the app at all, or opens it to the wrong screen.

```jsx
const linking = {
  prefixes: ['myapp://', 'https://myapp.com'],
  config: {
    screens: {
      Home: 'home',
      Details: 'product/:id',        // https://myapp.com/product/42 → Details screen, id: '42'
      Profile: 'user/:userId/profile'
    }
  }
};

const App = () => (
  <NavigationContainer linking={linking}>
    {/* ...navigators... */}
  </NavigationContainer>
);
```

**Where people get burned:** custom URL schemes (`myapp://...`) work everywhere but feel untrustworthy and can be hijacked by another app registering the same scheme; **Universal Links (iOS)/App Links (Android)** use real `https://` URLs validated via a file hosted on your own domain (`apple-app-site-association` / `assetlinks.json`) — more setup, but they degrade gracefully to a web page if the app isn't installed, and can't be spoofed by another app. Production apps should use both: the real domain-verified links as primary, the custom scheme as an internal/testing fallback.

---

## 42. Over-the-Air Updates (CodePush / EAS Update) & Their Limits

**What it is.** Shipping a **JS-only** update to users **without** going through App Store/Play Store review — `react-native-code-push` (historically Microsoft's) or, increasingly, **Expo's EAS Update**.

**Why it matters — and the limit that's the actual interview point.** OTA updates can only ship changes to your **JavaScript bundle and assets** — anything that requires a native code change (adding a new native module, upgrading the RN version itself, changing a native permission string in `Info.plist`/`AndroidManifest.xml`) **cannot** go out this way and still needs a full store review cycle. This is exactly why "just OTA it" is not a universal escape hatch from app store review — a good number of "critical hotfix" postmortems in real companies are actually about this exact limitation being misunderstood.

```jsx
// Conceptually — check for and apply a JS-only update on launch
import codePush from 'react-native-code-push';

codePush.sync({
  updateDialog: false,
  installMode: codePush.InstallMode.ON_NEXT_RESTART
});
```

**Where people get burned:** using OTA updates to sneak in changes that Apple's review guidelines would actually require re-review for (this is against App Store policy and a real risk of account-level suspension, not just a rejected build) — OTA is meant for bug fixes and JS-only feature adjustments, not a way to bypass review for substantive functionality changes.

---

## 43. CI/CD & Release Automation

**What it is.** Automating build, test, and release-to-store, instead of the manual Xcode/Gradle commands from Topic 28. **Fastlane** is the long-standing standard (works with any RN setup); **EAS Build/Submit** is Expo's managed cloud equivalent; GitHub Actions/Bitrise/CircleCI typically orchestrate either one.

**Why it matters.** The manual release process (Topic 28) has a lot of places to make a small, expensive mistake (wrong provisioning profile, forgot to bump `versionCode`, signed with the wrong keystore) — automating it removes an entire category of "it's 11pm and the release is broken" incidents.

```yaml
# A minimal conceptual GitHub Actions step calling Fastlane
- name: Deploy to TestFlight
  run: bundle exec fastlane ios beta
```

```ruby
# Fastlane's "lanes" are just named, composable automation recipes
lane :beta do
  increment_build_number
  build_app(scheme: "YourProject")
  upload_to_testflight
end
```

```bash
# EAS Build/Submit — Expo's cloud build+submit pipeline, no local Mac required
eas build --platform ios --profile production
eas submit --platform ios
```

**Where people get burned:** treating CI/CD as "nice to have" polish rather than core infrastructure — for a team of more than one or two people, manual releases don't just risk mistakes, they create a bus-factor-of-one problem (only the person who knows the exact manual steps can ship a release).

---

## 44. Structuring a Large-Scale App

**What it is.** How the neat `src/components, src/screens, ...` layout from Topic 30 actually holds up (or doesn't) once an app has 50+ screens and multiple teams working in it.

**Why it matters.** A purely **type-based** structure (`components/`, `screens/`, `services/` as top-level folders) scales fine up to a point, then becomes a navigation nightmare — finding everything related to "checkout" means jumping between five unrelated top-level folders. Most large RN codebases eventually move to a **feature-based** (a.k.a. "module-based" or "vertical slice") structure instead:

```
src/
├── features/
│   ├── checkout/
│   │   ├── components/       # only checkout's own components
│   │   ├── screens/
│   │   ├── hooks/
│   │   ├── api.ts
│   │   └── index.ts           # the ONLY thing other features may import from
│   ├── profile/
│   │   └── ... (same shape)
│   └── search/
│       └── ... (same shape)
├── shared/                    # truly cross-cutting: design system, generic hooks
│   ├── components/
│   ├── hooks/
│   └── theme/
└── App.tsx
```

Everything one feature needs lives together; the `index.ts` "public API" convention keeps features from silently reaching into each other's internals (which is what eventually turns a codebase into an untestable, un-refactorable ball of mud). Large organizations building *multiple* RN apps that share code often go one step further into a **monorepo** (Nx or Turborepo), with a shared design-system package, a shared API-client package, and each app as its own workspace.

**Where people get burned:** over-engineering this on day one of a brand-new, small app — a feature-based structure and a monorepo are solutions to *scale* problems; adopting them prematurely on a 5-screen MVP adds real overhead (more config, more indirection) for no benefit yet. The senior-engineer answer is almost always "start simple, restructure when the pain of the current structure is actually felt" — not "always use the fanciest architecture."

---

# PART 3 — INTERVIEW PREP

## Interview Tips & Red Flags

**When answering:**
1. **Understand the question** — ask clarifying questions rather than guessing what's being asked.
2. **Provide context** — explain your reasoning, not just the final answer.
3. **Show code** — a real (even rough) code sketch beats a purely verbal description.
4. **Discuss trade-offs** — every choice in this guide (Redux vs. Context, FlatList vs. ScrollView, Expo vs. bare) has a real trade-off; naming it shows judgment, not just recall.
5. **Bring real experience** — "here's a bug like this I actually hit" is worth more than a textbook-perfect answer with no scar tissue behind it.

**Common follow-ups an interviewer reaches for:**
- "How do you handle platform differences?"
- "How do you optimize performance?"
- "What security measures do you implement?"
- "How do you test this?"
- "How do you debug issues?"
- "How does this compare under the New Architecture?" *(increasingly common as of 2025/2026 — see Topic 31)*

**Red flags to avoid:**
- Not understanding the bridge/JSI architecture at all (Topic 31/32).
- Ignoring platform-specific concerns (Topic 12).
- Poor or absent error handling (Topic 18).
- Memory leaks from un-cleaned-up subscriptions (Topics 8, 23, 27).
- Performance blind spots (Topic 9, 13, 38).
- Security vulnerabilities — especially secrets shipped in the JS bundle, or unencrypted sensitive local storage (Topic 26).
- Talking about state management with no mental model for *which kind* of state you're managing (Topic 37).

## Curveball Follow-Up Questions (with answer sketches)

These are the "wait, I hadn't thought about that" questions that separate a good interview from a great one.

**"Walk me through what happens, thread by thread, when a user taps a button that's inside an `Animated.View`."**
> Touch is detected on the UI thread → if it's a native-driven animation, native handles it directly; otherwise the event crosses to the JS thread → your `onPress` handler runs, potentially calls `setState` → React re-renders (render phase, JS thread) → Fabric/the bridge commits the new native view tree (commit phase) → Shadow thread recomputes any changed layout → UI thread paints. (Ties Topics 19, 32, 38 together — a great single question to rehearse out loud.)

**"Your app works fine in dev but crashes only in the release build. Why might that be, and how would you debug it?"**
> `__DEV__`-gated code paths differ; Hermes bytecode vs. JSC in dev; minification/dead-code-elimination can expose a bug that relied on an unminified string or a stripped-out dev-only warning; a missing symbol/source map makes the release crash log unreadable without `hermesc`'s source-map tooling. Answer: reproduce with a *release* build locally, symbolicate the crash with the correct source maps, check for `__DEV__`-only code the release path skips.

**"How would you make an app work fully offline, including writes made while offline?"**
> A local-first data layer (SQLite/Realm/WatermelonDB) as the source of truth, a sync queue for pending writes made offline, `NetInfo` to detect connectivity changes, and a conflict-resolution strategy (last-write-wins, or a proper CRDT/operational-transform approach) for when a locally-queued write conflicts with a server-side change made in the meantime.

**"Why might two devices with identical specs show different animation performance?"**
> Different GPU/CPU thermal throttling behavior, background OS load, whether the app's view hierarchy triggers more/less native view overdraw on that device's compositor, and (Android specifically) vendor-skin differences in how aggressively the OS manages background/foreground process priority.

**"When would you deliberately choose the OLD architecture (bridge) over the New Architecture today?"**
> Rarely, but: a specific third-party native module hasn't been migrated to support the New Architecture's interop layer yet, and no maintained fork exists. The New Architecture has an interop layer specifically to run legacy modules, so this is increasingly a non-issue, but knowing it *can* still come up shows real-world awareness, not just spec-sheet knowledge.

## Bonus Q&A: FlatList, Push Notifications & Deep Linking in Production

Five specific questions worth being able to answer crisply, back to back — this exact combination (an optimized list, driven by a push notification, that deep-links into the right item) is one of the most common "build me a real feature" system-design-style prompts in a React Native interview.

### 1. What is the difference between `FlatList` and `ScrollView`?

The short, interview-ready answer (full depth in **Topic 13**): `ScrollView` renders **every** child immediately, all at once, and keeps them all mounted for as long as the `ScrollView` exists. `FlatList` **virtualizes** — it only mounts the rows near the visible viewport (plus a small buffer) and mounts/unmounts rows as the user scrolls, exactly the way `RecyclerView` (Android) or `UITableView` (iOS) work natively.

```
ScrollView: mounts ALL rows, forever         FlatList: mounts only NEAR-viewport rows
[Row 1]  ◄ mounted                           [Row 41] ◄ mounted (visible)
[Row 2]  ◄ mounted                           [Row 42] ◄ mounted (visible)
  ...    ◄ mounted                           [Row 43] ◄ mounted (visible)
[Row 999]◄ mounted (!) — memory grows        [Row 44] NOT mounted yet — recycled in/out
                                              as the user scrolls
```

**Rule of thumb:** if the list has a small, fixed, known size (a settings screen with 6 rows) — `ScrollView` is simpler and fine. If it's a feed, a search-results list, a chat log, or anything that could grow past ~20-30 items — `FlatList` (or `SectionList` for grouped data), no exceptions.

### 2. How do you optimize `FlatList` performance?

The full list is in **Topic 9**, but the answer worth having ready, in priority order:

1. **`keyExtractor`** returning a stable, unique ID (never the array index — Topic 29).
2. **`getItemLayout`** if every row is a fixed height — this lets `FlatList` skip measuring rows entirely and jump straight to any offset (critical for `scrollToIndex` to work instantly).
3. **Memoize `renderItem`'s component** with `React.memo`, and memoize any callback you pass into it with `useCallback` — otherwise every row re-renders on every parent re-render, virtualization or not.
4. **Tune the batching props** for your data: `initialNumToRender` (how many rows to render on first paint), `maxToRenderPerBatch` and `updateCellsBatchingPeriod` (how much work happens per scroll-triggered batch), `windowSize` (how many "screens" worth of content to keep mounted above/below the viewport).
5. **`removeClippedSubviews={true}`** on Android — detaches off-screen native views entirely rather than just hiding them (bigger win on Android; iOS's UIKit already does more of this for you).
6. Keep each row's own render **cheap** — no inline function/object literals inside `renderItem`, no expensive computation that isn't memoized; a slow `renderItem` is the single most common cause of a "tuned" `FlatList` that still stutters.

### 3. What is Firebase push notification, and how does it work in React Native?

**Firebase Cloud Messaging (FCM)** is Google's cross-platform push delivery service; `@react-native-firebase/messaging` is the RN library that talks to it (and, transparently, to Apple's APNs on iOS — FCM relays through APNs rather than replacing it there). Full code in **Topic 24**; here's the actual round trip:

```
Your backend                  FCM (+ APNs on iOS)           User's device

│                             │                             │
│  1. send to a device        │                             │
│     token / topic           │                             │
├──────────────────────────►  │                             │
│                             │  2. routes to the right     │
│                             │     OS's push service       │
│                             ├──────────────────────────►  │

3. the app handles it in ONE of three states:
     • foreground → onMessage()
     • background → setBackgroundMessageHandler()
     • killed     → getInitialNotification()
```

The device first calls `messaging().getToken()` to obtain its unique FCM token and sends that token to your backend — that token (not the user's identity) is what your server targets when it sends a push. Requesting permission (`messaging().requestPermission()`) is mandatory on iOS before any notification can be shown at all.

### 4. What is deep linking in React Native?

Deep linking is making a URL (`myapp://order/42`, or a real `https://myapp.com/order/42` **Universal/App Link**) open your app directly to a specific screen, with the right params already loaded — instead of just opening the app to its default home screen. Full setup in **Topic 41** — the essential piece is React Navigation's `linking` config, which maps URL patterns straight onto your screen names and route params:

```jsx
const linking = {
  prefixes: ['myapp://', 'https://myapp.com'],
  config: { screens: { Home: 'home', OrderDetails: 'order/:orderId' } }
};
```

A `https://` Universal/App Link is the production-grade choice over a bare custom scheme: it's domain-verified (via a file you host at `/.well-known/apple-app-site-association` or `assetlinks.json`), can't be hijacked by another app registering the same scheme, and degrades gracefully to a real web page if the app isn't installed.

### 5. How would you implement all three together in a production-level app?

This is the question that's actually being asked when an interviewer strings 1–4 together: **build a notifications feed screen** where tapping a push takes the user straight to the right item in an optimized list. Here's the shape a real implementation takes:

```jsx
// 1. Optimized FlatList — the feed itself
const NotificationsScreen = () => {
  const { data: notifications } = useQuery({
    queryKey: ['notifications'],
    queryFn: fetchNotifications,          // TanStack Query — Topic 37
  });

  const renderItem = useCallback(({ item }) => (
    <NotificationRow item={item} />        // memoized row component (React.memo)
  ), []);

  return (
    <FlatList
      data={notifications}
      renderItem={renderItem}
      keyExtractor={item => item.id}       // stable ID, never index
      getItemLayout={(data, index) => (
        { length: ROW_HEIGHT, offset: ROW_HEIGHT * index, index }
      )}
      initialNumToRender={12}
      maxToRenderPerBatch={8}
      windowSize={7}
      removeClippedSubviews={true}
    />
  );
};

// 2. Push notification wiring — registered once, near app startup
messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  // e.g. update a local badge count / cache; the OS shows the alert itself
});

useEffect(() => {
  const unsubscribe = messaging().onMessage(async (remoteMessage) => {
    queryClient.invalidateQueries(['notifications']);   // refresh the feed live
  });
  return unsubscribe;
}, []);

// 3. Deep linking ties the tapped push to a specific screen + item
const linking = {
  prefixes: ['myapp://', 'https://myapp.com'],
  config: { screens: { Notifications: 'notifications', OrderDetails: 'order/:orderId' } },
};

// your push payload includes a data field the app reads on tap, e.g.
// { data: { deepLink: 'myapp://order/42' } } — React Navigation's linking
// config resolves that URL straight to <OrderDetails orderId="42" />,
// whether the app was foregrounded, backgrounded, or fully killed.
```

**The production-level details that separate this from a demo:** handle all three app states from Topic 24 (foreground/background/killed) since a killed-state tap is the one people forget to test; invalidate/refetch your `FlatList`'s data source on a live push rather than trying to splice the new item into local state by hand (simpler, and correctness-preserving); use `getItemLayout` specifically so `scrollToIndex`/`scrollToItem` (needed if the deep link should land the user scrolled to a specific row, not just the top of the list) works instantly instead of needing to measure rows first; and register the background handler at module scope (before any component mounts), because the OS can invoke it without a full app launch.

## Quick Reference

**Common commands:**
```bash
npx react-native init MyProject      # initialize a new bare RN project
npm run ios                           # run on iOS simulator
npm run android                       # run on Android emulator
npm start -- --reset-cache            # clear Metro's cache (the universal fix-it)
npm install                           # install JS dependencies
npx react-native link                 # link native modules (mostly automatic now)
npx expo prebuild                     # generate native ios/ + android/ folders (Expo)
eas build --platform ios              # cloud-build an iOS binary (Expo/EAS)
```

**Common imports:**
```jsx
import {
  View, Text, Button, Image, ScrollView, FlatList, StyleSheet,
  Platform, Dimensions, Keyboard, ActivityIndicator, TouchableOpacity
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import { useQuery } from '@tanstack/react-query';
```

## A Study Plan

If you're using this guide to prepare, rather than read once, here's a reasonable order:

- **Week 1 — Foundations:** Topics 1–8. Build one small app end-to-end (a list, a detail screen, a form, one API call) so every concept has a place to live.
- **Week 2 — Performance & internals:** Topics 9–13, 31–34, 38. This is where "I can build an app" turns into "I understand the platform."
- **Week 3 — Device capabilities & reliability:** Topics 14–26, 39–41. Add camera/location/notifications/storage to your practice app; add an Error Boundary and real tests.
- **Week 4 — Shipping & interview polish:** Topics 27–30, 42–44, and this Part 3. Do a real production-style build (signed, on a device, not just a simulator), then rehearse the curveball questions above out loud.

---

*Source: "Complete React Native Interview Questions & Answers Guide" (62-page PDF, shared via LinkedIn, dated August 2026) — Part 1 topics and code samples drawn from that document. Part 2, Part 3, all "Why it matters"/"Where people get burned" framing, and all diagrams are additions.*