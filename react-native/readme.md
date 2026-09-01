# Mobile Development Field Guide — React Native + Flutter

*A senior-engineer walkthrough of both major cross-platform mobile frameworks. The React Native half is built from a 62-page "Complete React Native Interview Questions & Answers Guide" shared on LinkedIn, expanded with everything a 2026-era codebase actually needs that the original skipped. The Flutter half mirrors the same 30-topic curriculum in Dart/Flutter — written for someone who already knows React Native and JavaScript, so every concept is anchored to something you already understand.*

## How to use this document

This isn't a list of flashcards. For every topic you'll get four things:

- **What it is** — the plain-English definition.
- **Why it matters** — the actual engineering reason it exists, not just "it's used for X."
- **How it works** — code, and where useful, an ASCII diagram of what's happening under the hood.
- **Where people get burned** — the gotcha an interviewer (or a future-you debugging at midnight) is actually listening for.

Everywhere the Flutter section covers the same ground as the React Native section, it says so explicitly — "in RN you'd write X, in Flutter you write Y" — because the fastest way to learn a second framework is by mapping it onto the first one you already know, not by learning it from zero.

**Document map:**
- **Part 1 & 2** — React Native, 44 topics (the original interview guide + everything it left out).
- **Part 3** — React Native interview prep (tips, curveball questions, bonus Q&A, quick reference).
- **Part 4** — Dart crash course for JavaScript developers (read this before Part 5 if you've never touched Dart).
- **Part 5** — Flutter, 30 topics, mirroring Part 1's structure exactly, with RN comparisons throughout.
- **Part 6** — Hands-on exercises for both frameworks, each with a worked solution.
- **Part 7** — Future topics (reserved — add whatever you send next here).

> **A note on freshness:** the source PDF teaches React Native the way it looked circa 2019–2022 — the old "Bridge" architecture, class-based patterns sprinkled in, plain Redux instead of Redux Toolkit, React Navigation without the newer static config API. All of that is still *asked* in interviews (interviewers learned RN back then too), and it's still *correct*, but as of 2026 most production apps run on the **New Architecture** (Fabric + TurboModules + JSI) with **Hermes** as the default JS engine, and most new projects start with **Expo**. Part 2 exists so you're not caught flat-footed when someone asks "so how does that compare to the New Architecture?"

---

## 📋 Learning Checklist

Track your progress here. Nothing else in this document depends on checking these off — it's just so you can see, at a glance, what's covered and what's still open.

### React Native

<details open>
<summary><strong>Part 1 — Core Curriculum (30 topics)</strong></summary>

- [ ] 1. What Is React Native? · [ ] 2. RN vs React · [ ] 3. Core Components · [ ] 4. Styling
- [ ] 5. Navigation · [ ] 6. Networking · [ ] 7. State Management · [ ] 8. Async Operations
- [ ] 9. Performance · [ ] 10. Native Modules · [ ] 11. Debugging · [ ] 12. Platform Differences
- [ ] 13. FlatList/ScrollView · [ ] 14. Image Handling · [ ] 15. Storage · [ ] 16. Permissions
- [ ] 17. Testing · [ ] 18. Error Handling · [ ] 19. Animations · [ ] 20. Gestures
- [ ] 21. Keyboard Handling · [ ] 22. Camera · [ ] 23. Location · [ ] 24. Push Notifications
- [ ] 25. Background Tasks · [ ] 26. Security · [ ] 27. App Optimization · [ ] 28. Production Builds
- [ ] 29. Common Pitfalls · [ ] 30. Best Practices

</details>

<details open>
<summary><strong>Part 2 — Beyond the Basics (14 topics)</strong></summary>

- [ ] 31. Bridge vs New Architecture (JSI/Fabric/TurboModules) · [ ] 32. Threading Model
- [ ] 33. Hermes · [ ] 34. Metro Bundler · [ ] 35. Expo vs Bare · [ ] 36. TypeScript
- [ ] 37. Modern State Mgmt (RTK/Zustand/TanStack Query) · [ ] 38. Rendering & Reconciliation
- [ ] 39. Accessibility · [ ] 40. i18n & Localization · [ ] 41. Deep Linking
- [ ] 42. OTA Updates · [ ] 43. CI/CD · [ ] 44. Large-Scale App Structure

</details>

### Flutter

<details open>
<summary><strong>Part 4 — Dart Crash Course</strong></summary>

- [ ] Variables, types & null safety · [ ] Functions & arrow syntax · [ ] Classes & constructors
- [ ] Collections (List/Map/Set) · [ ] Async: Future/async-await · [ ] Streams
- [ ] Everything-is-a-widget mental model

</details>

<details open>
<summary><strong>Part 5 — Flutter Field Guide (30 topics, mirrors Part 1)</strong></summary>

- [ ] F1. What Is Flutter? · [ ] F2. Flutter vs React Native · [ ] F3. Core Widgets · [ ] F4. Styling
- [ ] F5. Navigation · [ ] F6. Networking · [ ] F7. State Management · [ ] F8. Async Operations
- [ ] F9. Performance · [ ] F10. Platform Channels · [ ] F11. Debugging · [ ] F12. Platform Differences
- [ ] F13. ListView/GridView · [ ] F14. Image Handling · [ ] F15. Storage · [ ] F16. Permissions
- [ ] F17. Testing · [ ] F18. Error Handling · [ ] F19. Animations · [ ] F20. Gestures
- [ ] F21. Keyboard Handling · [ ] F22. Camera · [ ] F23. Location · [ ] F24. Push Notifications
- [ ] F25. Background Tasks · [ ] F26. Security · [ ] F27. App Optimization · [ ] F28. Production Builds
- [ ] F29. Common Pitfalls · [ ] F30. Best Practices

</details>

<details open>
<summary><strong>Part 6 — Exercises</strong></summary>

- [ ] Beginner set (3 exercises) · [ ] Intermediate set (5 exercises) · [ ] Advanced set (4+ exercises)

</details>

<details open>
<summary><strong>Part 7 — Future Topics</strong></summary>

- [ ] *(empty — waiting on topics you send next)*

</details>

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

**Part 4 — Dart Crash Course for JavaScript Developers**

- [Variables & Types](#variables--types)
- [Null Safety](#-null-safety--the-one-genuinely-new-idea)
- [Functions](#functions)
- [Classes & Constructors](#classes--constructors)
- [Collections](#collections)
- [Async: Future, async/await & Streams](#async-future-asyncawait--streams)
- [The "Everything Is a Widget" Mental Model](#the-everything-is-a-widget-mental-model)

**Part 5 — Flutter: The Complete Field Guide (mirrors Part 1, topic for topic)**

F1. [What Is Flutter?](#f1-what-is-flutter) · F2. [Flutter vs. React Native](#f2-flutter-vs-react-native) · F3. [Core Widgets](#f3-core-widgets) · F4. [Styling in Flutter](#f4-styling-in-flutter) · F5. [Navigation](#f5-navigation)
F6. [Networking / API Calls](#f6-networking--api-calls) · F7. [State Management](#f7-state-management) · F8. [Async Operations](#f8-async-operations) · F9. [Performance Optimization](#f9-performance-optimization) · F10. [Platform Channels](#f10-platform-channels)
F11. [Debugging](#f11-debugging) · F12. [Platform Differences](#f12-platform-differences) · F13. [ListView / GridView](#f13-listview--gridview) · F14. [Image Handling](#f14-image-handling) · F15. [Storage](#f15-storage)
F16. [Permissions](#f16-permissions) · F17. [Testing](#f17-testing) · F18. [Error Handling](#f18-error-handling) · F19. [Animations](#f19-animations) · F20. [Gestures](#f20-gestures)
F21. [Keyboard Handling](#f21-keyboard-handling) · F22. [Camera Integration](#f22-camera-integration) · F23. [Location Services](#f23-location-services) · F24. [Push Notifications](#f24-push-notifications) · F25. [Background Tasks](#f25-background-tasks)
F26. [Security](#f26-security) · F27. [App Optimization](#f27-app-optimization) · F28. [Building for Production](#f28-building-for-production) · F29. [Common Pitfalls](#f29-common-pitfalls) · F30. [Best Practices](#f30-best-practices)

**Part 6 — Hands-On Exercises**

- Beginner: [Counter](#exercise-b1--counter-with-increment-decrement--reset) · [Static List with Images](#exercise-b2--static-list-with-images) · [Form with Validation](#exercise-b3--form-with-validation)
- Intermediate: [Fetch & Display Remote Data](#exercise-i1--fetch--display-remote-data-loading--error--success-states) · [Three-Screen Navigation with Params](#exercise-i2--three-screen-navigation-with-params) · [Persisted Todo List](#exercise-i3--persisted-todo-list) · [Infinite Scroll with Pull-to-Refresh](#exercise-i4--infinite-scroll-with-pull-to-refresh) · [Debounced Search](#exercise-i5--debounced-search)
- Advanced: [Auth Flow with Secure Token Storage](#exercise-a1--authentication-flow-with-secure-token-storage) · [End-to-End Push Notifications](#exercise-a2--end-to-end-push-notifications) · [Offline-First Todo List with Sync](#exercise-a3--offline-first-todo-list-with-sync) · [Animated Gesture-Driven Onboarding with Deep Linking](#exercise-a4--animated-gesture-driven-onboarding-with-deep-linking)

**Part 7 — Future Topics**

- [Reserved — nothing added yet](#part-7--future-topics)

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

*Source note for Parts 1–3: "Complete React Native Interview Questions & Answers Guide" (62-page PDF, shared via LinkedIn, dated August 2026) — Part 1 topics and code samples drawn from that document. Part 2, Part 3, all "Why it matters"/"Where people get burned" framing, and all diagrams are additions.*

---

# PART 4 — DART CRASH COURSE FOR JAVASCRIPT DEVELOPERS

You already know JavaScript from React Native. Dart is close enough to JS/TypeScript that this will take about 30 minutes to read, not weeks — the goal here is *not* to teach you programming, it's to translate what you already know into Dart's syntax and its one genuinely unfamiliar idea (sound null safety). Skip anything that already looks obvious; read closely anything marked **⚠ different from JS**.

## Variables & Types

```dart
// Dart — statically typed, but `var` still infers the type (like TS's `let x = 5`)
var name = 'Ali';           // inferred as String
String city = 'Cairo';      // explicit type — Dart uses PascalCase type names
int age = 25;                // NOT "number" — Dart splits int and double
double price = 9.99;
bool isActive = true;
final id = 42;                // ⚠ `final` = can be set ONCE, then immutable (like JS `const`... for the binding)
const pi = 3.14159;           // ⚠ `const` = a COMPILE-TIME constant, stricter than `final`
```

| JavaScript | Dart | Note |
|---|---|---|
| `let x = 5;` | `var x = 5;` | both infer the type |
| `const x = 5;` | `final x = 5;` | Dart's `const` is stricter — compile-time only |
| `number` | `int` / `double` | Dart has no single numeric type |
| `string` | `String` | capitalized — all Dart built-in types are |
| `` `Hello ${name}` `` | `'Hello $name'` or `'Hello ${expr}'` | `$var` works without braces for simple vars |

## ⚠ Null Safety — the one genuinely new idea

This is Dart's biggest departure from JS, and the single most important thing to get comfortable with before writing any real Flutter code. In JS, **any** variable can be `null`/`undefined` at any time, and the compiler never stops you from using it anyway (hence `Cannot read property 'x' of undefined`, forever). Dart's type system tracks nullability **at compile time**:

```dart
String name = 'Ali';        // can NEVER be null — the compiler guarantees it
String? nickname;           // the `?` means "this CAN be null" — starts as null

// The compiler physically will not let you use a nullable value unsafely:
print(nickname.length);     // ❌ COMPILE ERROR — nickname might be null

print(nickname?.length);    // ✅ "safe navigation" — returns null if nickname is null
print(nickname!.length);    // ✅ "I PROMISE this isn't null" — crashes at runtime if wrong
print(nickname ?? 'Guest'); // ✅ "if null, use this instead" (like JS's `??`)
```

```
        String                   String?
┌───────────────────┐    ┌──────────────────────┐
│ CANNOT be null    │    │ CAN be null OR       │
│ compiler          │    │ hold a String        │
│ guarantees a      │    │ compiler forces you  │
│ real value        │    │ to check before use  │
└───────────────────┘    └──────────────────────┘
```

**Why it matters:** a huge class of RN/JS runtime crashes (`undefined is not an object`) simply **cannot compile** in Dart — the compiler catches them before the app ever runs. This is genuinely one of Flutter's biggest advantages over RN/JS, and it's worth internalizing early rather than fighting it.

## Functions

```dart
// Named function — very close to TS
int add(int a, int b) {
  return a + b;
}

// Arrow syntax — for single-expression functions (like JS arrow functions)
int add(int a, int b) => a + b;

// Optional named parameters — ⚠ different from JS: curly braces = named args,
// and this is EXACTLY how Flutter widgets take their props (see Part 5)
void greet({required String name, int age = 18}) {
  print('Hello $name, age $age');
}
greet(name: 'Ali');              // age defaults to 18
greet(name: 'Ali', age: 25);

// Optional positional parameters — square brackets
String describe(String name, [String? title]) {
  return title != null ? '$title $name' : name;
}
```

## Classes & Constructors

```dart
// A basic class — similar shape to a JS/TS class
class Person {
  String name;
  int age;

  Person(this.name, this.age);   // ⚠ "constructor shorthand" — this line IS the constructor

  void greet() {
    print('Hi, I am $name');
  }
}

final p = Person('Ali', 25);     // ⚠ no `new` keyword needed (optional, unlike old JS)
```

```dart
// Named constructors — ⚠ no equivalent in JS; lets one class have multiple
// "ways to build it," which is used CONSTANTLY in Flutter widget code
class Circle {
  double radius;
  Circle(this.radius);
  Circle.unitCircle() : radius = 1.0;   // Circle.unitCircle() is a second constructor
}

// Named/required parameters in a constructor — THIS is the pattern every
// single Flutter widget you write will use
class UserCard {
  final String name;
  final int age;
  const UserCard({required this.name, required this.age});   // note: const constructor!
}
```

## Collections

```dart
// List — Dart's Array
List<String> names = ['Ali', 'Sara', 'Omar'];
names.add('Layla');
names.map((n) => n.toUpperCase()).toList();   // .map exists, but needs .toList() —
                                                // Dart collections are lazy iterables by default

// Map — Dart's Object/plain-object-as-dictionary, or JS's Map
Map<String, int> ages = {'Ali': 25, 'Sara': 30};
print(ages['Ali']);          // 25
ages['Omar'] = 28;

// Set — same idea as JS Set
Set<String> tags = {'flutter', 'dart'};

// Spread operator — same concept as JS
final combined = [...names, 'Extra'];

// The "if"/"for" inside a collection literal — ⚠ no JS equivalent, but used
// constantly in Flutter's widget-building code
final widgets = [
  'Always here',
  if (showExtra) 'Conditionally here',
  for (var n in names) 'Name: $n',
];
```

## Async: Future, async/await & Streams

```dart
// Future<T> is EXACTLY Dart's Promise<T> — same async/await keywords as JS
Future<String> fetchUser() async {
  final response = await http.get(Uri.parse('https://api.example.com/user'));
  return response.body;
}

void loadUser() async {
  try {
    final user = await fetchUser();
    print(user);
  } catch (error) {
    print('Error: $error');
  }
}
```

```dart
// Stream<T> — Dart's version of an Observable / async iterable: a Future
// resolves ONCE, a Stream can emit values repeatedly over time (a websocket,
// a location watcher, a counter). This is exactly the shape of RN's
// event-emitter-style APIs (Geolocation.watchPosition, Keyboard.addListener)
// but built into the language itself.
Stream<int> countStream() async* {
  for (int i = 1; i <= 5; i++) {
    await Future.delayed(Duration(seconds: 1));
    yield i;                          // "emit" a value, like a generator's `yield` in JS
  }
}

// Consuming a stream
countStream().listen((value) => print('Got: $value'));
```

| RN/JS concept | Dart/Flutter equivalent |
|---|---|
| `Promise<T>` | `Future<T>` |
| `async`/`await` | identical keywords |
| `.then()` | `.then()` — also exists on Futures |
| an event emitter / observable | `Stream<T>` |
| `Promise.all([...])` | `Future.wait([...])` |

## The "Everything Is a Widget" Mental Model

This is the single biggest conceptual shift coming from RN, and it's worth stating plainly before Part 5: in React Native, **components are functions that return JSX describing views**. In Flutter, **there is no separate "markup language" at all** — a `Column`, a `Padding`, a `Text`, even invisible layout concepts, are all just Dart **classes**, and your UI is a plain Dart object tree built by nesting constructor calls:

```dart
// This IS the "markup" — it's just Dart object construction, nested
Widget build(BuildContext context) {
  return Padding(
    padding: EdgeInsets.all(16),
    child: Column(
      children: [
        Text('Hello'),
        ElevatedButton(onPressed: () {}, child: Text('Press me')),
      ],
    ),
  );
}
```

There's no JSX-to-JS compilation step, no separate template syntax to learn — it's Dart, all the way down. Part 5, Topic F3 covers this in full depth.

---

# PART 5 — FLUTTER: THE COMPLETE FIELD GUIDE

Same structure as Part 1, same depth, but for Flutter — and since you're coming from React Native, every topic opens with the RN comparison first.

## F1. What Is Flutter?

**What it is.** Flutter is Google's cross-platform UI toolkit. Like React Native, you write one Dart codebase and ship to iOS and Android (and web, desktop, embedded — Flutter's reach is wider). **Unlike** React Native, Flutter does **not** render real native views at all — it draws every single pixel itself, using its own 2D rendering engine (Skia, being replaced by the newer Impeller as of recent Flutter versions).

**Why it matters — this is the single biggest conceptual difference from RN.** RN's whole architecture (Part 1/Topic 1, Topic 31) exists to bridge JS to *real* native `UIView`/`android.view.View` objects. Flutter skips that problem entirely by not using native views as its rendering target — it paints buttons, text, scrollbars, everything, onto a blank canvas the OS gives it. This is *why* a Flutter app looks pixel-identical on an old and a new phone, on iOS and Android (nothing to reinterpret), and why Flutter doesn't have RN's "bridge" concept, "New Architecture," or `NativeModules` — there's no view layer to bridge to in the first place.

```
┌─────────────────────────────┐
│   Your Flutter app (Dart)   │   Your widget tree — compiled AOT to native
└─────────────────────────────┘   ARM/x64 machine code for release (JIT for
               │                  dev / hot reload)
               ▼
┌─────────────────────────────┐
│ Flutter Engine (C++, Skia)  │   Skia (2D graphics engine) — Flutter draws
└─────────────────────────────┘   EVERY pixel itself: text, buttons,
               │                  scrollbars. Nothing is a real native
               ▼                  UIKit/Android View.
┌─────────────────────────────┐
│  OS Canvas / Surface        │   A blank canvas/texture the OS hands
└─────────────────────────────┘   Flutter — it paints the whole UI onto it
                                   directly, frame by frame.
```

```dart
// The Flutter equivalent of RN's "Simple Example" from Topic 1
import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) => const MaterialApp(home: CounterScreen());
}

class CounterScreen extends StatefulWidget {
  const CounterScreen({super.key});
  @override
  State<CounterScreen> createState() => _CounterScreenState();
}

class _CounterScreenState extends State<CounterScreen> {
  int count = 0;

  void _increment() => setState(() => count++);   // ⚠ setState, not a hook — see F7

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Count: $count'),
            ElevatedButton(onPressed: _increment, child: const Text('Increment')),
          ],
        ),
      ),
    );
  }
}
```

**Advantages:** pixel-perfect consistency across devices/OS versions, generally excellent raw rendering performance (no bridge to cross), a genuinely polished tooling story (hot reload is *very* fast, DevTools are strong), and one codebase reaching mobile + web + desktop.

**Limitations:** because Flutter doesn't use native widgets, it has to *re-implement* every platform convention itself (iOS-style scroll physics, native text selection handles, etc.) — usually done well, but it's a different kind of work than RN's "just use the real native component." App size tends to run a bit larger than a comparable RN app (the whole rendering engine ships in your binary). And your team needs Dart, a language with real adoption outside Flutter but nowhere near JavaScript's ubiquity.

**Where people get burned:** saying "Flutter is basically React Native but with Dart" undersells the actual architectural difference — RN's core value proposition is "your UI IS the real native UI"; Flutter's is "your UI is identical everywhere because nothing is native." Both are valid, different bets — know which one you're being asked about.

---

## F2. Flutter vs. React Native

**What it is.** A direct, practical comparison — the table every "why did you pick X" interview question is really asking about.

| | React Native | Flutter |
|---|---|---|
| Language | JavaScript / TypeScript | Dart |
| UI rendering | Real native views (via the bridge/JSI) | Self-drawn via Skia/Impeller — no native views |
| Component/Widget model | Functions returning JSX | Classes (`StatelessWidget`/`StatefulWidget`) returning widget trees |
| Styling | `StyleSheet` objects (Flexbox) | Widgets themselves (`Padding`, `Container`, `Theme`) |
| State (local) | `useState` | `setState` (or a state-mgmt package — F7) |
| Hot reload | Yes (Fast Refresh) | Yes, and often noticeably faster |
| Navigation | React Navigation | `Navigator` / `go_router` |
| Package manager | npm/yarn | pub.dev / `pub` |
| Null safety | No (JS has none; TS is opt-in, erased at runtime) | Yes — enforced by the compiler (Part 4) |
| Typical use case | Teams with existing React/web expertise | Teams wanting pixel-perfect cross-platform consistency, or already invested in Dart/Google's ecosystem |

**Component-to-widget mapping** — this is the cheat sheet you'll reach for constantly for the first month:

```jsx
// React Native                    // Flutter
<View>                             Container() / Column() / Row()
<Text>                             Text()
<Image>                            Image.network() / Image.asset()
<TextInput>                        TextField()
<Button> / <TouchableOpacity>      ElevatedButton() / GestureDetector()
<ScrollView>                       SingleChildScrollView()
<FlatList>                         ListView.builder()
<SafeAreaView>                     SafeArea()
StyleSheet.create({...})           (styling is done via widgets themselves)
useState                           setState / StatefulWidget
useEffect                          initState() / dispose()
```

**Where people get burned:** treating this as "which is objectively better" — it's a real, defensible trade-off. RN's pitch is code-sharing with your web React team and true native UI; Flutter's is rendering consistency and a single toolchain that reaches further (web/desktop) with less platform-specific fuss. A good answer names the actual trade-off for the actual team/project, not a universal winner.

---

## F3. Core Widgets

**What it is.** Flutter's equivalent of RN's Core Components (Part 1/Topic 3) — except, per Part 4's closing note, these aren't "components rendering JSX," they're plain Dart **classes** you nest inside each other's constructors. The two foundational widget types you'll extend constantly:

```dart
// StatelessWidget — has no mutable state, like a pure RN functional
// component with no useState. Rebuilds only when its PARENT rebuilds
// it with new props ("parameters" in Dart-speak).
class Greeting extends StatelessWidget {
  final String name;
  const Greeting({super.key, required this.name});

  @override
  Widget build(BuildContext context) => Text('Hello, $name');
}

// StatefulWidget — owns mutable state, like an RN component using useState.
// Split into TWO classes: the widget itself (immutable config) and its
// State object (mutable, survives across rebuilds).
class Counter extends StatefulWidget {
  const Counter({super.key});
  @override
  State<Counter> createState() => _CounterState();
}

class _CounterState extends State<Counter> {
  int count = 0;   // this is the "state" — lives in the State object, not the widget
  @override
  Widget build(BuildContext context) => Text('$count');
}
```

**The widget tree**, mirroring RN's component hierarchy from Topic 3:
```
MaterialApp (root — theme, navigation, localization)
└── Scaffold (screen scaffolding — app bar, body, FAB)
    ├── AppBar
    ├── Column (like flexDirection: 'column' — the DEFAULT layout widget)
    │   ├── Text
    │   ├── Image
    │   └── Row (like flexDirection: 'row')
    │       ├── ElevatedButton
    │       └── TextField
    └── ListView.builder (Flutter's FlatList — virtualized)
        └── ListTile
```

**The essential widgets, mapped to what you already know:**

```dart
// Text — same job as RN's <Text>, but ALL styling lives in one TextStyle object
Text(
  'Hello World',
  style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
)

// Image — three sources, same three concepts as RN's Topic 3/14
Image.asset('assets/logo.png');                          // bundled
Image.network('https://example.com/image.png');           // remote
Image.memory(bytes);                                       // from raw bytes (Dart's base64 equivalent)

// TextField — Flutter's TextInput; ⚠ uses a Controller instead of value/onChangeText
final controller = TextEditingController();
TextField(
  controller: controller,
  decoration: const InputDecoration(hintText: 'Type here'),
  onChanged: (text) => print(text),
  obscureText: false,       // Flutter's secureTextEntry
  keyboardType: TextInputType.emailAddress,
)

// ElevatedButton — Flutter's <Button>, but the label is a CHILD widget, not a string prop
ElevatedButton(
  onPressed: () => print('Pressed'),
  child: const Text('Press me'),
)

// Column / Row — Flutter's Flexbox equivalent (full depth in F4)
Column(
  mainAxisAlignment: MainAxisAlignment.center,   // like justifyContent
  crossAxisAlignment: CrossAxisAlignment.center, // like alignItems
  children: [Text('Item 1'), Text('Item 2')],
)
```

**Where people get burned:** forgetting `const` on widgets that never change (`const Text('Hello')`) — this isn't just style, it's a real performance signal to Flutter that this widget subtree can be skipped entirely on rebuild (F9 covers this in depth; there's no direct RN equivalent since JS has no compile-time constant widgets). Also: a `StatefulWidget`'s `build()` method can be called many times, but its `State` object (and therefore its instance fields) persists across those calls — that persistence is *where* your state actually lives, not in the widget itself, which gets thrown away and recreated on every rebuild.

---

## F4. Styling in Flutter

**What it is.** There's no `StyleSheet.create()` equivalent — in Flutter, **styling widgets ARE the widget tree**. `Padding`, `Center`, `Container`, `DecoratedBox` are all real widgets you wrap other widgets in, and text/shape styling is done via style *objects* (`TextStyle`, `BoxDecoration`) passed as parameters.

**Why it matters.** This trips up almost everyone coming from RN/CSS-flavored styling at first — "where's my stylesheet?" The honest answer: your **widget composition** *is* your stylesheet. Wrapping a `Text` in a `Padding`, then a `Center`, then a `Container` with a `BoxDecoration` is the direct equivalent of applying four different CSS-ish properties in RN — except each one is its own explicit, nestable widget.

```dart
// Container — Flutter's single most-used "do lots of styling at once" widget,
// closest in spirit to a RN <View style={{...}}>
Container(
  padding: const EdgeInsets.all(16),
  margin: const EdgeInsets.symmetric(vertical: 8),
  decoration: BoxDecoration(
    color: Colors.white,
    borderRadius: BorderRadius.circular(10),
    border: Border.all(color: Colors.grey, width: 1),
    boxShadow: [
      BoxShadow(color: Colors.black26, blurRadius: 4, offset: Offset(0, 2)),
    ],
  ),
  child: const Text('Styled Box'),
)
```

**Flexbox — Column/Row map directly onto RN's Flexbox concepts** (Topic 4), just with Dart enum names instead of strings:
```dart
Column(                                          // like flexDirection: 'column' (RN's default!)
  mainAxisAlignment: MainAxisAlignment.center,    // justifyContent
  crossAxisAlignment: CrossAxisAlignment.center,  // alignItems
  children: [
    Expanded(flex: 1, child: Text('Left')),        // flex: 1
    Expanded(flex: 2, child: Text('Right (2x)')),   // flex: 2
  ],
)
```

```
 Column            Row
┌──────────┐      ┌───────────────────────────┐
│ Item A   │      │ [Left]      [Right (2x)]  │
│ Item B   │      │ ──── main axis ──────►    │
│ Item C   │      │                           │
└──────────┘      └───────────────────────────┘
```

**Text styling** — one object instead of RN's scattered `fontSize`/`fontWeight`/`color` style props:
```dart
Text(
  'Hello',
  style: TextStyle(
    fontSize: 16,
    fontWeight: FontWeight.bold,
    color: Colors.grey[800],
    letterSpacing: 0.5,
  ),
)
```

**Theming** — Flutter's answer to "consistent styling across the whole app," and a meaningfully more built-in/structured equivalent to what RN developers usually hand-roll with a Context provider:
```dart
MaterialApp(
  theme: ThemeData(
    primaryColor: Colors.blue,
    textTheme: const TextTheme(
      bodyLarge: TextStyle(fontSize: 16, color: Colors.black87),
    ),
  ),
  darkTheme: ThemeData.dark(),   // ⚠ built-in dark mode support, no manual Context needed
  themeMode: ThemeMode.system,   // follows the OS setting automatically
  home: const HomeScreen(),
)

// Reading the theme anywhere in the tree — like RN's useContext(ThemeContext)
final theme = Theme.of(context);
Text('Themed', style: theme.textTheme.bodyLarge)
```

**Responsive design** — same underlying need as RN's `useWindowDimensions` (Topic 4), different API:
```dart
final size = MediaQuery.of(context).size;   // reactive — rebuilds on rotation, unlike a one-shot read
Container(width: size.width > 600 ? 600 : size.width)

// LayoutBuilder — react to the space a widget itself has, not just the whole screen
LayoutBuilder(
  builder: (context, constraints) {
    return constraints.maxWidth > 600 ? const WideLayout() : const NarrowLayout();
  },
)
```

**Where people get burned:** trying to find "the CSS file" or a single stylesheet object — there isn't one, and looking for it is the #1 sign someone is still thinking in RN/web terms. The mental shift: composition (which widgets you nest, in what order) **is** the styling model, not a separate concern layered on top of it.

---

## F5. Navigation

**What it is.** Flutter's built-in `Navigator` widget manages a **stack of routes**, conceptually identical to React Navigation's Stack Navigator (Topic 5) — `push` adds a screen, `pop` removes one. For anything beyond a simple stack (tabs, drawers, deep-linkable URLs), most real Flutter apps reach for the community package **`go_router`**, which is functionally Flutter's React Navigation.

```dart
// Basic imperative navigation — Navigator.push/pop, same mental model as
// RN's navigation.navigate()/goBack()
Navigator.push(
  context,
  MaterialPageRoute(builder: (context) => const DetailsScreen(id: 123)),
);

Navigator.pop(context);   // like RN's navigation.goBack()
```

```dart
// Named routes — closer to React Navigation's declarative Stack.Screen setup
MaterialApp(
  initialRoute: '/',
  routes: {
    '/': (context) => const HomeScreen(),
    '/details': (context) => const DetailsScreen(),
  },
)
Navigator.pushNamed(context, '/details', arguments: {'id': 123});

// Reading the passed argument on the destination screen
final args = ModalRoute.of(context)!.settings.arguments as Map;
final id = args['id'];
```

```dart
// go_router — the modern, URL-based standard (this is what you'd reach for
// in a real production app; directly comparable to React Navigation +
// its linking config from RN Topic 41, combined into one API)
final router = GoRouter(
  routes: [
    GoRoute(path: '/', builder: (context, state) => const HomeScreen()),
    GoRoute(
      path: '/details/:id',
      builder: (context, state) => DetailsScreen(id: state.pathParameters['id']!),
    ),
  ],
);

MaterialApp.router(routerConfig: router);

// Navigating
context.go('/details/42');
context.push('/details/42');   // push adds to the stack; go REPLACES the current location
```

**Bottom tabs & drawers** — same UI patterns as RN Topic 5, using widgets instead of navigator factories:
```dart
// Bottom tabs
Scaffold(
  bottomNavigationBar: BottomNavigationBar(
    currentIndex: selectedIndex,
    onTap: (index) => setState(() => selectedIndex = index),
    items: const [
      BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
      BottomNavigationBarItem(icon: Icon(Icons.settings), label: 'Settings'),
    ],
  ),
  body: screens[selectedIndex],
)

// Drawer
Scaffold(
  drawer: Drawer(
    child: ListView(children: [
      ListTile(title: const Text('Home'), onTap: () => Navigator.pop(context)),
    ]),
  ),
)
```

**Where people get burned:** `Navigator.push` vs `context.go()` (go_router) behave differently in a way that mirrors RN's `navigate()` vs `push()` gotcha (Topic 5) — `go()` **replaces** the current location (no new stack entry, similar to `navigate()` reusing an existing screen), while `push()` **always** adds a new one. Mixing the two without understanding the difference produces a back-button history that doesn't match what the user expects.

---

## F6. Networking / API Calls

**What it is.** Flutter has no built-in `fetch` — the standard package is **`http`** (simple, similar to RN's `fetch`) or **`dio`** (richer: interceptors, cancellation, automatic JSON — closer to `axios`).

```dart
import 'package:http/http.dart' as http;
import 'dart:convert';

Future<void> fetchData() async {
  try {
    final response = await http.get(Uri.parse('https://api.example.com/data'));
    if (response.statusCode == 200) {
      final data = jsonDecode(response.body);   // ⚠ manual JSON decode — http doesn't auto-parse
      print(data);
    } else {
      print('Server error: ${response.statusCode}');
    }
  } catch (error) {
    print('Network error: $error');
  }
}
```

```dart
// dio — closer to axios: auto JSON, interceptors for things like attaching
// an auth token to every request globally (exactly RN Topic 6's axios pattern)
import 'package:dio/dio.dart';

final dio = Dio();
dio.interceptors.add(InterceptorsWrapper(
  onRequest: (options, handler) {
    options.headers['Authorization'] = 'Bearer $token';
    handler.next(options);
  },
));

final response = await dio.get('https://api.example.com/data');
print(response.data);   // already decoded
```

```dart
// POST request with http
final response = await http.post(
  Uri.parse('https://api.example.com/users'),
  headers: {'Content-Type': 'application/json'},
  body: jsonEncode({'name': 'Ali', 'email': 'ali@example.com'}),
);
```

**Wiring a fetch into a widget** — this is where Flutter's story diverges most visibly from RN's `useEffect` + `useState` dance; see **F8**'s `FutureBuilder` for the idiomatic way to do this without manually managing `loading`/`error`/`data` state yourself.

**Where people get burned:** forgetting that, exactly like RN's `fetch` (Topic 6), the `http` package does **not** throw on a 4xx/5xx response — you must check `response.statusCode` yourself. `dio`, like `axios`, *does* throw by default on non-2xx responses (via a `DioException`) — know which library you're using before assuming either behavior.

---

## F7. State Management

**What it is.** Flutter's baseline is `setState()` inside a `StatefulWidget` — the direct equivalent of RN's `useState`. For state shared across many widgets, the ecosystem has three tiers, roughly matching RN's own progression (Topic 7 → Topic 37): **`Provider`** (simple, widely used, closest to Context+hooks), **`Riverpod`** (Provider's successor — compile-safe, more powerful, increasingly the default recommendation), and **`Bloc`** (a stricter, more structured event-driven pattern, popular in larger teams).

```dart
// setState — local state, the default choice (== RN's useState)
class Counter extends StatefulWidget {
  const Counter({super.key});
  @override
  State<Counter> createState() => _CounterState();
}
class _CounterState extends State<Counter> {
  int count = 0;
  @override
  Widget build(BuildContext context) {
    return Column(children: [
      Text('Count: $count'),
      ElevatedButton(onPressed: () => setState(() => count++), child: const Text('Increment')),
    ]);
  }
}
```

```dart
// Provider — closest to RN's Context API (Topic 7), but with selective
// rebuilds baked in (Consumer only rebuilds itself, not the whole subtree —
// something plain RN Context does NOT give you for free)
class ThemeModel extends ChangeNotifier {
  bool isDark = false;
  void toggle() { isDark = !isDark; notifyListeners(); }   // like calling setState, but shareable
}

// Registering it — like wrapping your app in a Context.Provider
ChangeNotifierProvider(create: (_) => ThemeModel(), child: const MyApp())

// Reading it — like useContext(ThemeContext)
final theme = context.watch<ThemeModel>();       // rebuilds this widget on change
final theme = context.read<ThemeModel>();        // read once, no rebuild subscription (e.g. inside onPressed)
```

```dart
// Riverpod — Provider's successor: compile-time-safe (no more "Provider not
// found" runtime crashes), works outside the widget tree too. This is the
// closest Flutter equivalent to Zustand's ergonomics (RN Topic 37).
final counterProvider = StateProvider<int>((ref) => 0);

class CounterWidget extends ConsumerWidget {
  const CounterWidget({super.key});
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final count = ref.watch(counterProvider);
    return ElevatedButton(
      onPressed: () => ref.read(counterProvider.notifier).state++,
      child: Text('Count: $count'),
    );
  }
}
```

```
RN's state-management ladder           Flutter's equivalent ladder

useState                               setState
  │  (needs sharing across screens)      │  (needs sharing across screens)
  ▼                                      ▼
Context API                            Provider
  │  (needs bigger scale, structure)     │  (needs bigger scale, structure)
  ▼                                      ▼
Redux Toolkit / Zustand                Riverpod / Bloc
  │  (server data specifically)          │  (server data specifically)
  ▼                                      ▼
TanStack Query                         (Riverpod's AsyncNotifier, or
                                        the `dio` + FutureBuilder pattern)
```

**Where people get burned:** using `context.watch()` inside a build method that doesn't need to rebuild on every change (causes unnecessary rebuilds, the Flutter-side version of over-subscribing to RN Context) — use `context.read()` when you just need a one-off action (like inside a button's `onPressed`), and reach for `Consumer`/`Selector` widgets to scope a rebuild to the smallest possible subtree, mirroring exactly the "don't put everything in one giant Context" lesson from RN Topic 7.

---

## F8. Async Operations

**What it is.** `async`/`await` and `Future<T>` work exactly like RN/JS's `Promise<T>` (Part 4 covered the syntax) — what's genuinely different is Flutter gives you **purpose-built widgets**, `FutureBuilder` and `StreamBuilder`, that turn "fetch data, then show loading/error/data states" into a declarative pattern instead of the manual `useState`+`useEffect` dance from RN Topic 6/8.

```dart
// FutureBuilder — replaces the ENTIRE useState(loading)/useState(error)/
// useState(data) + useEffect pattern from RN with one declarative widget
class UserProfile extends StatelessWidget {
  final Future<User> userFuture;
  const UserProfile({super.key, required this.userFuture});

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<User>(
      future: userFuture,
      builder: (context, snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting) {
          return const CircularProgressIndicator();   // RN's ActivityIndicator
        }
        if (snapshot.hasError) {
          return Text('Error: ${snapshot.error}');
        }
        return Text(snapshot.data!.name);
      },
    );
  }
}
```

```dart
// StreamBuilder — for ongoing/repeated data (a websocket, Firestore's live
// query, a location watch) — the declarative equivalent of RN's
// Geolocation.watchPosition + manual setState pattern (RN Topic 23)
StreamBuilder<int>(
  stream: countStream(),
  builder: (context, snapshot) {
    if (!snapshot.hasData) return const CircularProgressIndicator();
    return Text('Count: ${snapshot.data}');
  },
)
```

```dart
// Sequential vs parallel — identical concepts and gotchas to RN Topic 8
// Sequential
final user = await fetchUser();
final posts = await fetchPosts(user.id);   // needs user.id — must wait

// Parallel — strictly faster when calls are independent
final results = await Future.wait([fetchUser(), fetchPosts()]);

// Partial success — Dart's Future.wait has no built-in "allSettled," so this
// is a place RN's Promise.allSettled is actually more convenient out of the box;
// in Dart you'd wrap each Future to catch its own error first:
final results = await Future.wait([
  fetchUser().then((v) => v).catchError((e) => null),
  fetchPosts().then((v) => v).catchError((e) => null),
]);
```

**Where people get burned:** re-creating a new `Future` inside `build()` (e.g. `future: fetchUser()` written directly in the widget tree) — because `build()` can run many times, this kicks off a **brand-new network request on every rebuild**, the Flutter-specific version of RN's "new object every render" mistake (Topic 4/9). Always create the `Future` once (in `initState()`, or held in a field/provider) and pass the *same* Future reference into `FutureBuilder`.

---

## F9. Performance Optimization

**What it is.** Because Flutter re-runs a widget's `build()` method to decide what changed (conceptually similar to React's render phase — Topic 38), the same core discipline applies: **avoid unnecessary rebuilds, and make the rebuilds that do happen cheap.**

```dart
// const constructors — Flutter's most important, most RN-unfamiliar
// optimization. A `const` widget is built ONCE at compile time; Flutter can
// skip rebuilding it entirely, forever, no matter how many times its parent
// rebuilds — there is no direct RN equivalent since JS has no compile-time
// constants like this.
const Text('Static label')          // never rebuilds
Text('Static label')                // ⚠ rebuilds every time its parent does, for nothing
```

```dart
// Splitting a widget into smaller pieces so ONLY the part that changes
// rebuilds — the Flutter-native version of RN's React.memo (Topic 9)
class CounterDisplay extends StatelessWidget {
  final int count;
  const CounterDisplay({super.key, required this.count});   // const constructor
  @override
  Widget build(BuildContext context) => Text('$count');
}
// Now only CounterDisplay rebuilds when count changes — the rest of the
// screen, if extracted into its own const widgets, does not.
```

```dart
// ListView.builder — Flutter's virtualized list, same idea as RN's FlatList
// (Topic 13): only builds the items near the viewport
ListView.builder(
  itemCount: items.length,
  itemBuilder: (context, index) => ListTile(title: Text(items[index].name)),
)
```

```dart
// RepaintBoundary — isolates a subtree into its own compositing layer, so
// an animation or frequent repaint in ONE part of the screen doesn't force
// Flutter to repaint everything around it. No direct RN equivalent — this
// is a Flutter-specific rendering-layer optimization.
RepaintBoundary(
  child: AnimatedWidget(),
)
```

**Where people get burned:** forgetting `const` on widgets that never change — this is genuinely the single most common Flutter performance miss for people coming from RN, precisely because RN/JS has nothing analogous to teach the habit. Also: calling `setState()` in a `StatefulWidget` rebuilds **that whole widget's `build()` method**, not just "the part that visually changed" — if `build()` is large, split it into smaller `const`-able child widgets rather than trying to optimize inside one giant method.

---

## F10. Platform Channels

**What it is.** Flutter's direct equivalent of RN's Native Modules (Topic 10) — the escape hatch for anything the Flutter framework doesn't expose itself (a vendor SDK, a platform-specific API). A `MethodChannel` sends named, asynchronous messages between your Dart code and native Kotlin/Swift code.

```
 Dart / Flutter           MethodChannel              iOS / Android
┌─────────────┐                                   ┌─────────────────┐
│ Your        │  invokeMethod('getBatteryLevel')  │ Native code     │
│ Dart code   │     (async, JSON-like message     │ (Kotlin /       │
│             │     codec — same idea as RN's     │ Swift)          │
│             │      bridge from Topic 1/31)      │                 │
└─────────────┘                                   └─────────────────┘
```

```dart
// Dart side
import 'package:flutter/services.dart';

const platform = MethodChannel('com.example.app/battery');

Future<int> getBatteryLevel() async {
  try {
    final int level = await platform.invokeMethod('getBatteryLevel');
    return level;
  } on PlatformException catch (e) {
    print('Failed to get battery level: ${e.message}');
    return -1;
  }
}
```

```kotlin
// Android side (Kotlin) — receiving the call
MethodChannel(flutterEngine.dartExecutor.binaryMessenger, "com.example.app/battery")
    .setMethodCallHandler { call, result ->
        if (call.method == "getBatteryLevel") {
            val level = getBatteryLevel()
            result.success(level)
        } else {
            result.notImplemented()
        }
    }
```

**Where people get burned:** just like RN's Native Modules, treating a `MethodChannel` call as your everyday tool instead of a last resort — the vast majority of features already exist as `pub.dev` packages that wrap the platform channel for you (camera, geolocation, file access), the same way most RN apps lean on community native modules rather than writing Objective-C/Kotlin by hand. Also worth knowing by name (not necessarily depth): **Pigeon** (generates type-safe platform channel code instead of hand-writing the message codec) and **FFI** (direct calls into C/C++ code, bypassing the async channel entirely, for latency-critical native interop) — both are the "more advanced than a raw MethodChannel" answers if an interviewer pushes further.

---

## F11. Debugging

**What it is.** **Flutter DevTools** is the single most important tool here — a browser-based suite (widget inspector, timeline/performance view, memory profiler, network view) that ships with the Flutter SDK, roughly playing the combined role of RN's Flipper + React DevTools + Chrome DevTools (Topic 11) in one integrated tool.

```dart
// Basic logging — same idea as RN's console.log, but `print` doesn't
// truncate long output the way React Native's console sometimes does
print('Debug message');
debugPrint('Debug message');   // ⚠ prefer this — throttles output to avoid
                                 // Android's log-line truncation on long strings

// Gate dev-only code — Flutter's __DEV__ equivalent
assert(() {
  print('Only runs in debug mode');
  return true;
}());

if (kDebugMode) {   // from package:flutter/foundation.dart
  print('Debug-only branch');
}
```

```dart
// Error handling widget — Flutter's Error Boundary equivalent. Unlike RN's
// class-component-only ErrorBoundary (Topic 11/18), this is a single global
// hook, not a wrappable component you place around specific subtrees.
ErrorWidget.builder = (FlutterErrorDetails details) {
  return Center(child: Text('Something went wrong: ${details.exception}'));
};

// Catching framework-level errors globally
FlutterError.onError = (FlutterErrorDetails details) {
  FlutterError.presentError(details);
  // report to Crashlytics/Sentry here
};
```

**Where people get burned:** relying only on `print()` for anything performance-related — DevTools' **Timeline view** (showing exactly which frames took too long and why) is the actual tool for diagnosing jank, the direct Flutter analog to profiling the JS/UI/Shadow threads in RN (Topic 32). A candidate who only mentions `print()` debugging, with no DevTools story, reads the same way as an RN candidate who's never opened Flipper.

---

## F12. Platform Differences

**What it is.** Flutter ships **two design systems** out of the box — **Material** (Android/Google's design language) and **Cupertino** (iOS-styled widgets) — and a `Platform` class for branching logic, conceptually identical to RN's `Platform.OS` (Topic 12).

```dart
import 'dart:io' show Platform;

if (Platform.isIOS) {
  // iOS-specific code
} else if (Platform.isAndroid) {
  // Android-specific code
}
```

```dart
// Cupertino vs Material widgets — Flutter's version of RN's iOS/Android
// design-pattern divergence (Topic 12), but built directly into the
// framework as two parallel widget libraries rather than something you
// hand-roll per platform
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

Widget platformButton() {
  return Platform.isIOS
      ? CupertinoButton(onPressed: () {}, child: const Text('iOS style'))
      : ElevatedButton(onPressed: () {}, child: const Text('Android style'));
}

// PlatformWidget-style abstraction — a common pattern for apps that want to
// feel native on both, rather than "one look everywhere" (Flutter's default)
```

```dart
// Safe areas — Flutter's SafeAreaView equivalent works correctly on BOTH
// platforms out of the box (unlike RN's SafeAreaView, which is iOS-only —
// Topic 12's gotcha)
Scaffold(
  body: SafeArea(
    child: Text('Safe area content'),
  ),
)
```

**Where people get burned:** assuming "Flutter looks the same everywhere" is always the right call — it's Flutter's *default* (Material on both platforms unless you branch), but that default is also a real product decision: some apps deliberately embrace Cupertino on iOS for a more native feel, others intentionally keep one consistent Material look everywhere as a *brand* choice. Know that this is a decision to make, not an accident of the framework — same underlying lesson as RN Topic 12.

---

## F13. ListView / GridView

**What it is.** `ListView.builder` is Flutter's `FlatList` (RN Topic 13) — same virtualization concept, only the near-viewport items are built and kept in memory; a plain `ListView(children: [...])` is Flutter's `ScrollView` — it builds every child immediately, fine only for small, fixed content.

```dart
// ListView.builder — virtualized, use for anything that could grow
ListView.builder(
  itemCount: items.length,
  itemBuilder: (context, index) {
    final item = items[index];
    return ListTile(title: Text(item.name));
  },
)

// Plain ListView — like RN's ScrollView, fine for small known content
ListView(
  children: const [
    Text('Item 1'),
    Text('Item 2'),
  ],
)

// GridView.builder — Flutter's answer to FlatList's numColumns prop
GridView.builder(
  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2),
  itemCount: items.length,
  itemBuilder: (context, index) => GridTile(child: Text(items[index].name)),
)
```

```dart
// Grouped lists — Flutter has no single "SectionList" widget (RN Topic 13);
// the idiomatic approach is CustomScrollView + Slivers, Flutter's lower-level
// scrolling primitives (steeper learning curve, more control)
CustomScrollView(
  slivers: [
    SliverAppBar(title: Text('My List'), floating: true),
    SliverList(
      delegate: SliverChildBuilderDelegate(
        (context, index) => ListTile(title: Text(items[index].name)),
        childCount: items.length,
      ),
    ),
  ],
)
```

| | RN | Flutter |
|---|---|---|
| Virtualized list | `FlatList` | `ListView.builder` |
| Small static list | `ScrollView` + `.map()` | `ListView(children: [...])` |
| Grid | `FlatList` + `numColumns` | `GridView.builder` |
| Grouped/sectioned | `SectionList` | `CustomScrollView` + `SliverList` |
| Stable identity per row | `keyExtractor` | Dart's `List` index is implicit — use a `Key` (`ValueKey`) on stateful rows if reordering |

**Where people get burned:** using a plain `ListView(children: buildAllItems())` for a list that could grow — same mistake, same consequence as RN's `.map()`-inside-`ScrollView` pitfall (Topic 29): every item gets built and held in memory up front, unbounded. Always reach for `.builder` constructors once the size isn't small and fixed.

---

## F14. Image Handling

**What it is.** Four image sources, mapping directly onto RN's four (Topic 14): bundled assets, network, memory/file, plus Flutter's `Image.file` for local file paths.

```dart
// Static/bundled — must be declared in pubspec.yaml's assets: section first
Image.asset('assets/logo.png', width: 200, height: 200)

// Network — Flutter measures/lays out network images without you needing
// to pre-specify width/height the way RN's Image sometimes forces you to,
// though specifying them still avoids layout jank while loading
Image.network('https://example.com/image.png', width: 200, height: 200)

// Local file
Image.file(File('/path/to/image.png'))

// From raw bytes (Flutter's base64-ish case)
Image.memory(base64Decode(base64String))
```

```dart
// Loading state + graceful failure — Image.network's built-in callbacks,
// same job as RN's onLoadEnd/onError (Topic 14)
Image.network(
  uri,
  loadingBuilder: (context, child, progress) {
    if (progress == null) return child;
    return const CircularProgressIndicator();
  },
  errorBuilder: (context, error, stackTrace) => const Icon(Icons.error),
)
```

```dart
// Caching — cached_network_image is Flutter's equivalent of RN's
// react-native-fast-image (Topic 14): disk+memory caching, placeholder,
// and error widget support in one package
import 'package:cached_network_image/cached_network_image.dart';

CachedNetworkImage(
  imageUrl: 'https://example.com/image.png',
  placeholder: (context, url) => const CircularProgressIndicator(),
  errorWidget: (context, url, error) => const Icon(Icons.error),
)
```

**Where people get burned:** forgetting to register an asset in `pubspec.yaml` (`flutter: assets: - assets/logo.png`) — unlike RN's `require()`, which just works off the file path, Flutter's asset bundling is explicit and declarative; a missing entry fails silently at runtime with an "unable to load asset" error, not a build-time one.

---

## F15. Storage

**What it is.** The same three tiers as RN (Topic 15), with Flutter-native package names: **`shared_preferences`** (simple key-value, == `AsyncStorage`), **`sqflite`** (SQLite, == `react-native-sqlite-storage`), and **`Hive`** or **`Isar`** (fast, pure-Dart NoSQL object databases — Flutter's answer to Realm, arguably with less native-dependency friction since they're pure Dart).

```dart
import 'package:shared_preferences/shared_preferences.dart';

// Save
Future<void> saveUser(Map<String, dynamic> user) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString('user', jsonEncode(user));
}

// Get
Future<Map<String, dynamic>?> getUser() async {
  final prefs = await SharedPreferences.getInstance();
  final data = prefs.getString('user');
  return data != null ? jsonDecode(data) : null;
}

// Remove
Future<void> removeUser() async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.remove('user');
}
```

```dart
// Hive — fast, pure-Dart, no native SQLite dependency (a real advantage
// over sqflite for simple structured data)
import 'package:hive/hive.dart';

var box = await Hive.openBox('userBox');
box.put('name', 'Ali');
final name = box.get('name');
box.delete('name');
```

```dart
// sqflite — real SQL, for genuinely relational data (same use case as RN's
// react-native-sqlite-storage, Topic 15)
import 'package:sqflite/sqflite.dart';

final db = await openDatabase('my_database.db', version: 1,
  onCreate: (db, version) {
    return db.execute('CREATE TABLE users(id INTEGER PRIMARY KEY, name TEXT)');
  },
);
await db.insert('users', {'name': 'Ali'});
final users = await db.query('users');
```

**Where people get burned:** same as RN's `AsyncStorage` (Topic 15) — `shared_preferences` is **not encrypted**; never store tokens or PII in it directly. Use **`flutter_secure_storage`** (F26) for anything sensitive, exactly as RN reaches for `expo-secure-store`/Keychain-backed storage instead of raw `AsyncStorage`.

---

## F16. Permissions

**What it is.** The community package **`permission_handler`** is Flutter's `react-native-permissions` (RN Topic 16) — one API surface over both platforms' quite different underlying permission systems.

```dart
import 'package:permission_handler/permission_handler.dart';

Future<void> requestCameraPermission() async {
  final status = await Permission.camera.request();
  if (status.isGranted) {
    print('Camera permission granted');
  } else if (status.isDenied) {
    print('Camera permission denied');
  } else if (status.isPermanentlyDenied) {
    openAppSettings();   // same escape hatch as RN's Linking.openSettings()
  }
}

// Check without prompting
final status = await Permission.camera.status;

// Request multiple at once
final statuses = await [Permission.camera, Permission.microphone].request();
```

**Where people get burned:** exactly RN's Topic 16 gotcha, ported directly — once a permission is `isPermanentlyDenied` (the user checked "don't ask again," or denied twice on iOS), calling `.request()` again does **nothing**; you must deep-link to the app's Settings page via `openAppSettings()`, the same shape of fix as RN's `Linking.openSettings()`.

---

## F17. Testing

**What it is.** Flutter's testing pyramid maps almost 1:1 onto RN's (Topic 17): **unit tests** (`test` package — pure Dart logic), **widget tests** (`flutter_test` — like `@testing-library/react-native`, renders a widget and interacts with it), and **integration tests** (`integration_test` package — Flutter's Detox/Maestro equivalent, drives the real compiled app).

```dart
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets('renders correctly', (WidgetTester tester) async {
    await tester.pumpWidget(const MyApp());
    expect(find.text('Hello'), findsOneWidget);
  });

  testWidgets('handles button press', (WidgetTester tester) async {
    await tester.pumpWidget(const MyApp());
    await tester.tap(find.byType(ElevatedButton));
    await tester.pump();   // ⚠ rebuilds the widget tree — like React re-rendering after fireEvent
    expect(find.text('Clicked'), findsOneWidget);
  });
}
```

```dart
// Testing async — pumpAndSettle waits for all animations/futures to finish,
// the Flutter equivalent of Testing Library's findBy* auto-retrying queries
testWidgets('loads data on mount', (WidgetTester tester) async {
  await tester.pumpWidget(const DataScreen());
  expect(find.text('Loading'), findsOneWidget);

  await tester.pumpAndSettle();
  expect(find.text('Data loaded'), findsOneWidget);
});
```

```dart
// Unit test — pure Dart, no widget tree at all, fastest tier
import 'package:test/test.dart';

void main() {
  test('adds two numbers', () {
    expect(add(2, 3), equals(5));
  });
}
```

**Where people get burned:** forgetting `tester.pump()` (or `pumpAndSettle()`) after an interaction — Flutter widget tests don't auto-rebuild the way a real running app does; you have to explicitly tell the test framework to process the frame, or your assertions run against stale UI state.

---

## F18. Error Handling

**What it is.** Same three-layer model as RN (Topic 18) — `try`/`catch` for individual operations, a widget-level error display, and a global handler — with Dart's stricter typing making one thing easier: exceptions are typed, so `catch (e)` can be narrowed to `catch (e) on SpecificException`.

```dart
Future<void> loadData() async {
  try {
    final data = await fetchData();
    setState(() => this.data = data);
  } on SocketException {
    setState(() => error = 'No internet connection');
  } catch (e) {
    setState(() => error = e.toString());
  } finally {
    setState(() => loading = false);
  }
}
```

```dart
// Global error handling — Flutter's Error Boundary equivalent, registered
// once (not wrapped around specific subtrees like RN's class-based
// ErrorBoundary from Topic 18)
void main() {
  FlutterError.onError = (FlutterErrorDetails details) {
    FlutterError.presentError(details);
    // report to Crashlytics/Sentry
  };

  PlatformDispatcher.instance.onError = (error, stack) {
    // catches errors OUTSIDE the Flutter framework itself (e.g. from a Future)
    print('Uncaught error: $error');
    return true;
  };

  runApp(const MyApp());
}
```

**Where people get burned:** `FlutterError.onError` alone does **not** catch errors from an `async` function that isn't awaited/caught somewhere, or a raw `Future` that rejects with nothing listening — that's specifically what `PlatformDispatcher.instance.onError` is for, mirroring exactly why RN needs both an Error Boundary *and* `ErrorUtils.setGlobalHandler` (Topic 18) rather than just one or the other.

---

## F19. Animations

**What it is.** Two tiers, mapping onto RN's `Animated` vs. Reanimated split (Topic 19): **implicit animations** (`AnimatedContainer`, `AnimatedOpacity` — declare the end state, Flutter animates the transition automatically) for simple cases, and **`AnimationController`** + `Tween` for anything needing precise control (sequencing, custom curves, gesture-driven animation).

```dart
// Implicit animation — describe WHERE you want to end up; Flutter tweens
// automatically. No RN equivalent this simple — closest is a barebones
// Animated.timing wrapped in a lot more boilerplate.
class FadeBox extends StatefulWidget {
  const FadeBox({super.key});
  @override
  State<FadeBox> createState() => _FadeBoxState();
}
class _FadeBoxState extends State<FadeBox> {
  double opacity = 1.0;
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => setState(() => opacity = opacity == 1.0 ? 0.0 : 1.0),
      child: AnimatedOpacity(
        opacity: opacity,
        duration: const Duration(milliseconds: 300),
        child: Container(width: 100, height: 100, color: Colors.blue),
      ),
    );
  }
}
```

```dart
// AnimationController — Flutter's Animated.Value equivalent (RN Topic 19),
// needs a "Vsync" (TickerProvider), which is why it lives in a
// StatefulWidget with SingleTickerProviderStateMixin
class AnimatedBox extends StatefulWidget {
  const AnimatedBox({super.key});
  @override
  State<AnimatedBox> createState() => _AnimatedBoxState();
}
class _AnimatedBoxState extends State<AnimatedBox> with SingleTickerProviderStateMixin {
  late AnimationController controller;
  late Animation<double> animation;

  @override
  void initState() {
    super.initState();
    controller = AnimationController(duration: const Duration(seconds: 1), vsync: this);
    animation = Tween<double>(begin: 0, end: 100).animate(controller);
  }

  @override
  void dispose() {
    controller.dispose();   // ⚠ ALWAYS dispose controllers — the Flutter version
    super.dispose();          // of RN's "clean up your subscriptions" rule (Topic 27)
  }

  void startAnimation() => controller.forward();

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: animation,
      builder: (context, child) => Transform.translate(
        offset: Offset(animation.value, 0),
        child: child,
      ),
      child: const Text('Animated'),
    );
  }
}
```

```dart
// Hero animation — a shared-element transition between two screens
// (a thumbnail smoothly morphing into a detail view). No direct RN
// built-in equivalent; the closest is a hand-rolled Reanimated transition.
Hero(tag: 'product-image', child: Image.network(imageUrl))   // on screen A
Hero(tag: 'product-image', child: Image.network(imageUrl))   // on screen B — same tag
```

**Where people get burned:** forgetting `controller.dispose()` in `dispose()` — an `AnimationController` that outlives its widget leaks memory and can throw "used after dispose" errors, structurally the exact same class of bug as forgetting `clearTimeout`/`clearWatch`/`removeListener` in an RN `useEffect` cleanup (Topics 8, 23, 27).

---

## F20. Gestures

**What it is.** `GestureDetector` is Flutter's `TouchableOpacity`/`Pressable` (RN Topic 20) — one widget, wrapping any child, exposing tap/drag/pinch callbacks. Unlike RN, Flutter's gesture system is built into the framework itself (no separate `react-native-gesture-handler` package needed for full native-feeling gesture recognition).

```dart
GestureDetector(
  onTap: () => print('Tapped'),
  onTapDown: (details) => print('Tap down'),
  onLongPress: () => print('Long press'),
  child: const Text('Press me'),
)
```

```dart
// Drag/pan — GestureDetector's onPanUpdate gives you the delta directly,
// no separate gesture-handler library needed (contrast with RN's
// PanGestureHandler + react-native-gesture-handler, Topic 20)
class DraggableBox extends StatefulWidget {
  const DraggableBox({super.key});
  @override
  State<DraggableBox> createState() => _DraggableBoxState();
}
class _DraggableBoxState extends State<DraggableBox> {
  Offset position = Offset.zero;
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onPanUpdate: (details) => setState(() => position += details.delta),
      child: Transform.translate(
        offset: position,
        child: Container(width: 100, height: 100, color: Colors.blue),
      ),
    );
  }
}
```

```dart
// Pinch/scale
GestureDetector(
  onScaleUpdate: (details) => setState(() => scale = details.scale),
  child: Transform.scale(scale: scale, child: const Text('Pinch me')),
)

// InkWell — Material's ripple-effect tap target, closer to Android's
// native touch feedback than a plain GestureDetector gives you for free
InkWell(
  onTap: () => print('Tapped'),
  child: const Padding(padding: EdgeInsets.all(16), child: Text('Tap me')),
)
```

**Where people get burned:** using `GestureDetector` for something Material design expects visible tap feedback on (a list row, a button-like surface) — it gives you **zero** visual feedback by default, whereas `InkWell` provides Android's native ripple automatically; picking the wrong one produces a UI that *works* but feels unresponsive/non-native, the Flutter-specific version of RN's "everything is a `TouchableOpacity` with no visual press state" polish gap.

---

## F21. Keyboard Handling

**What it is.** Flutter handles most keyboard-avoidance **automatically** — `Scaffold` resizes to avoid the keyboard by default, which is a genuinely different (and often easier) starting point than RN's manual `KeyboardAvoidingView` (Topic 21).

```dart
// Scaffold already resizes for the keyboard by default via resizeToAvoidBottomInset
Scaffold(
  resizeToAvoidBottomInset: true,   // default is already true — usually nothing to do
  body: Column(children: [
    TextField(decoration: const InputDecoration(labelText: 'Name')),
    TextField(decoration: const InputDecoration(labelText: 'Email')),
  ]),
)
```

```dart
// Dismiss keyboard on tap outside — same UX pattern as RN's
// TouchableWithoutFeedback + Keyboard.dismiss() (Topic 21)
GestureDetector(
  onTap: () => FocusScope.of(context).unfocus(),
  child: Scaffold(body: /* form content */ Container()),
)

// Listening for keyboard visibility changes directly, when you need to react
// to it programmatically (rare — usually the automatic resize is enough)
final keyboardHeight = MediaQuery.of(context).viewInsets.bottom;
final isKeyboardOpen = keyboardHeight > 0;
```

**Where people get burned:** assuming Flutter "just handles it" 100% of the time and never testing a form on a smaller device — the automatic resize genuinely covers most cases, but a `TextField` deep inside nested `Scrollable`s or a custom layout can still need `SingleChildScrollView` wrapped around the form (so the resize has somewhere to scroll to), the direct Flutter-flavored version of RN's iOS-`"padding"`-vs-Android-`"height"` `KeyboardAvoidingView` tuning (Topic 21).

---
## F22. Camera Integration

**What it is.** The Dart equivalents of RN's `react-native-image-picker`/`expo-camera` (Topic 25, if listed under media) are the **`image_picker`** package (pick or snap a single photo/video, no live preview UI needed) and the **`camera`** package (full manual control over a live camera preview — think `expo-camera`'s custom-UI mode).

```dart
import 'package:image_picker/image_picker.dart';

final picker = ImagePicker();

Future<void> takePhoto() async {
  // source: camera or gallery — same two-path API as RN's image picker libs
  final XFile? photo = await picker.pickImage(
    source: ImageSource.camera,
    imageQuality: 80,   // built-in compression, unlike RN where you often
  );                    // reach for a separate resize library
  if (photo != null) {
    // photo.path is a local file path — display it with Image.file(File(photo.path))
  }
}
```

```dart
// Full manual control (live preview, custom shutter UI) — the `camera` package
final cameras = await availableCameras();
final controller = CameraController(cameras.first, ResolutionPreset.medium);
await controller.initialize();
// CameraPreview(controller) as a widget in your tree; controller.takePicture() to capture
```

**Where people get burned:** identical failure mode to RN Topic 25 — forgetting the platform permission *declarations*, not just the runtime request. `image_picker` still needs `NSCameraUsageDescription`/`NSPhotoLibraryUsageDescription` in `Info.plist` and the `CAMERA` permission in `AndroidManifest.xml`, exactly like RN needs `Info.plist` entries + `AndroidManifest.xml` entries before `react-native-permissions` can even prompt. The simulator/emulator camera is also fake hardware on both platforms — always do a final pass on a real device before signing off on camera features.

---

## F23. Location Services

**What it is.** The **`geolocator`** package is Flutter's `react-native-geolocation-service`/`expo-location` — one API for GPS position, on both platforms, with the same permission dance RN developers already know.

```dart
import 'package:geolocator/geolocator.dart';

Future<Position?> getCurrentLocation() async {
  bool serviceEnabled = await Geolocator.isLocationServiceEnabled();
  if (!serviceEnabled) return null;   // GPS toggled off in OS settings entirely

  LocationPermission permission = await Geolocator.checkPermission();
  if (permission == LocationPermission.denied) {
    permission = await Geolocator.requestPermission();
    if (permission == LocationPermission.denied) return null;
  }
  if (permission == LocationPermission.deniedForever) {
    return null;   // same "permanently denied" trap as F16 / RN Topic 16
  }

  return Geolocator.getCurrentPosition(desiredAccuracy: LocationAccuracy.high);
}

// Live tracking — the Dart equivalent of RN's watchPosition()
StreamSubscription<Position> sub = Geolocator.getPositionStream(
  locationSettings: const LocationSettings(accuracy: LocationAccuracy.high, distanceFilter: 10),
).listen((pos) => print('${pos.latitude}, ${pos.longitude}'));
```

**Where people get burned:** the three-layer permission check above is easy to shortcut — checking only `checkPermission()` and skipping the *service-enabled* check means a user with location services globally off gets a silent failure instead of a clear "please enable GPS" message, the same class of bug RN apps hit when they only wrap `Geolocation.getCurrentPosition()` in a try/catch without first checking device-level settings. Background location (tracking while the app is backgrounded) additionally needs `NSLocationAlwaysAndWhenInUseUsageDescription` on iOS and the `ACCESS_BACKGROUND_LOCATION` manifest permission on Android — both platforms now gate this behind extra App Store/Play Store review scrutiny, same as RN.

---

## F24. Push Notifications

**What it is.** Flutter talks to the exact same backend RN does — **Firebase Cloud Messaging (FCM)** — through the **`firebase_messaging`** package. If you already have an FCM project for the RN app (Bonus Q&A, above), you reuse the same Firebase project and the same server-side sending code; only the client SDK package changes.

```dart
import 'package:firebase_messaging/firebase_messaging.dart';

Future<void> setupPushNotifications() async {
  final messaging = FirebaseMessaging.instance;

  // Same permission prompt as RN's messaging().requestPermission()
  await messaging.requestPermission(alert: true, badge: true, sound: true);

  // Device token — send this to your backend, same as RN's getToken()
  final token = await messaging.getToken();

  // App open & in foreground — RN: messaging().onMessage
  FirebaseMessaging.onMessage.listen((RemoteMessage message) {
    print('Foreground message: ${message.notification?.title}');
    // you must show your own UI here — OS does NOT auto-show a banner
    // while the app is foregrounded, same rule as RN
  });

  // User tapped a notification, app was backgrounded — RN: onNotificationOpenedApp
  FirebaseMessaging.onMessageOpenedApp.listen((RemoteMessage message) {
    // navigate based on message.data, same pattern as RN
  });

  // App was fully killed, opened via notification tap — RN: getInitialNotification()
  final initialMessage = await messaging.getInitialMessage();
}

// Background handler MUST be a top-level (or static) function — Dart's version
// of RN's requirement that the background handler be registered before
// AppRegistry.registerComponent, outside the component tree
@pragma('vm:entry-point')
Future<void> firebaseMessagingBackgroundHandler(RemoteMessage message) async {
  print('Background message: ${message.messageId}');
}

// Registered once, early, in main() — before runApp()
// FirebaseMessaging.onBackgroundMessage(firebaseMessagingBackgroundHandler);
```

```
┌──────────────────┐      ┌───────────────────┐      ┌───────────────────┐
│ Your Backend     │      │ Firebase Cloud    │      │ Device (FCM SDK)  │
│ (send via        │ ───▶ │ Messaging (FCM)   │ ───▶ │ same native SDK   │
│ Admin SDK)       │      │ same as RN Bonus  │      │ RN also uses      │
└──────────────────┘      └───────────────────┘      └───────────────────┘

                  ┌────────────────────────────┐    ┌────────────────────────────┐
                  │ App in foreground:         │    │ App backgrounded/killed:   │
                  │ FirebaseMessaging          │    │ OS shows system tray       │
                  │ .onMessage — show          │    │ notif. Tap opens app via   │
                  │ your own in-app UI         │    │ getInitialMessage()        │
                  └────────────────────────────┘    └────────────────────────────┘
```

**Where people get burned:** the exact same trap as the RN Bonus Q&A above — assuming the OS shows a notification banner automatically while the app is in the foreground. It doesn't, on either framework, for either SDK: `onMessage`/`FirebaseMessaging.onMessage` fires silently and you must render your own in-app banner (a `SnackBar`, a custom overlay). The other recurring miss is forgetting `@pragma('vm:entry-point')` on the background handler — without it, Dart's tree-shaking can strip the function in release builds since nothing in the visible call graph appears to call it, causing background notifications to silently stop working only in release/production builds (never in debug), the Flutter-specific version of RN's "worked on Debug, broken on Release" Hermes-bytecode class of bug (Topic 27/44).

---

## F25. Background Tasks

**What it is.** The **`workmanager`** package is Flutter's `react-native-background-fetch`/Headless JS equivalent — it schedules Dart code to run periodically even when the app isn't in the foreground, deferring to each OS's own background-scheduling system (`WorkManager` on Android, `BGTaskScheduler` on iOS) rather than trying to keep a process alive forever.

```dart
import 'package:workmanager/workmanager.dart';

@pragma('vm:entry-point')   // same tree-shaking trap as F24's background handler
void callbackDispatcher() {
  Workmanager().executeTask((task, inputData) async {
    // sync data, check for updates, etc. — runs in a separate isolate,
    // so it has NO access to your running app's state (same isolation
    // RN's Headless JS tasks have from the running JS context)
    return Future.value(true);
  });
}

void main() {
  Workmanager().initialize(callbackDispatcher);
  Workmanager().registerPeriodicTask(
    'sync-task',
    'syncData',
    frequency: const Duration(hours: 1),   // Android: real interval;
  );                                        // iOS: a *minimum*, OS decides actual timing
  runApp(const MyApp());
}
```

**Where people get burned:** treating iOS the way Android behaves. Android's `WorkManager` runs your periodic task reasonably close to the requested interval; iOS's `BGTaskScheduler` treats the interval as a *hint* and will delay, batch, or skip runs entirely based on battery level, network conditions, and how often the user opens the app — the identical constraint RN developers hit with `react-native-background-fetch` on iOS. Neither framework can force truly reliable background execution on iOS; anything time-critical (chat delivery, live tracking) has to go through push notifications instead, not a background-fetch task.

---

## F26. Security

**What it is.** Three concerns, each with a direct Topic-26/RN-package mirror: secure storage for secrets (`flutter_secure_storage`, already introduced in F15 as the encrypted alternative to `shared_preferences` — Flutter's `SecureStore`/Keychain wrapper, same as RN Topic 26), certificate pinning against man-in-the-middle attacks, and hiding your Dart source in release builds.

```dart
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

const storage = FlutterSecureStorage();   // iOS Keychain / Android Keystore under the hood
await storage.write(key: 'auth_token', value: token);
final token = await storage.read(key: 'auth_token');
```

```dart
// Certificate/SSL pinning with dio — same defense RN apps add via
// react-native-ssl-pinning (Topic 26) to stop a compromised CA or a
// corporate MITM proxy from silently reading "HTTPS" traffic
import 'package:dio/dio.dart';
import 'package:dio/io.dart';

final dio = Dio();
(dio.httpClientAdapter as IOHttpClientAdapter).createHttpClient = () {
  final client = HttpClient();
  client.badCertificateCallback = (cert, host, port) {
    // compare cert.sha256 (or public key) against a pinned value you shipped
    // with the app — return true ONLY if it matches, never unconditionally
    return false;
  };
  return client;
};
```

```bash
# Obfuscate Dart code in release builds — makes reverse-engineering harder,
# the rough equivalent of RN's Hermes bytecode already being non-trivial to
# read, plus ProGuard/R8 rules on the Android side
flutter build apk --obfuscate --split-debug-info=./debug-info
```

**Where people get burned:** storing tokens in `shared_preferences` "just for now" during development and shipping it that way — unencrypted, plaintext, on a rooted/jailbroken device it's trivially readable, exactly the F15/Topic 26 mistake. The second common gap: adding `badCertificateCallback` for pinning but returning `true` unconditionally "to make the error go away" during a debugging session, then forgetting to revert it — this silently disables all certificate validation, accepting *any* certificate including an attacker's, which is worse than having no pinning code at all.

---

## F27. App Optimization

**What it is.** Flutter's performance story maps closely onto RN's (Topic 27): avoid unnecessary rebuilds, virtualize long lists, and profile before guessing. The primary tools are `const` constructors (skip rebuilding a widget subtree entirely when nothing changed — no direct RN equivalent since RN's `memo`/`useMemo` compare *props*, while `const` here is a compile-time guarantee the widget is identical), `ListView.builder`/`GridView.builder` for virtualization (F13, the direct `FlatList` equivalent), and `RepaintBoundary` to isolate expensive repaints (F9).

```dart
// const tells Flutter "this exact widget instance never needs to be
// rebuilt" — skipped entirely during a parent rebuild, cheaper than even
// a successful RN memo() comparison since there's no comparison to run at all
const Text('Static label')

// DevTools Performance tab + "Track widget rebuilds" — the direct
// equivalent of the RN/React DevTools Profiler flame graph (Topic 27)
// for spotting a widget rebuilding far more often than it should

// Image caching — cached_network_image, F14's answer to RN's FastImage,
// avoids re-downloading/re-decoding images on every rebuild
```

**Where people get burned:** wrapping everything in a giant `build()` method and calling `setState()` high up in the tree — Flutter rebuilds every widget *below* the `setState()` call by default, so a single counter increment at the top of a large screen can rebuild the entire screen unless the state is pushed down into a small, isolated `StatefulWidget` (or moved to a state-management solution — F7) that only wraps what actually needs to change. This is the Flutter-shaped version of RN's "putting all state in one top-level component and watching the entire tree re-render on every keystroke" (Topic 27).

---

## F28. Building for Production

**What it is.** Flutter's release-build commands map directly onto RN's Gradle/Xcode build step (Topic 28), but as one unified CLI instead of two separate native toolchains you invoke by hand.

```bash
# Android — AAB is what Play Store wants (App Bundle, same shift RN made
# away from raw APKs for store submission); APK still useful for direct installs
flutter build appbundle --release
flutter build apk --release --split-per-abi   # smaller per-architecture APKs

# iOS — produces an .xcarchive-ready build; still needs Xcode for the
# final signing + App Store Connect upload step, same as RN
flutter build ios --release

# Flavors — Flutter's answer to RN's build variants/schemes (dev/staging/prod
# with different bundle IDs, API endpoints, app icons)
flutter build apk --flavor production -t lib/main_production.dart
```

**Where people get burned:** shipping a debug or profile build by accident — `flutter run` defaults to debug mode (JIT-compiled, includes debug assertions, noticeably slower), and only `--release` produces the AOT-compiled, tree-shaken, optimized binary; the exact same category of "why is my published app janky" complaint RN apps get when someone accidentally ships a bundle built without `--variant release`. Code signing is the other perennial pain point — Android needs a consistent upload keystore across every release (losing it means you can never update that app listing again) and iOS needs valid provisioning profiles/certificates, neither of which Flutter changes about the underlying platform requirements at all.

---

## F29. Common Pitfalls

Nine mistakes that show up constantly in Flutter code review, several with a direct RN counterpart already covered above:

1. **Calling `setState()` after the widget is disposed** — an async operation (a network call, a timer) resolves after the user has already navigated away, and `setState()` throws because the widget is gone. Guard with `if (!mounted) return;` before every `setState()` inside an async callback — the Flutter-specific version of RN's "setState on an unmounted component" warning.
2. **Missing `key`s in dynamic lists** — exactly RN's Topic 29-class "missing `key` prop" bug (Part 1). Without a stable `Key` (`ValueKey`, `ObjectKey`), Flutter can misattribute state between list items when the list is reordered or filtered.
3. **Passing `BuildContext` across an `await`** — using `context` after an async gap without checking `mounted` first can throw or reference a stale, disposed context; the linter (`use_build_context_synchronously`) catches most of these.
4. **Not using `const` constructors** — the single easiest, most-skipped performance win (F27); costs nothing to write, and the analyzer (`prefer_const_constructors`) will nag you if you forget.
5. **Deeply nested widget trees for simple layouts** — five `Container`s wrapping a `Padding` wrapping a `Center` where two would do; hurts both readability and rebuild cost. Extract named widgets instead of nesting.
6. **Rebuilding the whole screen from one `setState()`** — F27's pitfall, repeated here because it's the single most common source of "my simple app feels janky" reports.
7. **Ignoring `flutter analyze` warnings** — Dart's static analyzer catches an enormous share of null-safety and type bugs before runtime; a codebase that ships with analyzer warnings unaddressed accumulates the same kind of silent tech debt as an RN codebase that ignores ESLint/TypeScript errors.
8. **Hardcoding platform-specific values** — sizes and spacing tuned only for one screen size/density, the direct Dart-side version of RN Topic 12's "forgetting `Platform.select()`/responsive units" mistake.
9. **Not testing on both iOS and Android before merging** — Cupertino vs. Material differences (F12) are easy to miss when you only ever run on one simulator.

---

## F30. Best Practices

A closing checklist, deliberately mirroring RN Topic 30's structure so the two frameworks read as one shared discipline rather than two unrelated skill sets:

- **Feature-based folder structure** over type-based (`lib/features/auth/`, `lib/features/profile/` rather than `lib/screens/`, `lib/widgets/`, `lib/models/` as separate top-level buckets) — same reasoning as RN Topic 42's large-scale app structure.
- **Pick one state-management tier and stick to it app-wide** (F7's ladder: `setState` → `Provider` → `Riverpod`/`Bloc`) — mixing three different approaches across a codebase is the Flutter version of an RN app mixing plain Redux, Context, and three different data-fetching libraries with no clear rule for which to reach for.
- **`const` everywhere the analyzer allows it** — free performance (F27), and the `prefer_const_constructors` lint will remind you.
- **Null safety discipline** — resist the temptation to reach for `!` (the bang operator, F-Part-4) to silence the analyzer; a wrong `!` is a runtime crash waiting to happen, no different from RN/TypeScript developers reaching for `as any` to make a type error go away instead of fixing the actual type.
- **Test at three levels** — unit tests for pure Dart logic, widget tests for individual components (F17), integration tests for full user flows — the same testing pyramid RN Topic 23 recommends with Jest unit/component tests plus Detox/Maestro end-to-end tests.
- **Lint with `flutter_lints`** (or the stricter `very_good_analysis`) from day one — catching null-safety and style issues before they compound, the direct equivalent of enabling strict ESLint + TypeScript in a new RN project instead of retrofitting it later.
- **CI/CD** — Codemagic, Fastlane, or GitHub Actions running `flutter test`, `flutter analyze`, and `flutter build` on every PR, mirroring RN Topic 42's Fastlane/EAS Build pipelines.
- **Profile before optimizing** — DevTools' Performance tab tells you what's actually slow; guessing wastes effort on the wrong fix, same rule as RN's Topic 27 emphasis on the Profiler over intuition.

---

# PART 6 — HANDS-ON EXERCISES

*The fastest way to actually learn this material is to stop reading and start typing. Each exercise below gives you a spec, a "try it yourself first" nudge telling you exactly what to attempt before looking down, and then a reference solution in **both** frameworks so you can compare your approach, get unstuck, or see the idiomatic Flutter shape of something you already know how to do in RN. Don't copy-paste the solutions — read them, close the file, and rewrite them from memory. That's the part that actually builds the skill.*

*A rough time budget is given for each — treat it as a ceiling to aim under, not a target.*

---

## Beginner

### Exercise B1 — Counter with Increment, Decrement & Reset

**Spec:** Build a screen with a number displayed in large text, and three buttons: `+1`, `-1`, and `Reset` (back to 0). The number should never go below 0 — clicking `-1` at 0 should do nothing.

**Try it yourself first.** ~15 minutes. This is purely about local component state (RN: `useState`; Flutter: `setState`) and conditional logic — no networking, no navigation.

<details>
<summary><strong>Reference solution — React Native</strong></summary>

```jsx
import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function Counter() {
  const [count, setCount] = useState(0);

  const decrement = () => setCount((c) => Math.max(0, c - 1));   // clamp at 0

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <View style={styles.row}>
        <Button title="-1" onPress={decrement} />
        <Button title="Reset" onPress={() => setCount(0)} />
        <Button title="+1" onPress={() => setCount((c) => c + 1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  count: { fontSize: 64, fontWeight: 'bold', marginBottom: 20 },
  row: { flexDirection: 'row', gap: 12 },
});

export default Counter;
```

</details>

<details>
<summary><strong>Reference solution — Flutter</strong></summary>

```dart
import 'package:flutter/material.dart';

class Counter extends StatefulWidget {
  const Counter({super.key});
  @override
  State<Counter> createState() => _CounterState();
}

class _CounterState extends State<Counter> {
  int count = 0;

  void _decrement() => setState(() => count = count > 0 ? count - 1 : 0);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('$count', style: const TextStyle(fontSize: 64, fontWeight: FontWeight.bold)),
            const SizedBox(height: 20),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                ElevatedButton(onPressed: _decrement, child: const Text('-1')),
                const SizedBox(width: 12),
                ElevatedButton(onPressed: () => setState(() => count = 0), child: const Text('Reset')),
                const SizedBox(width: 12),
                ElevatedButton(onPressed: () => setState(() => count++), child: const Text('+1')),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
```

</details>

**What this reinforces:** local state updates (Topic 7 / F7), the RN `useState`-updater-function vs. Flutter `setState`-callback shape, and clamping logic that has to live in the handler either way — neither framework does input validation for you.

---

### Exercise B2 — Static List with Images

**Spec:** Render a scrollable list of 20 fake "contacts" (name, subtitle, avatar — you can hardcode the array or generate it with a loop) using each framework's virtualized list component, not a plain `map()`/`Column`.

**Try it yourself first.** ~20 minutes. The point is to practice `FlatList`/`ListView.builder` specifically — Topic 13 / F13 — including a proper `keyExtractor`/`ValueKey`.

<details>
<summary><strong>Reference solution — React Native</strong></summary>

```jsx
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';

const contacts = Array.from({ length: 20 }, (_, i) => ({
  id: String(i),
  name: `Contact ${i + 1}`,
  role: i % 2 === 0 ? 'Engineer' : 'Designer',
  avatar: `https://i.pravatar.cc/64?img=${i + 1}`,
}));

function ContactList() {
  return (
    <FlatList
      data={contacts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.row}>
          <Image source={{ uri: item.avatar }} style={styles.avatar} />
          <View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.role}>{item.role}</Text>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', padding: 12, gap: 12 },
  avatar: { width: 48, height: 48, borderRadius: 24 },
  name: { fontSize: 16, fontWeight: '600' },
  role: { fontSize: 13, color: '#666' },
});
```

</details>

<details>
<summary><strong>Reference solution — Flutter</strong></summary>

```dart
import 'package:flutter/material.dart';

class Contact {
  final String id, name, role, avatar;
  Contact(this.id, this.name, this.role, this.avatar);
}

final contacts = List.generate(20, (i) => Contact(
  '$i', 'Contact ${i + 1}', i % 2 == 0 ? 'Engineer' : 'Designer',
  'https://i.pravatar.cc/64?img=${i + 1}',
));

class ContactList extends StatelessWidget {
  const ContactList({super.key});
  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: contacts.length,
      itemBuilder: (context, index) {
        final c = contacts[index];
        return ListTile(
          key: ValueKey(c.id),
          leading: CircleAvatar(backgroundImage: NetworkImage(c.avatar)),
          title: Text(c.name, style: const TextStyle(fontWeight: FontWeight.w600)),
          subtitle: Text(c.role),
        );
      },
    );
  }
}
```

</details>

**What this reinforces:** virtualization (both components only render what's on-screen, F13/Topic 13), stable keys, and the fact that Flutter's `ListTile` gives you the RN "avatar + title + subtitle row" layout for free where RN needs manual `flexDirection: 'row'` styling.

---

### Exercise B3 — Form with Validation

**Spec:** Two text inputs (name, email) and a submit button. Show an inline error under each field if it's empty, and under email specifically if it doesn't contain `@`. On successful submit, show a success message instead of the form.

**Try it yourself first.** ~20 minutes. Controlled inputs plus conditional rendering — no libraries needed for validation this simple.

<details>
<summary><strong>Reference solution — React Native</strong></summary>

```jsx
import { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';

function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = 'Name is required';
    if (!email.trim()) e.email = 'Email is required';
    else if (!email.includes('@')) e.email = 'Enter a valid email';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  if (submitted) return <Text style={styles.success}>Thanks, {name}! You're signed up.</Text>;

  return (
    <View style={styles.form}>
      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
      {errors.name && <Text style={styles.error}>{errors.name}</Text>}

      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}

      <Button title="Submit" onPress={() => validate() && setSubmitted(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: { padding: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 10, marginTop: 12 },
  error: { color: 'red', fontSize: 12, marginTop: 4 },
  success: { fontSize: 18, padding: 20 },
});
```

</details>

<details>
<summary><strong>Reference solution — Flutter</strong></summary>

```dart
import 'package:flutter/material.dart';

class SignupForm extends StatefulWidget {
  const SignupForm({super.key});
  @override
  State<SignupForm> createState() => _SignupFormState();
}

class _SignupFormState extends State<SignupForm> {
  final _formKey = GlobalKey<FormState>();   // Flutter's Form widget does
  final _nameController = TextEditingController();   // the validation
  final _emailController = TextEditingController();  // bookkeeping for you
  bool _submitted = false;

  @override
  Widget build(BuildContext context) {
    if (_submitted) {
      return Center(child: Text("Thanks, ${_nameController.text}! You're signed up.", style: const TextStyle(fontSize: 18)));
    }
    return Form(
      key: _formKey,
      child: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(children: [
          TextFormField(
            controller: _nameController,
            decoration: const InputDecoration(labelText: 'Name'),
            validator: (v) => (v == null || v.trim().isEmpty) ? 'Name is required' : null,
          ),
          TextFormField(
            controller: _emailController,
            decoration: const InputDecoration(labelText: 'Email'),
            keyboardType: TextInputType.emailAddress,
            validator: (v) {
              if (v == null || v.trim().isEmpty) return 'Email is required';
              if (!v.contains('@')) return 'Enter a valid email';
              return null;
            },
          ),
          const SizedBox(height: 16),
          ElevatedButton(
            onPressed: () {
              if (_formKey.currentState!.validate()) setState(() => _submitted = true);
            },
            child: const Text('Submit'),
          ),
        ]),
      ),
    );
  }
}
```

</details>

**What this reinforces:** controlled vs. `TextEditingController`-based inputs, and a genuine ergonomic difference worth knowing for interviews — Flutter's built-in `Form`/`TextFormField`/`validator` machinery handles the "run all validators, collect errors, re-render" loop for you, where RN has no built-in form layer at all (hence the ecosystem's heavy reliance on `react-hook-form`/Formik in real apps, worth mentioning if asked "how would you handle a form with 15 fields" in an interview).

---

## Intermediate

### Exercise I1 — Fetch & Display Remote Data (Loading / Error / Success States)

**Spec:** On mount, fetch a list of posts from `https://jsonplaceholder.typicode.com/posts` and render them in a list. Show a spinner while loading and a retry button on failure.

**Try it yourself first.** ~25 minutes. This is Topic 6/8 (Networking + Async) and F6/F8 combined — get the three-state (`loading`/`error`/`data`) pattern right before looking at the solution.

<details>
<summary><strong>Reference solution — React Native</strong></summary>

```jsx
import { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, ActivityIndicator, Button } from 'react-native';

function PostList() {
  const [state, setState] = useState({ status: 'loading', data: null, error: null });

  const load = useCallback(async () => {
    setState({ status: 'loading', data: null, error: null });
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setState({ status: 'success', data, error: null });
    } catch (err) {
      setState({ status: 'error', data: null, error: err.message });
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  if (state.status === 'loading') return <ActivityIndicator style={{ flex: 1 }} size="large" />;
  if (state.status === 'error') {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Failed to load: {state.error}</Text>
        <Button title="Retry" onPress={load} />
      </View>
    );
  }
  return (
    <FlatList
      data={state.data.slice(0, 20)}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <View style={{ padding: 12 }}>
          <Text style={{ fontWeight: '600' }}>{item.title}</Text>
        </View>
      )}
    />
  );
}
```

*(In a real production app, reach for TanStack Query — Topic 37 — instead of hand-rolling this state machine; it's shown by hand here so the underlying mechanics are unmistakable.)*

</details>

<details>
<summary><strong>Reference solution — Flutter</strong></summary>

```dart
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';

class Post {
  final int id; final String title;
  Post(this.id, this.title);
  factory Post.fromJson(Map<String, dynamic> j) => Post(j['id'], j['title']);
}

Future<List<Post>> fetchPosts() async {
  final res = await http.get(Uri.parse('https://jsonplaceholder.typicode.com/posts'));
  if (res.statusCode != 200) throw Exception('HTTP ${res.statusCode}');
  final List data = jsonDecode(res.body);
  return data.take(20).map((j) => Post.fromJson(j)).toList();
}

class PostList extends StatefulWidget {
  const PostList({super.key});
  @override
  State<PostList> createState() => _PostListState();
}

class _PostListState extends State<PostList> {
  late Future<List<Post>> _future;

  @override
  void initState() {
    super.initState();
    _future = fetchPosts();
  }

  @override
  Widget build(BuildContext context) {
    // FutureBuilder collapses loading/error/data into one declarative
    // widget — no manual status enum needed, unlike the RN version above
    return FutureBuilder<List<Post>>(
      future: _future,
      builder: (context, snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting) {
          return const Center(child: CircularProgressIndicator());
        }
        if (snapshot.hasError) {
          return Center(
            child: Column(mainAxisSize: MainAxisSize.min, children: [
              Text('Failed to load: ${snapshot.error}'),
              ElevatedButton(onPressed: () => setState(() => _future = fetchPosts()), child: const Text('Retry')),
            ]),
          );
        }
        final posts = snapshot.data!;
        return ListView.builder(
          itemCount: posts.length,
          itemBuilder: (context, i) => ListTile(title: Text(posts[i].title)),
        );
      },
    );
  }
}
```

</details>

**What this reinforces:** the RN version needs a hand-rolled status enum because `useEffect` + `useState` doesn't give you one; Flutter's `FutureBuilder` (F8) bakes the loading/error/data states into `AsyncSnapshot` directly — a genuinely different ergonomic tradeoff worth being able to explain in an interview.

---

### Exercise I2 — Three-Screen Navigation with Params

**Spec:** A list screen showing 5 products → tapping one navigates to a detail screen showing that product's name and price (passed as a param, not re-fetched) → a button on the detail screen navigates to a checkout confirmation screen.

**Try it yourself first.** ~25 minutes. Topic 5/F5 — practice passing and reading route params specifically, not just navigating.

<details>
<summary><strong>Reference solution — React Native (React Navigation)</strong></summary>

```jsx
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, FlatList, Pressable, Button } from 'react-native';

const Stack = createNativeStackNavigator();
const products = [
  { id: '1', name: 'Keyboard', price: 79 }, { id: '2', name: 'Mouse', price: 29 },
  { id: '3', name: 'Monitor', price: 249 }, { id: '4', name: 'Webcam', price: 59 },
  { id: '5', name: 'Headset', price: 89 },
];

function ProductList({ navigation }) {
  return (
    <FlatList
      data={products}
      keyExtractor={(p) => p.id}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigation.navigate('Detail', { product: item })} style={{ padding: 16 }}>
          <Text>{item.name} — ${item.price}</Text>
        </Pressable>
      )}
    />
  );
}

function ProductDetail({ route, navigation }) {
  const { product } = route.params;   // params flow through route, not props
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>{product.name}</Text>
      <Text>${product.price}</Text>
      <Button title="Checkout" onPress={() => navigation.navigate('Checkout', { product })} />
    </View>
  );
}

function Checkout({ route }) {
  const { product } = route.params;
  return <Text style={{ padding: 20 }}>Order confirmed for {product.name} — ${product.price}!</Text>;
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="List" component={ProductList} />
        <Stack.Screen name="Detail" component={ProductDetail} />
        <Stack.Screen name="Checkout" component={Checkout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

</details>

<details>
<summary><strong>Reference solution — Flutter (Navigator 1.0)</strong></summary>

```dart
import 'package:flutter/material.dart';

class Product { final String name; final int price; Product(this.name, this.price); }
final products = [
  Product('Keyboard', 79), Product('Mouse', 29), Product('Monitor', 249),
  Product('Webcam', 59), Product('Headset', 89),
];

class ProductList extends StatelessWidget {
  const ProductList({super.key});
  @override
  Widget build(BuildContext context) => ListView.builder(
    itemCount: products.length,
    itemBuilder: (context, i) => ListTile(
      title: Text('${products[i].name} — \$${products[i].price}'),
      onTap: () => Navigator.push(
        context,
        // MaterialPageRoute constructor arg IS the param-passing —
        // no separate "params" object, just a regular constructor
        MaterialPageRoute(builder: (_) => ProductDetail(product: products[i])),
      ),
    ),
  );
}

class ProductDetail extends StatelessWidget {
  final Product product;
  const ProductDetail({super.key, required this.product});
  @override
  Widget build(BuildContext context) => Scaffold(
    body: Padding(
      padding: const EdgeInsets.all(20),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Text(product.name, style: const TextStyle(fontSize: 22)),
        Text('\$${product.price}'),
        ElevatedButton(
          onPressed: () => Navigator.push(context, MaterialPageRoute(builder: (_) => Checkout(product: product))),
          child: const Text('Checkout'),
        ),
      ]),
    ),
  );
}

class Checkout extends StatelessWidget {
  final Product product;
  const Checkout({super.key, required this.product});
  @override
  Widget build(BuildContext context) => Scaffold(
    body: Center(child: Text('Order confirmed for ${product.name} — \$${product.price}!')),
  );
}
```

</details>

**What this reinforces:** the conceptual difference already flagged in F5 — RN's `route.params` is a separate bag of data threaded alongside the component, while Flutter passes params the same way you'd pass props to any widget: as constructor arguments. Try the exercise again with `go_router` (F5's declarative alternative) once the Navigator 1.0 version works, to see the URL-based version of the same flow.

---

### Exercise I3 — Persisted Todo List

**Spec:** A todo list (add item, mark complete, delete) that survives an app restart — write to local storage on every change, read it back on launch.

**Try it yourself first.** ~30 minutes. Topic 15/F15 — the storage read/write, not the list UI, is the point.

<details>
<summary><strong>Reference solution — React Native (AsyncStorage)</strong></summary>

```jsx
import { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, Pressable, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@todos';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((json) => {
      if (json) setTodos(JSON.parse(json));   // manual serialize/deserialize —
    });                                          // AsyncStorage only stores strings
  }, []);

  const persist = (next) => {
    setTodos(next);
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const addTodo = () => {
    if (!text.trim()) return;
    persist([...todos, { id: Date.now().toString(), text, done: false }]);
    setText('');
  };

  const toggle = (id) => persist(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  const remove = (id) => persist(todos.filter((t) => t.id !== id));

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <View style={{ flexDirection: 'row', gap: 8 }}>
        <TextInput value={text} onChangeText={setText} placeholder="New todo" style={{ flex: 1, borderWidth: 1, padding: 8 }} />
        <Button title="Add" onPress={addTodo} />
      </View>
      <FlatList
        data={todos}
        keyExtractor={(t) => t.id}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', padding: 8 }}>
            <Pressable onPress={() => toggle(item.id)} style={{ flex: 1 }}>
              <Text style={{ textDecorationLine: item.done ? 'line-through' : 'none' }}>{item.text}</Text>
            </Pressable>
            <Button title="✕" onPress={() => remove(item.id)} />
          </View>
        )}
      />
    </View>
  );
}
```

</details>

<details>
<summary><strong>Reference solution — Flutter (shared_preferences)</strong></summary>

```dart
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

class Todo {
  String id, text; bool done;
  Todo(this.id, this.text, this.done);
  Map<String, dynamic> toJson() => {'id': id, 'text': text, 'done': done};
  factory Todo.fromJson(Map<String, dynamic> j) => Todo(j['id'], j['text'], j['done']);
}

class TodoApp extends StatefulWidget {
  const TodoApp({super.key});
  @override
  State<TodoApp> createState() => _TodoAppState();
}

class _TodoAppState extends State<TodoApp> {
  List<Todo> todos = [];
  final _controller = TextEditingController();

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final prefs = await SharedPreferences.getInstance();
    final json = prefs.getString('todos');
    if (json != null) {
      final List data = jsonDecode(json);
      setState(() => todos = data.map((j) => Todo.fromJson(j)).toList());
    }
  }

  Future<void> _persist() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString('todos', jsonEncode(todos.map((t) => t.toJson()).toList()));
  }

  void _addTodo() {
    if (_controller.text.trim().isEmpty) return;
    setState(() => todos.add(Todo(DateTime.now().toIso8601String(), _controller.text, false)));
    _controller.clear();
    _persist();
  }

  void _toggle(String id) {
    setState(() { todos.firstWhere((t) => t.id == id).done = !todos.firstWhere((t) => t.id == id).done; });
    _persist();
  }

  void _remove(String id) {
    setState(() => todos.removeWhere((t) => t.id == id));
    _persist();
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16),
      child: Column(children: [
        Row(children: [
          Expanded(child: TextField(controller: _controller, decoration: const InputDecoration(hintText: 'New todo'))),
          ElevatedButton(onPressed: _addTodo, child: const Text('Add')),
        ]),
        Expanded(
          child: ListView.builder(
            itemCount: todos.length,
            itemBuilder: (context, i) {
              final t = todos[i];
              return ListTile(
                title: GestureDetector(
                  onTap: () => _toggle(t.id),
                  child: Text(t.text, style: TextDecoration.lineThrough == null ? null :
                    TextStyle(decoration: t.done ? TextDecoration.lineThrough : TextDecoration.none)),
                ),
                trailing: IconButton(icon: const Icon(Icons.close), onPressed: () => _remove(t.id)),
              );
            },
          ),
        ),
      ]),
    );
  }
}
```

</details>

**What this reinforces:** both `AsyncStorage` and `shared_preferences` are string-only key-value stores, so both solutions hand-roll the same `jsonEncode`/`jsonDecode` (or `JSON.stringify`/`JSON.parse`) dance — a good interview talking point for "why would you reach for Realm/Hive instead" (F15/Topic 15: once you need queries, relations, or large datasets, not just a flat blob).

---

### Exercise I4 — Infinite Scroll with Pull-to-Refresh

**Spec:** Load posts 20 at a time from `jsonplaceholder.typicode.com/posts?_page=N&_limit=20`; fetch the next page automatically when the user scrolls near the bottom, and support pull-down-to-refresh that resets to page 1.

**Try it yourself first.** ~30 minutes. This is the direct answer to the FlatList-optimization question added earlier (Bonus Q&A) — `onEndReached` + `onRefresh` on the RN side, `ScrollController` + `RefreshIndicator` on the Flutter side.

<details>
<summary><strong>Reference solution — React Native</strong></summary>

```jsx
import { useState, useCallback } from 'react';
import { FlatList, Text, View, ActivityIndicator } from 'react-native';

function InfiniteList() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const fetchPage = async (pageNum, replace = false) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pageNum}&_limit=20`);
    const data = await res.json();
    setItems((prev) => (replace ? data : [...prev, ...data]));
  };

  const loadMore = useCallback(async () => {
    if (loading) return;              // guard against duplicate fires — the
    setLoading(true);                 // #1 onEndReached bug (Bonus Q&A above)
    await fetchPage(page + 1);
    setPage((p) => p + 1);
    setLoading(false);
  }, [loading, page]);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchPage(1, true);
    setPage(1);
    setRefreshing(false);
  };

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <View style={{ padding: 12 }}><Text>{item.title}</Text></View>}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      refreshing={refreshing}
      onRefresh={onRefresh}
      ListFooterComponent={loading ? <ActivityIndicator /> : null}
    />
  );
}
```

</details>

<details>
<summary><strong>Reference solution — Flutter</strong></summary>

```dart
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';

class InfiniteList extends StatefulWidget {
  const InfiniteList({super.key});
  @override
  State<InfiniteList> createState() => _InfiniteListState();
}

class _InfiniteListState extends State<InfiniteList> {
  final List items = [];
  final _scrollController = ScrollController();
  int page = 1;
  bool loading = false;

  @override
  void initState() {
    super.initState();
    _fetchPage(1, replace: true);
    // manual scroll-position listener — Flutter has no built-in onEndReached,
    // you compute "near the bottom" yourself from the ScrollController
    _scrollController.addListener(() {
      if (_scrollController.position.pixels >= _scrollController.position.maxScrollExtent - 200 && !loading) {
        _loadMore();
      }
    });
  }

  Future<void> _fetchPage(int pageNum, {bool replace = false}) async {
    final res = await http.get(Uri.parse('https://jsonplaceholder.typicode.com/posts?_page=$pageNum&_limit=20'));
    final data = jsonDecode(res.body);
    setState(() {
      if (replace) items..clear()..addAll(data); else items.addAll(data);
    });
  }

  Future<void> _loadMore() async {
    setState(() => loading = true);
    await _fetchPage(page + 1);
    setState(() { page++; loading = false; });
  }

  Future<void> _onRefresh() async {
    await _fetchPage(1, replace: true);
    setState(() => page = 1);
  }

  @override
  Widget build(BuildContext context) {
    return RefreshIndicator(
      onRefresh: _onRefresh,   // built-in pull-to-refresh gesture + spinner
      child: ListView.builder(
        controller: _scrollController,
        itemCount: items.length + 1,
        itemBuilder: (context, i) {
          if (i == items.length) {
            return loading ? const Padding(padding: EdgeInsets.all(16), child: Center(child: CircularProgressIndicator())) : const SizedBox.shrink();
          }
          return ListTile(title: Text(items[i]['title']));
        },
      ),
    );
  }
}
```

</details>

**What this reinforces:** RN's `FlatList` bundles `onEndReached` + `refreshing`/`onRefresh` as first-class props; Flutter makes you compose two separate primitives (`ScrollController` position math for infinite scroll, `RefreshIndicator` for pull-to-refresh) — more code, but also more visibility into exactly what triggers each behavior, useful to mention if an interviewer asks "what does FlatList give you that a plain ScrollView doesn't."

---

### Exercise I5 — Debounced Search

**Spec:** A search box filtering a list of 500 items client-side, but only re-filtering 300ms after the user stops typing (not on every keystroke).

**Try it yourself first.** ~20 minutes. Topic 9/F9 (Performance) — the debounce timer logic is identical in both languages; the interesting part is *where* you put the memoization.

<details>
<summary><strong>Reference solution — React Native</strong></summary>

```jsx
import { useState, useMemo, useCallback, useRef } from 'react';
import { View, TextInput, FlatList, Text } from 'react-native';

const allItems = Array.from({ length: 500 }, (_, i) => `Item ${i + 1}`);

function DebouncedSearch() {
  const [query, setQuery] = useState('');
  const [debounced, setDebounced] = useState('');
  const timer = useRef(null);

  const onChangeText = useCallback((text) => {
    setQuery(text);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setDebounced(text), 300);
  }, []);

  // useMemo — only re-filter when the DEBOUNCED value changes, not every keystroke
  const filtered = useMemo(
    () => allItems.filter((item) => item.toLowerCase().includes(debounced.toLowerCase())),
    [debounced]
  );

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput value={query} onChangeText={onChangeText} placeholder="Search..." style={{ borderWidth: 1, padding: 8 }} />
      <FlatList data={filtered} keyExtractor={(item) => item} renderItem={({ item }) => <Text style={{ padding: 8 }}>{item}</Text>} />
    </View>
  );
}
```

</details>

<details>
<summary><strong>Reference solution — Flutter</strong></summary>

```dart
import 'dart:async';
import 'package:flutter/material.dart';

final allItems = List.generate(500, (i) => 'Item ${i + 1}');

class DebouncedSearch extends StatefulWidget {
  const DebouncedSearch({super.key});
  @override
  State<DebouncedSearch> createState() => _DebouncedSearchState();
}

class _DebouncedSearchState extends State<DebouncedSearch> {
  String query = '';
  List<String> filtered = allItems;
  Timer? _debounce;

  void _onChanged(String text) {
    query = text;
    _debounce?.cancel();
    _debounce = Timer(const Duration(milliseconds: 300), () {
      // no useMemo equivalent needed here — this callback only fires once
      // per debounce window by construction, so recomputing is already cheap
      setState(() => filtered = allItems.where((i) => i.toLowerCase().contains(text.toLowerCase())).toList());
    });
  }

  @override
  void dispose() {
    _debounce?.cancel();   // always cancel pending timers in dispose —
    super.dispose();        // same rule as clearing a RN setTimeout on unmount
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16),
      child: Column(children: [
        TextField(onChanged: _onChanged, decoration: const InputDecoration(hintText: 'Search...')),
        Expanded(
          child: ListView.builder(
            itemCount: filtered.length,
            itemBuilder: (context, i) => Padding(padding: const EdgeInsets.all(8), child: Text(filtered[i])),
          ),
        ),
      ]),
    );
  }
}
```

</details>

**What this reinforces:** the debounce-timer-cleanup discipline is identical (clear/cancel on both re-trigger and unmount) — miss it in RN and you get a `setState` on unmounted warning (Topic 9), miss it in Flutter and you get the F29 "setState after dispose" crash. `useMemo` earns its keep in RN because React re-runs the whole function body on every render; Flutter's `setState` only re-runs `build()` when you call it, so there's rarely a separate memoization step needed for a computation this cheap.

---

## Advanced

### Exercise A1 — Authentication Flow with Secure Token Storage

**Spec:** A login screen (email/password, no real backend needed — fake a 1-second delay and accept any non-empty input) that stores an auth token in **secure**, encrypted storage on success, a protected home screen that only renders if a token exists, and a logout button that clears it.

**Try it yourself first.** ~40 minutes. Topic 26/F26 (Security) plus 15/F15 (Storage) plus navigation guarding.

<details>
<summary><strong>Reference solution — React Native</strong></summary>

```jsx
import { useState, useEffect, createContext, useContext } from 'react';
import { View, TextInput, Button, Text, ActivityIndicator } from 'react-native';
import * as Keychain from 'react-native-keychain';   // or expo-secure-store on Expo

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [token, setToken] = useState(undefined);   // undefined = "still checking"

  useEffect(() => {
    Keychain.getGenericPassword().then((creds) => setToken(creds ? creds.password : null));
  }, []);

  const login = async (email, password) => {
    await new Promise((r) => setTimeout(r, 1000));           // fake network call
    const fakeToken = `token-${email}`;
    await Keychain.setGenericPassword(email, fakeToken);      // Keychain-backed, encrypted
    setToken(fakeToken);
  };

  const logout = async () => {
    await Keychain.resetGenericPassword();
    setToken(null);
  };

  return <AuthContext.Provider value={{ token, login, logout }}>{children}</AuthContext.Provider>;
}

function LoginScreen() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState(''); const [password, setPassword] = useState(''); const [busy, setBusy] = useState(false);
  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={{ borderWidth: 1, padding: 8, marginBottom: 8 }} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={{ borderWidth: 1, padding: 8, marginBottom: 8 }} />
      {busy ? <ActivityIndicator /> : <Button title="Log In" onPress={async () => { setBusy(true); await login(email, password); setBusy(false); }} />}
    </View>
  );
}

function HomeScreen() {
  const { logout } = useContext(AuthContext);
  return <View style={{ padding: 20 }}><Text>Welcome! You're logged in.</Text><Button title="Log Out" onPress={logout} /></View>;
}

function RootNavigator() {
  const { token } = useContext(AuthContext);
  if (token === undefined) return <ActivityIndicator style={{ flex: 1 }} />;   // still checking Keychain
  return token ? <HomeScreen /> : <LoginScreen />;
}

export default function App() {
  return <AuthProvider><RootNavigator /></AuthProvider>;
}
```

</details>

<details>
<summary><strong>Reference solution — Flutter</strong></summary>

```dart
import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

const _storage = FlutterSecureStorage();   // iOS Keychain / Android Keystore, F26

class AuthState extends ChangeNotifier {
  String? token;
  bool checking = true;

  AuthState() { _restore(); }

  Future<void> _restore() async {
    token = await _storage.read(key: 'auth_token');
    checking = false;
    notifyListeners();
  }

  Future<void> login(String email, String password) async {
    await Future.delayed(const Duration(seconds: 1));   // fake network call
    final fakeToken = 'token-$email';
    await _storage.write(key: 'auth_token', value: fakeToken);
    token = fakeToken;
    notifyListeners();
  }

  Future<void> logout() async {
    await _storage.delete(key: 'auth_token');
    token = null;
    notifyListeners();
  }
}

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});
  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final _email = TextEditingController(); final _password = TextEditingController(); bool _busy = false;
  @override
  Widget build(BuildContext context) {
    final auth = context.findAncestorStateOfType<_AuthScopeState>()!.auth;   // simplified DI for the example
    return Padding(
      padding: const EdgeInsets.all(20),
      child: Column(children: [
        TextField(controller: _email, decoration: const InputDecoration(labelText: 'Email')),
        TextField(controller: _password, decoration: const InputDecoration(labelText: 'Password'), obscureText: true),
        _busy ? const CircularProgressIndicator() : ElevatedButton(
          onPressed: () async { setState(() => _busy = true); await auth.login(_email.text, _password.text); setState(() => _busy = false); },
          child: const Text('Log In'),
        ),
      ]),
    );
  }
}

class HomeScreen extends StatelessWidget {
  final AuthState auth;
  const HomeScreen({super.key, required this.auth});
  @override
  Widget build(BuildContext context) => Padding(
    padding: const EdgeInsets.all(20),
    child: Column(children: [const Text("Welcome! You're logged in."), ElevatedButton(onPressed: auth.logout, child: const Text('Log Out'))]),
  );
}

// Root widget listens to AuthState and swaps screens — the Flutter analogue
// of RN's RootNavigator reading token from context above
class _AuthScopeState extends State<StatefulWidget> { final auth = AuthState(); @override Widget build(BuildContext c) => const SizedBox(); }
```

*(The Flutter solution is deliberately left slightly less polished on the dependency-injection wiring than the RN version, to leave you something real to fix — try replacing the ad-hoc `findAncestorStateOfType` lookup with proper `Provider`/`ChangeNotifierProvider`, F7, as the "finish this yourself" part of the exercise.)*

</details>

**What this reinforces:** the "still checking storage" third state (`undefined`/`checking`) that both solutions need before you can decide which screen to show — a bug you only find by testing cold app starts, not hot reloads, on both frameworks. It's also the direct hands-on version of F26's warning against ever putting the token in plain `AsyncStorage`/`shared_preferences`.

---

### Exercise A2 — End-to-End Push Notifications

**Spec:** Wire up Firebase Cloud Messaging so that: (1) the app registers for push and logs the device token, (2) a foreground notification shows an in-app banner, (3) tapping a notification (whether the app was backgrounded or fully killed) navigates to a specific screen based on a `screen` field in the notification's data payload.

**Try it yourself first.** ~45 minutes, plus real Firebase project setup — this is the single most "production reality" exercise in this set. Directly extends the Bonus Q&A above and F24.

<details>
<summary><strong>Reference solution — React Native</strong></summary>

```jsx
import { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
import { useNavigation } from '@react-navigation/native';

function usePushNotifications() {
  const navigation = useNavigation();

  useEffect(() => {
    const navigateFor = (remoteMessage) => {
      const screen = remoteMessage?.data?.screen;
      if (screen) navigation.navigate(screen, remoteMessage.data);
    };

    (async () => {
      await messaging().requestPermission();
      const token = await messaging().getToken();
      console.log('FCM token:', token);   // send this to your backend
    })();

    // Foreground — show your own banner, OS won't do it for you (F24 gotcha)
    const unsubForeground = messaging().onMessage(async (remoteMessage) => {
      console.log('Foreground push:', remoteMessage.notification?.title);
      // render a custom banner / toast here
    });

    // Backgrounded, user tapped the tray notification
    const unsubOpened = messaging().onNotificationOpenedApp(navigateFor);

    // Fully killed, opened via notification tap
    messaging().getInitialNotification().then((remoteMessage) => {
      if (remoteMessage) navigateFor(remoteMessage);
    });

    return () => { unsubForeground(); unsubOpened(); };
  }, [navigation]);
}
```

</details>

<details>
<summary><strong>Reference solution — Flutter</strong></summary>

```dart
import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:flutter/material.dart';

@pragma('vm:entry-point')   // required or release builds silently drop this (F24 gotcha)
Future<void> firebaseBackgroundHandler(RemoteMessage message) async {}

class PushNotificationHandler {
  final GlobalKey<NavigatorState> navigatorKey;
  PushNotificationHandler(this.navigatorKey);

  Future<void> init() async {
    await FirebaseMessaging.instance.requestPermission();
    final token = await FirebaseMessaging.instance.getToken();
    print('FCM token: $token');   // send this to your backend

    FirebaseMessaging.onBackgroundMessage(firebaseBackgroundHandler);

    // Foreground — show your own UI, OS won't do it for you either
    FirebaseMessaging.onMessage.listen((message) {
      print('Foreground push: ${message.notification?.title}');
      // render a SnackBar / custom banner here
    });

    // Backgrounded, tapped
    FirebaseMessaging.onMessageOpenedApp.listen(_navigateFor);

    // Fully killed, opened via tap
    final initialMessage = await FirebaseMessaging.instance.getInitialMessage();
    if (initialMessage != null) _navigateFor(initialMessage);
  }

  void _navigateFor(RemoteMessage message) {
    final screen = message.data['screen'];
    if (screen != null) navigatorKey.currentState?.pushNamed(screen, arguments: message.data);
  }
}
```

</details>

**What this reinforces:** the three-state notification-handling shape (foreground / backgrounded-tapped / killed-tapped) is identical across both frameworks because it's dictated by the OS, not the framework — a good sign for an interviewer that you understand this is a platform constraint, not a library quirk. Note the `@pragma('vm:entry-point')` line in the Flutter version — skip it and this exact exercise will work perfectly in every debug session and then silently fail in the release build you ship, exactly the trap F24 warns about.

---

### Exercise A3 — Offline-First Todo List with Sync

**Spec:** A todo list that works fully offline (backed by a local SQLite database), shows a "pending sync" indicator on items created while offline, and automatically pushes them to a (mocked) server endpoint when connectivity returns.

**Try it yourself first.** ~50 minutes. Combines Topic 15/F15 (local DB) with connectivity detection — a topic not covered as its own numbered section, but the pattern (`NetInfo`/`connectivity_plus`) is a natural extension of Topic 6/F6's networking material.

<details>
<summary><strong>Reference solution — React Native (sketch, SQLite via `react-native-sqlite-storage` + `@react-native-community/netinfo`)</strong></summary>

```jsx
import NetInfo from '@react-native-community/netinfo';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({ name: 'todos.db', location: 'default' });

// Schema: todos(id, text, synced INTEGER DEFAULT 0)

function addTodoOffline(text) {
  db.transaction((tx) => {
    tx.executeSql('INSERT INTO todos (id, text, synced) VALUES (?, ?, 0)', [Date.now().toString(), text]);
  });
}

async function syncPendingTodos() {
  const netState = await NetInfo.fetch();
  if (!netState.isConnected) return;

  db.transaction((tx) => {
    tx.executeSql('SELECT * FROM todos WHERE synced = 0', [], async (_, { rows }) => {
      for (let i = 0; i < rows.length; i++) {
        const todo = rows.item(i);
        try {
          await fetch('https://example.com/api/todos', { method: 'POST', body: JSON.stringify(todo) });
          db.transaction((tx2) => tx2.executeSql('UPDATE todos SET synced = 1 WHERE id = ?', [todo.id]));
        } catch {
          // stays synced=0, retried on next connectivity event — don't
          // throw away the local write just because the network call failed
        }
      }
    });
  });
}

// Fire a sync attempt every time connectivity is regained
NetInfo.addEventListener((state) => { if (state.isConnected) syncPendingTodos(); });
```

</details>

<details>
<summary><strong>Reference solution — Flutter (sketch, `sqflite` + `connectivity_plus`)</strong></summary>

```dart
import 'package:sqflite/sqflite.dart';
import 'package:connectivity_plus/connectivity_plus.dart';
import 'package:http/http.dart' as http;

late Database db;   // opened once via openDatabase(...), schema:
                     // todos(id TEXT PRIMARY KEY, text TEXT, synced INTEGER DEFAULT 0)

Future<void> addTodoOffline(String text) async {
  await db.insert('todos', {
    'id': DateTime.now().millisecondsSinceEpoch.toString(),
    'text': text,
    'synced': 0,
  });
}

Future<void> syncPendingTodos() async {
  final connectivity = await Connectivity().checkConnectivity();
  if (connectivity == ConnectivityResult.none) return;

  final pending = await db.query('todos', where: 'synced = ?', whereArgs: [0]);
  for (final todo in pending) {
    try {
      await http.post(Uri.parse('https://example.com/api/todos'), body: todo);
      await db.update('todos', {'synced': 1}, where: 'id = ?', whereArgs: [todo['id']]);
    } catch (_) {
      // same "leave it pending, retry later" strategy as the RN version
    }
  }
}

void watchConnectivity() {
  Connectivity().onConnectivityChanged.listen((result) {
    if (result != ConnectivityResult.none) syncPendingTodos();
  });
}
```

</details>

**What this reinforces:** an offline-first sync loop is a *pattern*, not a library feature — both solutions are structurally the same four pieces (write-locally-first, a `synced` flag, a connectivity listener, a retry-safe push loop) regardless of which SQL wrapper or connectivity package you use, which is exactly the kind of system-design answer an interviewer is listening for when they ask "how would you handle offline support" instead of "which library do you use."

---

### Exercise A4 — Animated, Gesture-Driven Onboarding with Deep Linking

**Spec:** A 3-screen swipeable onboarding flow (swipe left/right between screens, animated transition, a dot indicator showing current position) that can *also* be opened directly to screen 2 or 3 via a deep link (e.g. `myapp://onboarding/2`), not just from the start.

**Try it yourself first.** ~50 minutes. The hardest exercise in the set on purpose — it combines Topic 19/F19 (Animations), 20/F20 (Gestures), and 41 (Deep Linking, RN-only numbered topic; Flutter's equivalent is covered inline in F5's navigation material) into one flow.

<details>
<summary><strong>Reference solution — React Native (sketch)</strong></summary>

```jsx
import { useRef, useState, useEffect } from 'react';
import { Animated, PanResponder, View, Text, Dimensions, Linking } from 'react-native';

const { width } = Dimensions.get('window');
const screens = ['Welcome', 'Track your habits', 'Stay accountable'];

function Onboarding({ initialIndex = 0 }) {
  const [index, setIndex] = useState(initialIndex);
  const translateX = useRef(new Animated.Value(-initialIndex * width)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, g) => Math.abs(g.dx) > 10,
      onPanResponderMove: (_, g) => translateX.setValue(-index * width + g.dx),
      onPanResponderRelease: (_, g) => {
        let next = index;
        if (g.dx < -50 && index < screens.length - 1) next = index + 1;
        else if (g.dx > 50 && index > 0) next = index - 1;
        setIndex(next);
        Animated.spring(translateX, { toValue: -next * width, useNativeDriver: true }).start();
      },
    })
  ).current;

  // Deep link handling — myapp://onboarding/2 jumps straight to screen index 2
  useEffect(() => {
    const handleUrl = ({ url }) => {
      const match = url.match(/onboarding\/(\d+)/);
      if (match) {
        const target = Math.min(Number(match[1]), screens.length - 1);
        setIndex(target);
        Animated.timing(translateX, { toValue: -target * width, duration: 0, useNativeDriver: true }).start();
      }
    };
    Linking.getInitialURL().then((url) => url && handleUrl({ url }));
    const sub = Linking.addEventListener('url', handleUrl);
    return () => sub.remove();
  }, []);

  return (
    <View style={{ flex: 1, overflow: 'hidden' }} {...panResponder.panHandlers}>
      <Animated.View style={{ flexDirection: 'row', width: width * screens.length, transform: [{ translateX }] }}>
        {screens.map((label) => (
          <View key={label} style={{ width, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24 }}>{label}</Text>
          </View>
        ))}
      </Animated.View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 8, position: 'absolute', bottom: 40, width: '100%' }}>
        {screens.map((_, i) => (
          <View key={i} style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: i === index ? '#333' : '#ccc' }} />
        ))}
      </View>
    </View>
  );
}
```

</details>

<details>
<summary><strong>Reference solution — Flutter (sketch, using `PageView` — Flutter's built-in swipeable-pages widget)</strong></summary>

```dart
import 'package:flutter/material.dart';

class Onboarding extends StatefulWidget {
  final int initialIndex;
  const Onboarding({super.key, this.initialIndex = 0});
  @override
  State<Onboarding> createState() => _OnboardingState();
}

class _OnboardingState extends State<Onboarding> {
  late final PageController _controller;   // PageView + PageController give you
  int index = 0;                            // swipe gestures + animated paging
  final screens = ['Welcome', 'Track your habits', 'Stay accountable'];   // for free — no PanResponder equivalent needed

  @override
  void initState() {
    super.initState();
    index = widget.initialIndex;
    _controller = PageController(initialPage: widget.initialIndex);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(children: [
        PageView(
          controller: _controller,
          onPageChanged: (i) => setState(() => index = i),
          children: screens.map((label) => Center(child: Text(label, style: const TextStyle(fontSize: 24)))).toList(),
        ),
        Positioned(
          bottom: 40, left: 0, right: 0,
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: List.generate(screens.length, (i) => AnimatedContainer(
              duration: const Duration(milliseconds: 200),
              margin: const EdgeInsets.symmetric(horizontal: 4),
              width: 8, height: 8,
              decoration: BoxDecoration(shape: BoxShape.circle, color: i == index ? Colors.black87 : Colors.black26),
            )),
          ),
        ),
      ]),
    );
  }
}

// Deep link handling — with go_router (F5), a route like:
//   GoRoute(path: '/onboarding/:step', builder: (context, state) =>
//     Onboarding(initialIndex: int.parse(state.pathParameters['step']!)))
// maps myapp://onboarding/2 straight to Onboarding(initialIndex: 2) — routing
// and deep linking are the SAME mechanism in go_router, unlike RN where
// React Navigation's linking config is configured separately from the
// screens themselves.
```

</details>

**What this reinforces:** the biggest single lesson of this whole exercise — RN's `PanResponder` + `Animated` gives you raw gesture deltas you assemble into paging behavior yourself, while Flutter's `PageView` bakes "swipeable pages with animated transitions" in as one built-in widget, because paged onboarding/carousels are common enough that Flutter shipped a primitive for it. And on deep linking specifically: `go_router` treats a route path and a deep link as literally the same declaration, where React Navigation needs an explicit separate `linking` config object mapping URL patterns to screens — worth having ready as a direct answer to "how does deep linking work in each framework" in an interview.

---

# PART 7 — FUTURE TOPICS

*Reserved space for whatever you want to add next. Send a topic (or a list of topics) and it'll be written here following the same "What it is / Why it matters / code / Where people get burned" structure as everything above — plus the matching Flutter mirror if it applies to both frameworks, and an entry added to the Learning Checklist and Table of Contents.*

**Nothing has been added here yet.**

---