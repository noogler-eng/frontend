# Mobile Development Field Guide — React Native + Flutter (Hinglish Edition)

*Ek senior engineer jaise samjhana — dono major cross-platform mobile frameworks ke liye. React Native wala half ek 62-page "Complete React Native Interview Questions & Answers Guide" (LinkedIn pe share hui thi) se banaya gaya hai, plus jo bhi 2026-era codebase mein actually chahiye hota hai aur original guide mein miss tha, wo sab add kiya gaya hai. Flutter wala half wahi 30-topic curriculum Dart/Flutter mein repeat karta hai — us insaan ke liye likha hai jo already React Native aur JavaScript jaanta hai, isliye har concept ko kisi na kisi cheez se compare karke samjhaya gaya hai jo tumhe pehle se pata hai.*

*Yeh poora document Hinglish mein hai — explanations Hindi-English mix mein, lekin code blocks, headings, aur technical terms English/JS/Dart mein hi rakhe hain, taaki tum code ko directly copy karke locally try kar sako bina kisi galti ke.*

## Yeh Document Kaise Use Karo

Yeh flashcards ki list nahi hai. Har topic ke liye tumhe chaar cheezein milengi:

- **Yeh hai kya** — plain-Hinglish mein definition.
- **Yeh important kyun hai** — asli engineering reason ki wo cheez exist kyun karti hai, sirf "isse X ke liye use karte hain" nahi.
- **Kaise kaam karta hai** — code, aur jahan zaroorat ho, ek ASCII diagram jo dikhaye ki hood ke neeche kya ho raha hai.
- **Yahan log aksar gadbad karte hain** — wo gotcha jo ek interviewer (ya raat ko 12 baje debug karta hua future-tum) actually sunna chahta hai.

Jahan bhi Flutter section wahi ground cover karta hai jo React Native section already cover kar chuka hai, wahan explicitly bataya gaya hai — "RN mein tum X likhoge, Flutter mein Y" — kyunki doosra framework seekhne ka sabse fast tarika hai use pehle wale pe map karna jo tumhe already aata hai, zero se seekhna nahi.

**Document Map:**
- **Part 1 & 2** — React Native, 44 topics (original interview guide + jo usne miss kiya wo sab).
- **Part 3** — React Native interview prep (tips, curveball questions, bonus Q&A, quick reference).
- **Part 4** — JavaScript developers ke liye Dart crash course (Part 5 se pehle yeh padho agar Dart kabhi touch nahi kiya).
- **Part 5** — Flutter, 30 topics, Part 1 ka structure exactly mirror karta hai, RN comparisons ke saath.
- **Part 6** — Dono frameworks ke hands-on exercises, har ek ka worked solution ke saath.
- **Part 7** — Future topics (reserved — jo bhi next bhejoge, yahan add hoga).

> **Freshness pe ek note:** source PDF React Native ko waise sikhata hai jaise wo 2019–2022 mein dikhta tha — purana "Bridge" architecture, class-based patterns kahin-kahin, plain Redux instead of Redux Toolkit, React Navigation bina newer static config API ke. Yeh sab interviews mein *poocha* abhi bhi jaata hai (interviewers ne bhi RN tabhi seekha tha), aur *correct* bhi hai — lekin 2026 tak, zyada tar production apps **New Architecture** (Fabric + TurboModules + JSI) pe chalte hain, **Hermes** default JS engine hai, aur zyada tar naye projects **Expo** se start hote hain. Part 2 isliye hai taaki jab koi pooche "toh yeh New Architecture se kaise compare hota hai?" tab tum blank na ho jao.

---

## 📋 Learning Checklist

Apna progress yahan track karo. Document mein kuch bhi in checkboxes pe depend nahi karta — bas ek glance mein dikh jaaye ki kya cover ho gaya aur kya baaki hai.

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
<summary><strong>Part 5 — Flutter Field Guide (30 topics, Part 1 ko mirror karta hai)</strong></summary>

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

- [ ] *(khaali — jo topics tum bhejoge unka wait hai)*

</details>

---

## Table of Contents

*(Titles English mein rakhe hain taaki links sahi jagah le jaayein — andar ka content Hinglish mein hai)*

**Part 1 — The Core Curriculum (source guide se)**

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

**Part 2 — Jo source guide mein nahi tha (added)**

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

**Part 5 — Flutter: The Complete Field Guide (Part 1 ko topic-by-topic mirror karta hai)**

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

- [Reserved — abhi tak kuch add nahi hua](#part-7--future-topics)

---

# PART 1 — THE CORE CURRICULUM

## 1. What Is React Native?

**Yeh hai kya.** React Native ek framework hai Meta ka, jisse aap JavaScript/TypeScript mein mobile apps likh sakte ho — React ke component model ko use karke — aur woh code **real native UI elements** produce karta hai — iOS pe `UIView`, Android pe `android.view.View` — na ki browser ya WebView mein render hota hai.

**Yeh important kyun hai.** Yehi wo detail hai jo React Native ko Cordova/PhoneGap jaisi cheez se alag karta hai (jo ek website ko native shell mein wrap karta hai) ya Flutter se (jo apna khud ka rendering engine, Skia, use karke pixels khud draw karta hai). React Native khud kuch draw nahi karta — yeh native views ka ek tree *describe* karta hai, aur platform ka apna rendering engine unhe draw karta hai. Isi wajah se ek RN `<Text>` ek real native label jaisa dikhta aur behave karta hai, real native accessibility support milta hai, aur platform-level optimizations bhi free mein mil jate hain.

**Yeh kaam kaise karta hai — classic picture:**

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

Notice karo, yeh *bilkul* ek React component hi hai — `useState`, JSX, ek function component — sirf web React app se farak yeh hai ki import source (`react-native` instead of `react-dom`) alag hai aur jo primitives render karte ho woh alag hain (`View`/`Text` instead of `div`/`span`).

**Advantages:** iOS + Android dono ke liye ek hi codebase, near-native performance (yeh WebView nahi hai), fast iteration ke liye hot reload, React ka pura mental model aur ecosystem mil jata hai, aur ek hi team se do platforms ship ho sakte hain.

**Limitations:** bohot heavy graphics/animation work ke liye aap ab bhi fully-native performance se thoda peeche ho; kuch platform-specific UI patterns (jaise iOS ke large-title nav bars ya Android ke Material ripple) ko pixel-perfect banane ke liye extra kaam lagta hai; jo bhi cheez RN ya kisi library ne expose nahi ki hai, uske liye aapko (ya kisi ko) ek **Native Module** likhna padega (Topic 10); aur debugging do runtimes (JS + native) mein failti hai, jo apne aap mein ek real skill hai (Topic 11).

**Yahan log aksar gadbad karte hain:** candidates aksar bolte hain "it compiles to native code" — yeh imprecise hai. Aapka *JavaScript JavaScript hi rehta hai* (runtime mein Hermes ya JSC se interpret/JIT hota hai); *UI* native hoti hai, aapka business logic nahi. Is distinction mein precise rehna zaroori hai — yeh usually pehli cheez hoti hai jo ek blog-post-padhe-hue insaan ko ek app-ship-kiya-hue insaan se alag karti hai.

---

## 2. React Native vs React

**Yeh hai kya.** React (library) *component model* define karta hai — JSX, props, state, hooks, context, reconciliation algorithm. React Native aur React DOM dono **renderers** hain jo usi core mein plug hote hain aur aapke component tree ko kuch concrete mein badalte hain: React DOM isse browser mein HTML/CSS mein badalta hai; React Native isse phone pe native views mein badalta hai.

**Yeh important kyun hai.** Isi wajah se aapka React knowledge poori tarah transfer ho jata hai — `useState`, `useEffect`, `useContext`, `useReducer`, `useMemo`, `useCallback` sab identically kaam karte hain. Jo cheez transfer *nahi* hoti woh koi bhi DOM-shaped cheez hai: yahan koi `<div>` nahi hai, koi CSS files nahi hain, koi `window` nahi hai, koi `document` nahi hai, koi cascading stylesheets nahi hain, aur koi CSS-in-JS libraries nahi hain jo DOM ko manipulate karti hain.

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

**Component mapping**, taaki mental translation automatic ho jaye:

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

**Styling ka farak** — koi cascade nahi, koi CSS files nahi, koi `className` nahi:

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

**Dono jagah jo bilkul identical hai:** `useState`, `useEffect`, Context API, custom hooks, `useReducer`/`useCallback`/`useMemo`, aur "props neeche jaate hain, events upar jaati hain" wala pura idea.

**Yahan log aksar gadbad karte hain:** yeh bolna ki "React Native styles CSS use karte hain" — nahi karte. Yahan koi cascading nahi hai, koi pseudo-classes nahi hain (`:hover` ek touchscreen pe waise bhi exist nahi karta), koi `class`/`id` selectors nahi hain, aur units unitless density-independent pixels hain, `px`/`em`/`rem` nahi. Har RN style prop actually ek flattened, JS-computed subset hai jo Flexbox/Yoga (layout engine) samajhta hai.

---

## 3. Core Components

**Yeh hai kya.** Ek chhota sa set of built-in primitives, jinse har RN app banti hai. Baaki sab kuch — `FlatList`, `SafeAreaView`, third-party UI kits — inhi se compose hote hain.

**Yeh important kyun hai.** Yeh sab real native views pe 1:1 map hote hain, toh yeh exactly pata hona ki har ek kis *cheez ke liye* hai (aur kis cheez ke liye nahi hai) — performance aur layout bugs ki puri category baad mein bachati hai.

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

**View** — workhorse container:
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

**Text** — *sirf* yehi jagah hai jahan raw text legal hai. Aap ek bare string ko `<View>` ke andar nahi daal sakte — RN throw kar dega ("Text strings must be rendered within a `<Text>` component"). Text nest bhi hota hai, apne parent `<Text>` se style inherit karta hai:
```jsx
<Text style={{ fontSize: 18, fontWeight: 'bold' }}>Hello World</Text>

// Nested text — the child inherits, then overrides
<Text>
  Normal <Text style={{ fontWeight: 'bold' }}>bold</Text> text
</Text>
```

**Image** — teen source shapes, har ek ke alag performance implications hain:
```jsx
// Static (bundled at build time — RN can size/optimize it automatically)
<Image source={require('./assets/image.png')} style={{ width: 200, height: 200 }} />

// Network (you MUST specify width/height — RN can't know a remote image's size)
<Image source={{ uri: 'https://example.com/image.png' }} style={{ width: 200, height: 200 }} />

// Base64 (inlined — convenient, but bloats memory/JS bundle; avoid for large images)
<Image source={{ uri: 'data:image/png;base64,iVBOR...' }} style={{ width: 200, height: 200 }} />
```

**Button** aur **TextInput** — basic interactive primitives:
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
Notice karo `TextInput` ek **controlled component** hai, bilkul waise hi jaise web React forms mein hota hai: `value` + `onChangeText` (na ki `onChange`), state aap khud own karte ho.

**ScrollView vs FlatList** (short version — full comparison Topic 13 mein):
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

**Yahan log aksar gadbad karte hain:** ek raw string ko `View` ka child bana ke render karna (crash/warning aata hai), network `Image` pe `width`/`height` dena bhool jaana (yeh silently 0×0 render hota hai), aur `ScrollView` ka use aisi list ke liye karna jo realistically ~20-30 items se aage badh sakti hai (memory blow ho jati hai kyunki har row hamesha ke liye mount, style aur memory mein rakhi rehti hai).

---

## 4. Styling in React Native

**Yeh hai kya.** `StyleSheet.create()` — ek API jo style objects ka ek plain JS object leta hai aur wapas... lagbhag wohi object deta hai, bas IDs attach karke. Styles phir components ko `style` prop ke through diye jaate hain, jo ek object, objects ka array (baad wale jeetenge, jaise CSS specificity order se), ya `null`/`false` (conditional styling ke liye handy) accept karta hai.

**Yeh important kyun hai — performance wala angle jo interviewers actually sunna chahte hain:** `StyleSheet.create()` sirf "nicer syntax" nahi hai. Har call style object ko ek baar register karti hai aur components ko ek lightweight numeric ID de sakti hai, na ki har single render pe ek naya object literal banaye. Ek inline style (`style={{ flex: 1 }}`) **har render pe ek naya object** banati hai, jiska matlab hai ki yeh har render pe reprocess (flatten, diff) hona padta hai, aur — `React.memo`/`PureComponent` ke liye zyada important — ek naya object reference shallow-equality checks ko defeat kar sakta hai aur children ke unnecessary re-renders trigger kar sakta hai.

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

**Flexbox layout** — yeh single sabse important cheez hai jisme fluent hona chahiye. Web CSS ke unlike, RN ka `flexDirection` default `'column'` hota hai, `'row'` nahi — CSS se aane walon ke liye ek classic gotcha:

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

**Common style properties**, waise hi grouped jaise aap actually inhe reach for karte ho:
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
Yeh shadow/elevation ka split ek real platform-differences gotcha hai (dekho Topic 12): iOS shadows `shadowColor`/`shadowOffset`/`shadowOpacity`/`shadowRadius` use karte hain; Android in sabko ignore karta hai aur sirf `elevation` ko maanta hai. Cross-platform shadow components (ya `react-native-shadow-2`) specifically isi cheez ko paper over karne ke liye exist karte hain.

**Inline vs. StyleSheet:**
```jsx
// Avoid — creates a brand-new object every render
<View style={{ flex: 1, padding: 10 }}>Content</View>

// Prefer — created once, referenced by ID thereafter
const styles = StyleSheet.create({ container: { flex: 1, padding: 10 } });
<View style={styles.container}>Content</View>
```

**Responsive design** — yahan koi media queries nahi hain, toh aap screen size ko explicitly read karte ho:
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

**Yahan log aksar gadbad karte hain:** yeh assume karna ki `flexDirection` default `'row'` hota hai (yeh `'column'` hota hai); iOS-shadow/Android-elevation wala split bhool jaana; aur `Dimensions.get('window')` ko waisi cheez ke liye use karna jise rotation survive karna hai (yeh ek one-time read hai, reactive nahi — isi ke liye `useWindowDimensions` bana hai).

---

## 5. Navigation

**Yeh hai kya.** Mobile apps mein URLs nahi hote, toh lean karne ke liye koi browser history stack nahi hai — **React Navigation** (de-facto standard library) "screens" aur "back button behavior" ke idea ko poori tarah JS mein, jahan possible ho native primitives ke upar, recreate karti hai.

**Yeh important kyun hai.** Yeh samajhna ki *kaun sa* navigator use karna hai, actually teen alag real-world UI patterns ko samajhna hai:

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

**Nested navigation** — real apps almost hamesha ek Stack ko har Tab ke *andar* nest karte hain, taaki ek tab pe tap karne se us tab ki apni drill-down history lost na ho:
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

**Data pass karna aur wapas read karna** — har screen component ko automatically `navigation` aur `route` props milte hain:
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

**`useNavigation`** — jab kisi aise component se navigator tak pahuchna ho jo khud ek registered screen *nahi* hai (koi deeply nested child, ek shared header button):
```jsx
import { useNavigation } from '@react-navigation/native';

const MyComponent = () => {
  const navigation = useNavigation();
  return <Button title="Navigate" onPress={() => navigation.navigate('Other')} />;
};
```

**Yahan log aksar gadbad karte hain:** `navigate()` ko `push()` samajh lena — `navigate('X')` ek existing `X` screen ko *re-use* karega agar woh already stack pe hai, duplicate stack nahi karega, jo un logon ko surprise karta hai jo har baar browser-tab-style pushing expect karte hain; aur yeh bhool jaana ki `route.params` first mount pe `undefined` ho sakta hai agar screen bina params ke bhi reachable ho (hamesha default ya optional chaining se guard karo).

---

## 6. Networking / API Calls

**Yeh hai kya.** React Native wahi Web-standard `fetch` API ship karta hai jo aap browser mein use karoge — basic JSON requests ke liye koi special RN networking API nahi hai. `fetch`/`axios`, `async`/`await`, aur HTTP status codes ke baare mein jo bhi aap already jaante ho, woh sab unchanged apply hota hai.

**Yeh important kyun hai.** RN-specific part networking call khud nahi hai, balki *usko ek component ke lifecycle mein sahi tarah se wire karna* hai — loading states, error states, aur cleanup — kyunki ek fetch jo component unmount hone ke baad resolve hoti hai, "Can't perform a React state update on an unmounted component" warning (aur worse, ek memory leak) ka classic source hai.

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

**Axios** — ek common alternative, mostly iske nicer defaults ke liye (automatic JSON parsing/stringifying, request/response interceptors jaise cheezon ke liye jaise globally auth tokens attach karna, built-in request cancellation):
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

**POST requests** — headers pe dhyan do, aur body ek *string* honi chahiye (JSON.stringify):
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

**Status codes ko explicitly handle karna** — ek subtlety jo internalize karne layak hai: `fetch` sirf *network failure* pe reject hota hai (DNS, no connection, kuch environments mein timeout). Ek 404 ya 500 response ab bhi Promise ke perspective se ek "successful" fetch hi hai — `response.ok` / `response.status` khud check karna padega:
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

**Yahan log aksar gadbad karte hain:** ek 4xx/5xx response ko caught exception samajh lena (yeh nahi hai — `fetch` HTTP error statuses pe throw nahi karta, sirf `axios` default se karta hai); aur component unmount hone ya inputs change hone pe ek in-flight request ko abort na karna (`fetch` ke saath `AbortController` use karo, ya ek `isMounted`/cancellation flag track karo — pattern ke liye Topic 8 dekho).

---

## 7. State Management

**Yeh hai kya.** "Data kahan rehta hai, aur usme change hone pe UI mein kaise reflect hota hai" — iska umbrella term. React Native aapko web React jaise hi same four building blocks deta hai: local component state (`useState`), state-machine-style local state (`useReducer`), prop drilling ke bina ek subtree ke across shared state (`Context`), aur — badi apps ke liye — ek dedicated external store (Redux aur uske jaise).

**Yeh important kyun hai.** Yahan real skill yeh hai ki *smallest* tool choose karo jo actual problem solve kare. "Mera app zyada re-render hota hai" wali performance complaints ka ek huge fraction wapas isi baat pe trace hota hai ki kisi cheez ke liye global state (Context ya Redux) reach for kiya gaya jo local `useState` honi chahiye thi, kyunki har Context update *har* consumer ko re-render karta hai, jabki local state sirf us ek component ke subtree ko re-render karta hai.

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

**Yahan log aksar gadbad karte hain:** 2026 ke codebase mein raw `createStore`/`react-redux` verbatim use karna ek code smell hai — modern Redux **Redux Toolkit** hai (`configureStore`, `createSlice`), jo upar wale almost saare boilerplate ko remove kar deta hai (dekho Topic 37). Aur ek baat: sab kuch Context mein daal dena "kyunki yeh built-in hai" — yeh React Native ki sabse common performance mistake hai jo juniors karte hain; ek Context pe koi bhi value change us Context pe `useContext` call karne wale har component ko re-render karta hai, koi selective subscription nahi hoti, Redux ke `useSelector` ke unlike.

---

## 8. Async Operations

**Yeh hai kya.** `async`/`await` ke patterns, specifically do cheezon ke liye jo aapko hamesha chahiye honge: persisted local data ko read/write karna (`AsyncStorage`), aur `useEffect` ke andar asynchronous work ko sahi tarah run/cleanup karna.

**Yeh important kyun hai.** `useEffect` callbacks **khud `async` functions nahi ho sakte** (ek effect ka cleanup function ya toh `undefined` hona chahiye ya ek plain function — Promise return karna silently cleanup ko todh deta hai), isliye har async-in-an-effect pattern async logic ko ek inner function ke andar wrap karta hai jo declare hote hi turant invoke ho jaata hai.

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

**`isMounted` cleanup pattern** — yeh wo pattern hai jo har interviewer memory se banwana chahta hai, kyunki yeh "race condition" pitfall ko prevent karta hai (Topic 29 mein bhi cover kiya gaya hai):
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

**Sequential vs. parallel async calls** — ek concrete, common interview ask ("aap ek user aur uske posts kaise load karoge?"):
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

**Yahan log aksar gadbad karte hain:** `Promise.all` reject ho jaata hai (aur saare results abandon kar deta hai) jaise hi **koi bhi ek** promise reject hoti hai — agar aapko partial success chahiye (jaise, "in 3 widgets mein se jo bhi load hue unhe dikhao, jo fail hue unhe ignore karo"), toh `Promise.allSettled` reach for karo, jo kabhi reject nahi hota aur har promise ke liye ek status deta hai. Yeh ek bahut common follow-up question hai.

---

## 9. Performance Optimization

**Yeh hai kya.** Unnecessary re-renders aur unnecessary re-computation prevent karne ke liye ek specific toolkit: `useMemo`, `useCallback`, `React.memo`, `FlatList` tuning props, aur non-urgent work ko defer karna.

**Yeh important kyun hai.** React ek component ko tab re-render karta hai jab uska state change ho *ya uska parent re-render ho* — by default, ek re-render har child tak cascade hota hai, chahe us child ke apne props actually change hue hon ya nahi. Ek phone pe (laptop se kaafi kam CPU headroom, aur user ka thumb 60fps expect karta hai), re-renders ka ek unnecessary cascade "yeh app janky feel hota hai" ka sabse common cause hai.

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

**`FlatList` tuning** — woh props jo actually ek long, fast-scrolling list pe farak dalte hain:
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

**Heavy, non-urgent work ko defer karna** taaki woh in-progress screen transition animation ko block na kare:
```jsx
import { InteractionManager } from 'react-native';

useEffect(() => {
  const task = InteractionManager.runAfterInteractions(() => {
    performExpensiveCalculation();   // runs AFTER animations/gestures settle
  });
  return () => task.cancel();
}, []);
```

**Yahan log aksar gadbad karte hain:** `useMemo`/`useCallback` ko *har jagah*, "just in case", reach for karna — inka apna overhead hota hai (cached value ke liye memory, har render pe ek comparison), toh kisi trivial cheez (jaise ek plain string concatenation) ko wrap karna aksar net loss hota hai. Sahi jawab hai "pehle measure karo" (Topic 11 ke profiling tools), phir un cheezon ko memoize karo jo (a) actually expensive hain, ya (b) ek `React.memo`-wrapped child ko pass ki jaa rahi hain jahan reference stability matter karta hai.

---

## 10. Native Modules

**Yeh hai kya.** Escape hatch: jab RN ke built-in components/APIs koi cheez expose nahi karte jo OS kar sakta hai (koi proprietary Bluetooth SDK, koi platform-specific biometric API, kisi vendor ka payment SDK), tab aap native code (Swift/Obj-C, Kotlin/Java) mein ek chhota sa bridge likhte ho aur usko JavaScript ko ek normal-dikhne-wale async function ki tarah expose karte ho.

**Yeh important kyun hai.** Yehi hai jiska matlab actually "cross-platform, not platform-agnostic-at-all-costs" hota hai — RN yeh pretend nahi karta ki har native capability already aapke liye wrap ki hui hai; yeh aapko platform mein khud reach karne ka ek clean, documented tareeka deta hai, aur community libraries ka ek huge ecosystem specifically isi wajah se exist karta hai ki kisi ne already ek common need ke liye woh native module likh diya hai (camera, maps, biometrics, Bluetooth...).

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

**Common pre-built native modules jo aap actually use karoge, khud likhne ke bajaye:**
```jsx
import Geolocation from '@react-native-community/geolocation';   // GPS
import RNFS from 'react-native-fs';                              // filesystem access
import { RNCamera } from 'react-native-camera';                  // camera
import ImagePicker from 'react-native-image-picker';              // photo library
```

**Yahan log aksar gadbad karte hain:** yeh imply karna ki *har* feature ke liye custom native module likhna padta hai — practice mein, 95% apps ke liye aap existing community modules ko glue kar rahe ho, khud Objective-C/Kotlin nahi likh rahe. Aur ek baat: upar wala `resolve`/`reject` pattern (`RCTPromiseResolveBlock`/`RCTPromiseRejectBlock`) exactly wahi tareeka hai jisse ek native method ek JS `Promise` banta hai — yeh connection pata hona ek accha signal hai ki aapne actually bridge samjha hai, sirf snippet copy-paste nahi kiya.

---

## 11. Debugging

**Yeh hai kya.** React Native debugging *do* runtimes mein failti hai — aapka JS logic, aur uske around ka native shell — toh toolkit bhi accordingly split hota hai: aapke React code ke liye console logging aur JS-side tools, aur native layer ke liye native tools (Xcode/Android Studio logs, crash reporters).

**Yeh important kyun hai.** Jo candidate bolta hai "main bas `console.log` use karta hoon" usne kabhi ek real production issue debug nahi kiya — ek release build mein koi Metro dev server attached nahi hota, koi red-box error overlay nahi hoti, aur (ek New Architecture / Hermes app mein) aap **Hermes bytecode** debug kar rahe ho, readable JS nahi, jab tak aapke paas source map na ho.

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

**Error Boundaries** — yahan ek class component *still* required hai; koi hook equivalent nahi hai (`getDerivedStateFromError`/`componentDidCatch` ka koi hook form nahi hai) React 19/RN 0.7x tak:
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

**Network debugging** — in-app dev menu ke Network tab se requests inspect karo, ya **Flipper** se (Meta ka official desktop debugging app — network inspector, layout inspector, aur ek React DevTools panel, sab ek mein).

**Basic performance timing:**
```jsx
const startTime = performance.now();
// Do something
const endTime = performance.now();
console.log('Took ' + (endTime - startTime) + 'ms');
```

**Yahan log aksar gadbad karte hain:** yeh na pata hona ki ek Error Boundary in cheezon ke errors **catch nahi kar sakta**: event handlers, asynchronous code (`setTimeout`, ek Promise rejection), server-side rendering, ya boundary ke andar khud thrown errors — yeh sirf rendering ke dauran, lifecycle methods mein, aur uske *neeche* wale tree ke constructors mein thrown errors catch karta hai. Isi wajah se baaki sab kuch ke liye aapko ek global handler bhi chahiye (Topic 18).

---

## 12. Platform Differences

**Yeh hai kya.** iOS aur Android alag operating systems hain, alag design languages, APIs, aur quirks ke saath — `Platform` module wo tareeka hai jisse aap apna code (ya styles) per-OS branch karte ho jab RN ka abstraction kaafi nahi hota.

**Yeh important kyun hai.** "Cross-platform" ka matlab kabhi bhi "dono platforms pe pixel-identical" nahi tha — Apple ke Human Interface Guidelines aur Google ka Material Design actively *disagree* karte hain cheezon pe jaise back button kahan rehta hai, tab bars kaise dikhti hain, aur ek "share sheet" kaisi dikhti hai. Achhe RN engineers jaante hain ki kab platform ke native feel mein lean karna hai, uske against fight nahi karna.

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

**Platform-specific *files*** — RN ka bundler (Metro) build time pe automatically har platform ke liye sahi file pick kar leta hai, inke andar `Platform.OS` check ki zaroorat nahi:
```
MyComponent.ios.js       // only bundled into the iOS build
MyComponent.android.js   // only bundled into the Android build
MyComponent.js           // fallback used by both, if the above don't exist
```

**OS version checks** — kyunki "iOS" aur "Android" single targets nahi hain; aap actually OS versions ki ek range support kar rahe ho:
```jsx
if (Platform.OS === 'ios' && Platform.Version >= 13) {
  // iOS 13+ specific (Version is a number on iOS)
}
if (Platform.OS === 'android' && Platform.Version >= 28) {
  // Android 28+ specific (Version is the numeric API level on Android)
}
```

**Safe areas** — notches, home indicators, aur status bars screen ke andar khaate hain; `SafeAreaView` (ya, aajkal better, `react-native-safe-area-context` ka `useSafeAreaInsets`) content ko inse clear rakhta hai:
```jsx
import { SafeAreaView } from 'react-native';
const App = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <Text>Safe area content</Text>
  </SafeAreaView>
);
```

**Poore components branch karna**, jab platforms ke UI patterns genuinely diverge karte hain:
```jsx
const HeaderComponent = () => {
  if (Platform.OS === 'ios') return <IosHeader />;
  return <AndroidHeader />;
};
```

**Yahan log aksar gadbad karte hain:** pixel values hardcode karna jo ek test device pe theek dikhte the — hamesha Safe Area insets aur `useWindowDimensions` ke against design karo, kabhi fixed notch height nahi. Aur, built-in `SafeAreaView` Android pe actually ek no-op hai (yeh sirf iOS pe hi kabhi kuch karta tha) — isi wajah se community package `react-native-safe-area-context` exist karta hai aur aajkal real apps mostly yehi use karti hain.

---

## 13. FlatList / ScrollView

**Yeh hai kya.** Do alag scrolling strategies, plus `SectionList` grouped data ke liye. `ScrollView` har child ko upfront mount kar deta hai; `FlatList` **virtualize** karta hai — yeh sirf woh mount karta hai jo screen pe (ya uske near) hai aur jaise-jaise aap scroll karte ho views recycle karta hai, exactly jaise Android pe `RecyclerView` ya iOS pe `UITableView` under the hood karta hai.

**Yeh important kyun hai.** Yehi farak hai ek app ke beech jo 10,000 rows ke saath 60fps pe scroll karta hai aur ek app ke beech jo 200 rows pe hi memory se out ho jata hai.

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

**Yahan log aksar gadbad karte hain:** ek `ScrollView` ke andar `.map()` use karke ek "list" render karna jo actually unbounded badh sakti hai — yeh single sabse common junior-to-mid-level RN code smell hai, aur interviewers isko dhoondhna jaante hain. Ek doosri cheez: `keyExtractor`/`key` ke liye array ka **index** use karna, ek stable ID ke bajaye (Topic 29 mein exactly cover kiya hai ki reorderable/filterable data ke saath yeh kyun dangerous hai).

---

## 14. Image Handling

**Yeh hai kya.** Char alag sources se images load karna (bundled, network, local file URI, base64), har ek ke alag caching/sizing implications ke saath, plus loading states aur optimization ke patterns.

**Yeh important kyun hai.** Images usually ek typical app mein memory usage aur perceived load time dono ke sabse bade contributor hote hain — sizing, caching, aur compression sahi karna ek real, measurable performance lever hai, sirf polish nahi.

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

**Ek simple lazy-load pattern, pehle ek placeholder ke saath:**
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

**Optimization** — upload/display se pehle compress karo, aur kisi bhi network-heavy cheez ke liye ek caching image component use karo:
```jsx
import ImageResizer from 'react-native-image-resizer';
ImageResizer.createResizedImage(uri, 800, 600, 'JPEG', 80, 0, outputPath)
  .then((response) => console.log('Image resized:', response.uri));

import FastImage from 'react-native-fast-image';
<FastImage source={{ uri: 'https://example.com/image.png' }} cacheControl="web" style={{ width: 200, height: 200 }} />
```

**Yahan log aksar gadbad karte hain:** built-in `<Image>` component ka disk caching behavior iOS/Android ke across genuinely inconsistent hai aur overestimate karna aasan hai — yehi puri wajah hai ki `react-native-fast-image` (jo native `SDWebImage`/`Glide` se backed hai) kisi bhi content-heavy app (feeds, galleries) ke liye near-default dependency ban gaya. Aur ek baat: ek 12MP camera photo ko upload karne ya 100×100 thumbnail mein render karne se pehle resize na karna ek bahut real, bahut common memory/bandwidth bug hai.

---

## 15. Storage

**Yeh hai kya.** Local persistence ke teen tiers, roughly data kitna structured/large hai uske hisaab se ordered: `AsyncStorage` (simple key-value strings), SQLite (real relational tables via `react-native-sqlite-storage` ya newer `op-sqlite`/`expo-sqlite`), aur Realm (ek object database jisme query API hai, koi SQL nahi chahiye).

**Yeh important kyun hai.** Galat tier pick karna ek real architectural mistake hai — `AsyncStorage` ko thousands JSON records ki ek badhti hui list store karne ke liye use karna (ek real embedded database ke bajaye) har read/write pe us pure blob ko serialize/deserialize karne mein result hota hai, jo jaise-jaise badhta hai waise-waise slow hota jata hai.

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

**Yahan log aksar gadbad karte hain:** `AsyncStorage` ko encrypted ya secure samajh lena — yeh dono platforms pe by default rest mein encrypted **nahi** hai; tokens, passwords, ya PII kabhi ismein directly store mat karo (uske liye `expo-secure-store` / Keychain / Keystore-backed storage hai — dekho Topic 26).

---
## 16. Permissions

**Yeh hai kya.** iOS aur Android dono sensitive capabilities (camera, location, contacts, microphone, notifications) ke liye explicit, runtime user consent maangte hain — `react-native-permissions` aapko ek hi JS API deta hai jisse aap dono platforms pe request/check kar sakte ho, chahe underlying OS mechanisms kaafi alag kyun na hon.

**Yeh important kyun hai.** Is flow ko galat karna app ko **App Store se reject** karwane ke sabse tez tareeqon mein se ek hai, aur ek buri permissions UX (app khulte hi location maang lena, bina kisi context ke) low-star review aur ek "Don't Allow" tap paane ka fastest tareeqa hai — jiske baad iOS pe aap dobara re-prompt kabhi nahi kar sakte.

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

**Yahan log aksar gadbad karte hain:** iOS pe, agar user ne "Don't Allow" tap kar diya, toh dobara `request()` call karne se system dialog **dubara nahi** dikhta — woh bas turant `BLOCKED` resolve ho jaata hai; aapko user ko app ke Settings page pe deep-link karna padega (`Linking.openSettings()`). Aur ek baat, *result values* khud bhi platform ke hisaab se subtly alag hote hain (Android mein historically `BLOCKED`-vs-`DENIED` ka distinction iOS jaisa nahi tha) — hamesha "denied twice" aur "revoke in Settings mid-session" wale paths test karo, sirf happy "granted" path nahi.

---

## 17. Testing

**Yeh hai kya.** Jest test runner ke roop mein (RN ke default project setup ke saath bundled aata hai), plus `@testing-library/react-native` components render karne aur user interaction simulate karne ke liye — bilkul waise jaise ek *real user* karega (visible text/role se, internal implementation details se nahi).

**Yeh important kyun hai.** Testing Library ki poori philosophy — "jitna zyada aapke tests aapke software ke actual usage se resemble karte hain, utna zyada confidence woh de sakte hain" — mobile pe aur bhi zyada matter karti hai, jahan ek test jo component ke internals mein jhaank raha hai woh refactor karte hi toot jaayega, chahe app ka actual behavior bilkul bhi change na hua ho.

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

**Yahan log aksar gadbad karte hain:** default/pehli choice ke roop mein `getByTestId` se query karna — Testing Library ki apni guidance (aur zyadatar interviewers) `getByText`/`getByRole`/`getByLabelText` ko prefer karte hain kyunki yeh mirror karte hain ki ek real user (ya screen reader — Topic 39 dekho) UI ko actually kaise perceive karta hai; `testID` ek fallback hai us waqt ke liye jab kuch bhi accessible element ko distinguish nahi karta. Aur ek baat, full app-level flows ke liye (real login → checkout journey, real screens ke across), Jest/Testing Library kaafi nahi hai — usi ke liye **Detox** ya **Maestro** (E2E testing frameworks jo actual compiled app ko simulator/device pe drive karte hain) hote hain.

---

## 18. Error Handling

**Yeh hai kya.** Teen complementary layers: individual async operations ke around `try/catch`, ek subtree ke render-time crashes ke liye Error Boundary, aur ek *global* handler jo in dono mein se kisi ke bhi na pakde jaane wale sabke liye hai (unhandled promise rejections, React ke render cycle ke bahar ke errors).

**Yeh important kyun hai.** Koi ek single mechanism sab kuch nahi pakadta — yeh un sabse zyada test kiye jaane wale interview topics mein se ek hai jo yeh check karta hai "aapko error handling actually samajh aati hai, ya bas cheezein try/catch mein wrap kar deta hai."

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

**Yahan log aksar gadbad karte hain:** yeh assume karna ki Error Boundary hi ek complete solution hai — agar poocha jaaye toh clearly restate karo ki yeh sirf uske neeche wale subtree ke render/lifecycle/constructor errors ko hi cover karta hai, aur async errors, event-handler errors, aur boundary component ke apne andar ke errors — in sabko upar wali doosri dono layers ki zaroorat padti hai.

---

## 19. Animations

**Yeh hai kya.** RN ka built-in `Animated` API, plus community-standard, kaafi zyada high-performance **Reanimated** library — simple fades/slides se aage kisi bhi cheez ke liye.

**Yeh important kyun hai.** Yahan sabse important concept hai `useNativeDriver`. By default, animation ka math **JS thread** pe chalta hai aur har single frame pe ek naya style value bridge ke across native ko bhejta hai (Topic 32 mein threading model detail mein explain kiya gaya hai) — agar JS thread kabhi bhi busy hua (ek network response aa raha ho, ek bada re-render ho raha ho), toh animation stutter karta hai. `useNativeDriver: true` iske bajaye *poori animation configuration* (from/to/duration/easing) ek hi baar across bhej deta hai, aur native side (UIKit/Android ka animation system) ko har frame khud drive karne deta hai, jo JS thread ke hiccups se bilkul immune hota hai.

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

**Yahan log aksar gadbad karte hain:** har style property native-driver-eligible nahi hoti — layout properties jaise `width`/`height`/`top`/`left` ko abhi bhi JS thread chahiye (`useNativeDriver: false`) kyunki yeh *dusre elements* ke layout ko bhi affect kar sakte hain, jo abhi sirf JS-side Yoga layout engine hi compute karta hai; classic `Animated` API mein sirf `transform` aur `opacity` hi safely native-driver-able hote hain. Yahi bilkul woh limitation hai jise blow past karne ke liye Reanimated banaya gaya tha — poori computation ko ek worklet mein shift karke jo UI thread ke saath-saath chalta hai.

---

## 20. Gestures

**Yeh hai kya.** Basic tap/press handling `Touchable*`/`Pressable` components ke through free mein mil jaati hai; kuch bhi richer (drag, pinch-to-zoom, swipe-to-dismiss) chahiye toh `react-native-gesture-handler` chahiye, jo usually Reanimated ke saath pair hota hai animated response ke liye.

**Yeh important kyun hai.** RN ka default touch system (`Touchable*`) JS-thread-driven hai aur single-touch hai — buttons ke liye toh theek hai, lekin low-latency, multi-touch, native-feeling drag/pinch interactions nahi de sakta jo ek polished app se users expect karte hain. `react-native-gesture-handler` gestures ko **natively** recognize karta hai, JS thread ke bottleneck ko poora side-step karte hue.

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

**Yahan log aksar gadbad karte hain:** upar dikhaya gaya API (`useAnimatedGestureHandler`, class-based `PanGestureHandler` wrapping) **Gesture Handler v1** style hai — Gesture Handler v2 ke aane ke baad se, modern idiom composable `Gesture.Pan()`/`Gesture.Pinch()` API hai `GestureDetector` ke saath. Dono real codebases aur interview material mein abhi bhi dikhte hain, isliye dono ko pehchano, lekin yeh jaano ki naye code ke liye newer wala hi preferred hai.

---

## 21. Keyboard Handling

**Yeh hai kya.** On-screen keyboard ke aane pe react karne ke liye APIs (`Keyboard` events), content ko automatically uske peeche se shift karne ke liye (`KeyboardAvoidingView`), aur usse programmatically dismiss karne ke liye.

**Yeh important kyun hai.** Keyboard ka ek form ke submit button ko — ya ek chat app ke input field ko — cover kar lena sabse common, sabse visible mobile UI bugs mein se ek hai, aur iOS aur Android ko genuinely alag handling chahiye (`behavior="padding"` vs `"height"`).

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

**Yahan log aksar gadbad karte hain:** iOS pe `behavior="height"` galat dikhta hai (yeh poori view ko resize kar deta hai instead of padding karne ke) — `"padding"` iOS ke liye sahi choice hai, `"height"` Android ke liye; inko mix up karna ek instant visual bug hai jo miss karna easy hai agar aapne sirf ek hi platform ke simulator pe test kiya ho.

---

## 22. Camera Integration

**Yeh hai kya.** Native camera access ek library ke through (classically `react-native-camera`, halaanki 2026 tak zyadatar naye projects actively-maintained **`react-native-vision-camera`** use karte hain — neeche freshness note dekho), plus `react-native-image-picker` library se koi existing photo/video choose karne ke liye.

**Yeh important kyun hai.** Camera access ko hamesha pehle Topic 16 wale runtime permission flow ki zaroorat padti hai — bina granted permission ke camera preview dikhana bas ek black screen dikhata hai ya throw kar deta hai, isliye permission-then-capture hi woh pattern hai jo internalize karna chahiye, sirf capture call nahi.

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

**Yahan log aksar gadbad karte hain (aur ek freshness flag):** `react-native-camera` ek project ke roop mein pichle kuch saalon se effectively **deprecated/unmaintained** hai — 2025/2026 ke zyadatar real codebases iske bajaye `react-native-vision-camera` use karte hain (real-time ML/barcode scanning ke liye frame-processor support, kaafi behtar performance). Interview ke liye concept aur purani API dono jaano, lekin agar poocha jaaye "aap aaj actually kya use karoge" toh modern library ka naam lo — yehi jawaab hai jo real, current experience signal karta hai.

---

## 23. Location Services

**Yeh hai kya.** `@react-native-community/geolocation` ke through GPS access (ek one-shot read ya ek continuous "watch"), plus `react-native-maps` ke through map rendering.

**Yeh important kyun hai.** Location phone ki sabse battery-sensitive APIs mein se ek hai — `getCurrentPosition` (ek reading) aur `watchPosition` (continuous updates, jise aapko *zaroor* clear karna yaad rakhna hai) ke beech ka difference, agar carelessly handle kiya jaaye toh ek real production battery-drain bug ban sakta hai.

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

**Yahan log aksar gadbad karte hain:** effect ke cleanup function mein `clearWatch` bhoolna bilkul waisa hi bug hai jaisa ek event listener remove karna bhoolna — yeh explicitly us general principle se connect karne layak hai ki "`useEffect` ke return function mein subscriptions ko hamesha clean up karo," na ki isse ek location-specific quirk maan lena chahiye.

---

## 24. Push Notifications

**Yeh hai kya.** Firebase Cloud Messaging (`@react-native-firebase/messaging`) sabse common cross-platform push provider hai; yeh notification permission request karna, device token obtain karna, aur teen alag app states (foreground, background, killed) mein messages receive karna — sab handle karta hai.

**Yeh important kyun hai.** In teenon app states mein se har ek ko *alag* handler chahiye, aur yeh bilkul woh cheez hai jo demo mein sahi karna easy hai (sirf foreground) aur production mein galat ho jaana easy hai (ek notification jo app killed hone pe silently kuch nahi karta).

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

**Yahan log aksar gadbad karte hain:** yeh bhool jaana ki `setBackgroundMessageHandler` ko **module ke top level** pe register karna hai, kisi component ke andar nahi — jab tak koi component mount hota, tab tak JS engine chal bhi nahi raha ho sakta (OS ek push deliver kar sakta hai aur app ka bas itna hi hissa jagaa sakta hai ki yeh ek handler chale, bina full app launch ke). Aur ek baat: iOS ko **har** notification type (alerts, sounds, badges) ke liye alag-alag explicit user permission chahiye, aur enterprise apps ko often server-side APNs certificates/keys bhi sahi se configure karne padte hain — ek step jiska aapke RN code se koi lena-dena nahi, lekin agar misconfigured ho toh poori feature block ho jaati hai.

---

## 25. Background Tasks

**Yeh hai kya.** App foreground mein na hote hue bhi code run karna — `AppState` aapko app ki current lifecycle state batata hai (active/background/inactive), aur `react-native-background-timer` jaisi libraries ek timer ko backgrounded hote hue bhi (OS-imposed limits ke andar) fire karte rehne deti hain.

**Yeh important kyun hai.** iOS aur Android dono battery life bachane ke liye background execution ko **aggressively limit** karte hain — yeh koi RN limitation nahi hai, yeh ek fundamental mobile OS constraint hai, aur yeh ek bahut common "gotcha" question hai: "kya aap isse background mein hamesha ke liye har 5 seconds mein chala sakte ho?" (jawaab: indefinitely nahi, nahi — dono platforms aapko ek limited window ke andar suspend ya throttle kar denge, jab tak aap kisi specific OS-sanctioned background mode ka use na kar rahe ho jaise audio playback, location tracking, ya ek registered background fetch task).

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

**Yahan log aksar gadbad karte hain:** yeh assume kar lena ki background execution unlimited hai "kyunki code compile ho raha hai aur mere phone pe run ho raha hai jab main use hold kiye hun" — real constraints (iOS Background App Refresh budgets, Android Doze mode aur battery optimization) tabhi saamne aate hain jab app real device pe kuch der ke liye backgrounded rah chuka ho — isiliye yeh ek common "kya aapne yeh actually production mein ship kiya hai" screening question hai.

---

## 26. Security

**Yeh hai kya.** Chaar alag concerns jo "security" ke naam pe lump kar diye jaate hain: secrets ke liye encrypted local storage, man-in-the-middle attacks ke against certificate/SSL pinning, real secrets ko JS bundle se bahar rakhna, aur user input validate karna.

**Yeh important kyun hai.** Ek JS bundle — chahe woh ek Hermes bytecode wala hi kyun na ho — secrets ke liye secure jagah **nahi** hai. Yeh user ke device pe app package ke andar ship hota hai, aur ek sufficiently motivated attacker usse strings extract kar sakta hai. "Secrets actually kahan rehte hain" — yeh kisi bhi client-side app ke liye, mobile ho ya web, ek foundational security question hai.

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

**Yahan log aksar gadbad karte hain:** yeh believe kar lena ki `react-native-config`/`.env` files ek secret ko "safe" bana dete hain kyunki woh kisi `.js` file mein hardcoded nahi hai — woh phir bhi shipped bundle mein embedded ho hi jaata hai, dono tareeqon se. Sahi mental model yeh hai: **jo bhi cheez client ko function karne ke liye chahiye** (ek public API base URL, ek publishable Stripe key) woh `.env` mein theek hai; **jo bhi cheez privileged access deti hai** (ek secret API key, ek database credential) usse sirf aapke server pe rehna chahiye, aapke app ke call kiye jaane wale ek authenticated endpoint ke through access hote hue.

---

## 27. App Optimization

**Yeh hai kya.** Bundle size kam karna (code splitting, production se dev-only code hataana), memory leaks rokna (cleanup functions), aur cold-start time speed up karna (non-critical work ko defer karna).

**Yeh important kyun hai.** Bundle size directly install conversion ko affect karta hai (users bade downloads chhod dete hain, especially metered connections pe) aur app launch time ko bhi (ek bada bundle Hermes/JSC ko startup pe parse aur execute karne mein zyada time leta hai).

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

**Yahan log aksar gadbad karte hain:** "optimization" ko project ke end mein ek one-time pass ki tarah treat karna, na ki ek ongoing discipline ki tarah — upar wala cleanup-function pattern woh cheez hai jo aapko har subscription/timer/listener ke liye *pehli baar mein hi* sahi likhni chahiye, baad mein jab ek memory-profiler flag kare tab retrofit nahi karni chahiye.

---

## 28. Building for Production

**Yeh hai kya.** Ek signed, installable, store-ready build produce karne ke liye actual commands/process: iOS ke liye Xcode archiving, Android ke liye Gradle assembling/bundling, plus version management aur code signing.

**Yeh important kyun hai.** Yahin pe "mere machine pe kaam kar raha hai" ka saamna app store requirements ki reality se hota hai — code signing, versioning, aur build configuration shipping ka ek real, kabhi-kabhi painful hissa hain, jo under-practice rehna easy hai agar aapne kabhi sirf dev build hi run ki ho.

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

**Yahan log aksar gadbad karte hain:** APK aur **AAB** (Android App Bundle) ke beech ka difference na jaanna — Google Play ko August 2021 se AAB submissions chahiye, aur ek AAB Google Play ko device-optimized APKs generate karne deta hai (smaller downloads) instead of har device ko ek universal APK ship karne ke. iOS pe, provisioning profiles/certificates ka track kho dena sabse common release-day fire drill hai — isiliye zyadatar real teams isse haath se yeh commands chalane ke bajaye **Fastlane** ya **EAS Build** se automate karti hain (Topic 43 dekho).

---

## 29. Common Pitfalls

**Yeh hai kya.** Paanch specific, recurring mistakes jo real codebases aur code review mein dikhte hain — har ek ke saath "bad" version aur uska fix.

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

**Ek chhata pitfall bhi add karne layak hai** (source list mein nahi hai, lekin kam se kam utna hi common hai): **ek memoized child ko prop ke roop mein ek naya inline function/object pass karna**, jo silently `React.memo` ko har baar defeat kar deta hai:
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

**Component structure** — pehle hooks, phir handlers, phir render, har file mein ek consistent order mein:
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

**File organization** — ek shape jispe almost har mid-to-large RN codebase converge karta hai:
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

**Performance checklist** (dus habits hain, dus one-off fixes nahi):
1. Kisi bhi cheez ke liye jo grow kar sakti ho, `FlatList`/`SectionList` use karo — `ScrollView` ke andar kabhi `.map()` mat karo.
2. Genuinely expensive components ko memoize karo (`React.memo`), sab kuch nahi.
3. Memoized children ko pass kiye jaane wale callbacks ke liye `useCallback` use karo.
4. Real computational cost ke liye `useMemo` use karo, trivial expressions ke liye nahi.
5. Hot-path components pe inline style objects avoid karo.
6. Animations ke liye `useNativeDriver: true` (ya Reanimated) use karo.
7. Non-critical work ko `InteractionManager` se defer karo.
8. Har error path handle karo, sirf happy path nahi.
9. Real, lower-end devices pe test karo — simulator performance ke baare mein jhooth bolta hai.
10. "Optimize" karne se pehle actually profiler output dekho — measure karo, guess mat karo.

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

Neeche jo bhi hai woh wo material hai jo 2026 mein kisi bhi serious company ke React Native interview mein eventually aa hi jaayega, aur jo original 30-topic guide (jo "classic bridge" era mein likhi gayi thi) cover nahi karti. Agar Part 1 "kya tum ek screen bana sakte ho" hai, toh Part 2 "kya tumhe waaki mein us platform ki samajh hai jis par tum bana rahe ho" hai.

## 31. Architecture Deep-Dive: Bridge vs. New Architecture (Fabric, TurboModules, JSI)

**Yeh hai kya.** JavaScript actually native code se baat kaise karta hai. Iske ab do generations hain, aur dono ko jaanna — aur yeh samajhna ki *kyun* doosra wala exist karta hai — RN interview mein real depth ka sabse clear signal hai.

**Old Architecture (the "Bridge"), 2015–2024ish:**

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

Bridge ki defining properties yeh hain: har call **asynchronous** hota hai (tum kabhi bhi native se synchronously nahi pooch sakte ki "iss view ka actual on-screen width abhi kya hai"), har call **JSON mein serialize** hota hai (high-frequency calls ke liye real, measurable overhead — socho ek gesture jo 60 times per second fire ho raha ho), aur calls **batched** hote hain (native ek queue of messages ko frame mein ek baar process karta hai, JS ke call karte hi turant nahi).

**New Architecture (default since RN 0.76, GA-stable through 2025), bridge ko replace karta hai in cheezon se:**

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

- **JSI (JavaScript Interface):** ek lightweight C++ layer jo JS objects ko native C++ objects/functions ki *direct references* hold karne deta hai — ab koi JSON round-tripping nahi, aur calls **synchronous** ho sakte hain jab woh sahi choice ho.
- **Fabric:** naya rendering system. Yeh layout/measurement work ko JS thread se hata deta hai aur React ke *concurrent features* (React 18+ se, jaise `useTransition`) ko native views par actually correctly kaam karne deta hai, kyunki ab renderer work ko interrupt/prioritize kar sakta hai — waise hi jaise React DOM hamesha kar sakta tha.
- **TurboModules:** New Architecture ka classic Native Modules ka replacement — modules ab **lazily load** hote hain (sirf tab initialize hote hain jab JS unhe pehli baar actually call kare, iske bajaye ki app ke andar har module launch pe eagerly start ho jaaye, jo old system mein real cold-start cost thi).

**Yeh important kyun hai — the interview-ready version:** "bridge async-only tha aur har cheez JSON-serialize karta tha, jisse native-JS interaction kitna responsive ho sakta hai uski cap lag jaati thi; JSI direct references ke saath usko replace karta hai isliye calls synchronous ho sakti hain, Fabric rendering ko actually interruptible/concurrent hone deta hai, aur TurboModules launch pe sab kuch initialize karne ke bajaye lazy-load karte hain." Yeh ek sentence 90% cover kar deta hai jo actually poochha jaata hai.

**Yahan log aksar gadbad karte hain:** yeh bolna ki "New Architecture ne bridge remove kar diya" jaise ki native code aur JS ab communicate hi nahi karte — woh abhi bhi karte hain, constantly; jo change hua hai woh *mechanism* hai (JSI ki direct references vs bridge ki async JSON queue), yeh nahi ki koi boundary exist hi nahi karti.

---

## 32. The Threading Model

**Yeh hai kya.** Ek React Native app actually (kam se kam) teen alag threads par chal rahi hoti hai, har ek ka apna distinct job hota hai — kaunsa thread kya karta hai yeh samajhna hi "meri animation janky kyun hai" ya "mera app ek second ke liye freeze kyun ho gaya" debug karne ki key hai.

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

**Yeh important kyun hai.** Yahi mental model hai jo pehle se covered almost har RN performance concept ke peeche hai: `useNativeDriver` (Topic 19) isliye exist karta hai taaki animations UI thread par bina JS thread ke free hone par depend kiye chal saken; Reanimated ke "worklets" (Topic 19/20) isliye exist karte hain taaki *tumhara khud ka logic* bhi wahin chal sake; `InteractionManager.runAfterInteractions` (Topic 9) isliye hai taaki ek in-flight native animation ke dauran JS thread free rahe; aur `FlatList` ki virtualization (Topic 13) partly isliye hai taaki Shadow thread ka layout workload bounded rahe.

Jab kuch slow lage tab khud se poochne wala ek useful diagnostic question: **"yahan actual bottleneck kaunsa thread hai?"** Ek stuttering scroll usually JS thread hota hai (har `renderItem` mein bahut zyada kaam) ya Shadow thread (lay out karne ke liye bahut zyada/bahut complex views); ek frozen tap response almost hamesha JS thread ke kisi aur cheez mein busy hone ki wajah se hota hai (koi bada synchronous computation, ek huge `JSON.parse`).

**Yahan log aksar gadbad karte hain:** "mera app slow hai" ko "mera JS slow hai" samajh lena — ek common real bug hai *bahut zyada native views* (ek overly deep, overly nested `View` tree) jo Shadow/UI threads ko overwhelm kar deta hai chahe JS thread khud bahut kam kaam kar raha ho; iska fix view hierarchy ko flatten karna hai, aur JS memoize karna nahi.

---

## 33. Hermes — the JavaScript Engine

**Yeh hai kya.** Hermes Meta ka apna JavaScript engine hai, jo React Native ke liye purpose-built hai, aur RN 0.70+ se dono platforms par **default** engine raha hai. Hermes se pehle, RN JavaScriptCore (JSC) use karta tha — wahi engine jo Safari use karta hai.

**Yeh important kyun hai.** Ek general-purpose JS engine (JSC, V8) *long-running* processes ke liye optimize hota hai, jaise ek browser tab jo kaafi der khula rahta hai aur apne lifetime mein faster hota jaata hai (JIT compilation warm up hoti hai). Mobile app ka shape iske bilkul ulta hai: usko **jitni jaldi ho sake utni jaldi cold-start** karna hota hai, aur ho sakta hai backgrounded/killed hone se pehle sirf ek minute chale. Hermes specifically isi ke liye optimize hai: yeh **tumhare JS ko build time par hi bytecode mein precompile kar deta hai**, toh runtime par yeh sirf bytecode ko directly load aur execute karta hai — user ke phone par har cold start pe ek huge JS file parse aur JIT-compile karne ki zaroorat nahi.

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

Hermes ek chhota memory footprint aur apna **khud ka debugger** (Chrome DevTools / Flipper ke zariye) bhi laata hai, jo purane "Debug JS Remotely" flow ko replace karta hai — woh flow actually tumhara JS Chrome ke V8 engine mein run karta tha, na ki us engine mein jo tumhara app actually use karta hai (jo engine-specific bugs ko hide kar sakta tha).

**Yahan log aksar gadbad karte hain:** yeh assume kar lena ki Hermes tumhare JS logic ko khud per-operation *faster* bana deta hai — iski main win **startup time aur memory** hai, ek tight loop ki raw execution speed nahi (long, hot, CPU-bound JS par V8 ka JIT abhi bhi Hermes ko out-run kar sakta hai). Sahi framing: Hermes kuch peak throughput trade karta hai dramatically better, more predictable cold-start behaviour ke liye — jo ek mobile app ke actual usage pattern ke liye sahi trade hai.

---

## 34. Metro — the Bundler

**Yeh hai kya.** Metro React Native ka apna JavaScript bundler hai (RN ka webpack/Vite ka jawab) — yeh tumhare `import`/`require` graph ko resolve karta hai, Babel ke zariye JSX/TypeScript ko transform karta hai, aur woh single JS bundle (ya, Hermes ke saath, bytecode) produce karta hai jo actually tumhare app mein ship hota hai.

**Yeh important kyun hai.** Metro hi wajah hai ki `npm start -- --reset-cache` sabse pehli cheez hoti hai jo koi bhi suggest karta hai jab RN inexplicably behave kare — Metro fast rebuilds ke liye transformed files ko aggressively cache karta hai, aur woh cache kabhi kabhi stale ho jaata hai jisse genuinely confusing bugs ban jaate hain (ek file ka purana content abhi bhi effect mein dikhna, jabki tumne clearly usko change aur save kiya hai).

```bash
# The single most useful "turn it off and on again" in all of React Native
npm start -- --reset-cache
```

Metro hi hai jo Topic 12 ki `.ios.js`/`.android.js` platform-specific file resolution ko kaam karwaata hai, aur Fast Refresh ko power karta hai (jo purane "Hot Reload" ka modern replacement hai — Fast Refresh ek edit ke across component state preserve karta hai, jabki purana Hot Reload kabhi kabhi nahi karta tha).

**Yahan log aksar gadbad karte hain:** yeh na jaanna ki Metro toolchain ka ek distinct piece hai, aur bundling/build issues ko purely "Xcode" ya "Gradle" ke terms mein describe kar dena — yeh log toh Metro ke banaye hue bundle ko consume karte hain; ek "module not found" ya "unexpected token" error almost hamesha ek Metro/Babel-level problem hota hai, native build problem nahi, aur uska fix (cache clear karna, `metro.config.js` check karna) bilkul alag hai.

---

## 35. Expo vs. Bare React Native

**Yeh hai kya.** RN project start aur manage karne ke do alag tareeke. **Expo** ek toolchain hai aur pre-integrated managed native modules ka set hai (camera, location, notifications, etc.), jo React Native ke upar built hai; "bare" React Native CLI-only (`npx react-native init`) approach hai jahan tum directly native iOS/Android project folders khud own karte ho.

**Yeh important kyun hai.** 2026 tak, **Expo hi default recommendation hai** khud React Native team ki taraf se naye projects ke liye — yeh kuch saal pehle se ek real shift hai jab Expo ko "training-wheels option" samjha jaata tha. Expo ka **EAS Build** (cloud-based native builds — locally Xcode/Android Studio ki zaroorat nahi) aur **Expo Router** (React Navigation ke upar file-based routing) ne isko serious production apps ke liye viable bana diya hai, unme se un apps ke liye bhi jinko custom native code chahiye ("config plugins" aur "prebuild" step ke zariye, bina permanently eject kiye).

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

**Yahan log aksar gadbad karte hain:** Expo ko "sirf beginners ke liye, real apps ko bare RN chahiye" bol dena — yeh saalon pehle ek fair characterization thi (purana "managed workflow" genuinely arbitrary native code include nahi kar sakta tha), lekin modern Expo (SDK 46+'s "prebuild"/continuous native generation model ke baad se) custom native modules support karta hai aur large production apps mein use hota hai. Nuanced, current answer: Expo ab ek superset of capability hai, jiska DX (developer experience) most teams ke liye kaafi better hai; bare RN abhi bhi sense banata hai jab tumhe native build configuration par extremely fine-grained control chahiye ho ya bahut unusual native requirements hon.

---

## 36. TypeScript in React Native

**Yeh hai kya.** RN ke official templates ab saalon se default TypeScript ke saath ship ho rahe hain — plain JavaScript RN projects professional codebases mein increasingly exception ban rahe hain, norm nahi.

**Yeh important kyun hai.** Mobile apps mein kuch classes ke bugs ke liye ek unusually punishing feedback loop hota hai: ek `TypeError: undefined is not an object` production crash (kisi typo'd prop name se, ya ek API response shape jo change ho gayi) fix karne ke liye poora app store release cycle chahiye hota hai agar tumne usko ship karne se pehle catch nahi kiya — yahan "just refresh the page" jaisa kuch nahi hota. Static typing exactly isi category ke bug ko build time par catch karti hai.

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

**Yahan log aksar gadbad karte hain:** ek type error ko silence karne ke liye `any` use kar dena, actual shape ko model karne ke bajaye — isse poora point hi defeat ho jaata hai aur review mein yeh ek real code-smell flag hai. Aur yeh bhi: yeh bhool jaana ki TypeScript types build time par erase ho jaate hain (yeh zero runtime validation dete hain) — agar tumhe kisi real boundary ko cross karne wala data validate karna hai (ek API response, `AsyncStorage` data, deep-link params), toh tumhe apne compile-time types ke saath ek runtime validator (jaise `zod`) bhi chahiye hoga.

---

## 37. Modern State Management (Redux Toolkit, Zustand, TanStack Query)

**Yeh hai kya.** State-management landscape Topic 7 mein jo describe hai usse meaningfully aage badh gaya hai. Ab teen tools real 2026 codebases mein dominate karte hain: **Redux Toolkit** (Redux likhne ka ab-official, boilerplate-free tareeka), **Zustand** (ek minimal, hook-based store jab Redux overkill lage), aur **TanStack Query** (React Query) — jo actually "state management" hai hi nahi, balki ek **server-state cache** hai jo zyada tar manual `useEffect`-based fetching ko obsolete bana deta hai.

**Yeh important kyun hai.** Yahan sabse important idea yeh hai ki **har state ek jaisi state nahi hoti** — aur "mere server se aaya data" ko "yeh modal open hai kya" ke saath conflate karna bahut saari unnecessary complexity le aata hai.

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

**Yahan log aksar gadbad karte hain:** server data store karne ke liye Redux (ya Zustand tak) ka use karna — har API call ke liye manually loading/error/caching/refetch-on-focus manage karna exactly woh boilerplate hai jise delete karne ke liye TanStack Query exist karta hai. Agar poochha jaaye "aaj ek naye app mein state ko kaise architect karoge," toh strong answer yeh hai: server se aane wali har cheez ke liye TanStack Query, aur baaki sab kuch ke liye ek light client-state tool (Zustand, ya bas Context/`useState`) — full Redux ab typically un apps ke liye reserve hota hai jinke paas genuinely complex, deeply cross-cutting client state ho.

---

## 38. Rendering & Reconciliation, Explained Properly

**Yeh hai kya.** React *kya* re-render karta hai aur *kyun* karta hai. Yeh essentially har performance topic (9, 13, 19, 29) ke peeche hai jo pehle se cover ho chuka hai, lekin yeh rarely end-to-end explain hota hai, isliye interviewers isko directly probe karna pasand karte hain.

**Yeh important kyun hai.** React ka rendering do distinct phases mein hota hai, aur inka difference jaanna yeh explain karta hai ki kuch cheezein (`useMemo`) kyun help karti hain aur kuch (`useLayoutEffect`) bilkul alag reason se exist karti hain:

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

**Reconciliation** woh diffing algorithm hai jo React use karta hai yeh decide karne ke liye ki, ek naye element tree ke given, kaunse real native views create, update, ya destroy karne hain — aur `key` (Topic 29 ka pitfall #2) woh ek piece of information hai jo tum React ko dete ho yeh batane ke liye "yeh pehle waala hi same logical item hai, bas possibly move hua hai," versus "yeh ek bilkul different item hai."

**Ek concrete, commonly-asked follow-up: `useEffect` kabhi kabhi visible flicker kyun cause karta hai jo `useLayoutEffect` nahi karta?** `useEffect` commit ke *baad* run hota hai — jab tak yeh chalta hai, screen already paint ho chuki hoti hai; `useLayoutEffect` DOM/native views update hone ke turant baad synchronously run hota hai, screen paint hone **se pehle** — isliye ek measurement-and-adjust pattern (jaise, ek view ka real size measure karke, uske basis par kuch reposition karna) ko `useLayoutEffect` chahiye hota hai taaki wrong position ka one-frame flash avoid ho sake.

**Yahan log aksar gadbad karte hain:** yeh believe karna ki "re-render" ka matlab hai "screen visually flicker/redraw hoti hai" — ek re-render jo *bilkul same* output produce karta hai jo pehle tha, woh zero native-view changes ke saath reconcile ho jaata hai (yahi exactly woh cheez hai jise `React.memo`/`useMemo` redo hone se bachate hain: wasted *render-phase JS work*, zaroori nahi ki wasted native paint bhi ho).

---

## 39. Accessibility (a11y)

**Yeh hai kya.** Apne app ko VoiceOver (iOS) / TalkBack (Android) ke saath usable banana, aur broadly kisi bhi visual, motor, ya cognitive disability wale insaan ke liye. Yeh source guide mein *bilkul bhi* cover nahi kiya gaya, aur yeh ek real engineering responsibility hai, aur kai jurisdictions mein (US mein ADA, EU mein EAA) commercial apps ke liye ek legal requirement bhi hai.

**Yeh important kyun hai.** React Native ke core components native views ko map karte hain specifically *isliye* ki tumhe real, free accessibility support mile (ek native `<Text>` already VoiceOver ke liye readable hai) — lekin sirf tab, jab tum custom/interactive components ko correctly annotate karo, kyunki ek plain `View` jo ek tappable icon ko wrap kar rahi hai, screen reader ke liye bina help ke koi inherent meaning nahi rakhti.

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

**Yahan log aksar gadbad karte hain:** state convey karne ke liye purely color par depend karna (form field par red vs green border) — screen reader users aur colorblind users dono hi yeh signal miss kar dete hain; hamesha color ko ek icon, text, ya ek explicit `accessibilityLabel` ke saath pair karo. Aur yeh bhi: ek icon-only button jiske paas koi `accessibilityLabel` nahi hai, screen reader user ke liye functionally invisible hai — yeh sirf "button" announce karta hai, bina yeh bataye ki yeh karta kya hai.

---

## 40. Internationalization (i18n) & Localization

**Yeh hai kya.** Multiple languages/locales support karna — text translation (`i18next`/`react-i18next` ya `expo-localization` + `i18n-js`), lekin saath hi number/date/currency formatting bhi, aur Arabic aur Hebrew jaisi languages ke liye **RTL (right-to-left) layout** bhi.

**Yeh important kyun hai.** RTL support woh cheez hai jise log sabse zyada completely bhool jaate hain — yeh sirf "text direction flip karo" nahi hai, yeh poori layout flip karna hai (ek back arrow jo left point kar raha tha, ab right point karna chahiye; ek `flexDirection: 'row'` layout ka visual start/end reverse ho jaata hai).

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

**Yahan log aksar gadbad karte hain:** user-facing strings ko directly JSX mein hardcode kar dena ("Add to Cart") iske bajaye ki day one se sab kuch ek translation function ke through route kiya jaaye — sainkdo hardcoded strings jo poore codebase mein scattered hain, un par baad mein i18n retrofit karna ek genuinely large, tedious migration hai jo shuru mein hi avoid karna kaafi cheap padta hai.

---

## 41. Deep Linking & Universal Links

**Yeh hai kya.** Kisi external URL (`myapp://product/42`, ya ek real `https://myapp.com/product/42` **Universal Link**/**App Link**) ko apne app ko directly ek specific screen par sahi data ke saath open karne dena — yeh push notifications, marketing emails, aur QR codes ke liye essential hai.

**Yeh important kyun hai.** Yahin par React Navigation ka `linking` config URL patterns ko tumhare actual screen/params structure se connect karta hai — isko galat karo toh ek marketing campaign ka link ya toh app ko open hi nahi karega, ya galat screen par open kar dega.

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

**Yahan log aksar gadbad karte hain:** custom URL schemes (`myapp://...`) har jagah kaam karte hain lekin untrustworthy feel karte hain aur koi doosra app wahi scheme register karke inko hijack kar sakta hai; **Universal Links (iOS)/App Links (Android)** real `https://` URLs use karte hain jo tumhare khud ke domain par hosted ek file ke zariye validate hote hain (`apple-app-site-association` / `assetlinks.json`) — zyada setup, lekin agar app installed nahi hai toh yeh gracefully ek web page pe degrade ho jaate hain, aur koi doosra app inko spoof nahi kar sakta. Production apps ko dono use karne chahiye: primary ke taur par real domain-verified links, aur internal/testing fallback ke taur par custom scheme.

---

## 42. Over-the-Air Updates (CodePush / EAS Update) & Their Limits

**Yeh hai kya.** Users ko ek **JS-only** update ship karna App Store/Play Store review ke **bina** — `react-native-code-push` (historically Microsoft ka) ya, increasingly, **Expo ka EAS Update**.

**Yeh important kyun hai — aur woh limit jo actual interview point hai.** OTA updates sirf tumhare **JavaScript bundle aur assets** mein changes ship kar sakte hain — jo bhi cheez native code change maangti hai (ek naya native module add karna, khud RN version upgrade karna, `Info.plist`/`AndroidManifest.xml` mein koi native permission string change karna) woh isse **nahi** ja sakti aur usko abhi bhi ek full store review cycle chahiye. Yahi exactly wajah hai ki "bas OTA kar do" app store review se ek universal escape hatch nahi hai — real companies mein kaafi saare "critical hotfix" postmortems actually isi exact limitation ko misunderstand karne ke baare mein hote hain.

```jsx
// Conceptually — check for and apply a JS-only update on launch
import codePush from 'react-native-code-push';

codePush.sync({
  updateDialog: false,
  installMode: codePush.InstallMode.ON_NEXT_RESTART
});
```

**Yahan log aksar gadbad karte hain:** OTA updates ka use un changes ko chupke se sneak karne ke liye karna jinke liye Apple ki review guidelines actually re-review maangti hain (yeh App Store policy ke against hai aur ek real risk hai account-level suspension ka, sirf ek rejected build nahi) — OTA bug fixes aur JS-only feature adjustments ke liye meant hai, substantive functionality changes ke liye review bypass karne ka tareeka nahi.

---

## 43. CI/CD & Release Automation

**Yeh hai kya.** Build, test, aur release-to-store ko automate karna, Topic 28 ke manual Xcode/Gradle commands ke bajaye. **Fastlane** long-standing standard hai (kisi bhi RN setup ke saath kaam karta hai); **EAS Build/Submit** Expo ka managed cloud equivalent hai; GitHub Actions/Bitrise/CircleCI typically in dono mein se kisi ek ko orchestrate karte hain.

**Yeh important kyun hai.** Manual release process (Topic 28) mein ek chhoti si, expensive mistake karne ki bahut saari jagah hoti hai (wrong provisioning profile, `versionCode` bump karna bhool jaana, galat keystore se sign karna) — isko automate karna "raat ke 11 baje hain aur release toota hua hai" jaise incidents ki puri category ko hata deta hai.

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

**Yahan log aksar gadbad karte hain:** CI/CD ko "nice to have" polish samajh lena core infrastructure ke bajaye — ek ya do se zyada logon ki team ke liye, manual releases sirf mistakes ka risk nahi rakhte, yeh ek bus-factor-of-one problem bhi create karte hain (sirf woh insaan jo exact manual steps jaanta hai release ship kar sakta hai).

---

## 44. Structuring a Large-Scale App

**Yeh hai kya.** Topic 30 ka neat `src/components, src/screens, ...` layout actually kaise hold up karta hai (ya nahi karta) jab ek app ke paas 50+ screens ho jaayein aur multiple teams usme kaam kar rahi hon.

**Yeh important kyun hai.** Ek purely **type-based** structure (`components/`, `screens/`, `services/` top-level folders ke taur par) ek point tak toh theek scale karta hai, phir ek navigation nightmare ban jaata hai — "checkout" se related sab kuch dhoondhne ke liye tumhe paanch alag-alag top-level folders ke beech jump karna padta hai. Zyadatar large RN codebases eventually iske bajaye ek **feature-based** (a.k.a. "module-based" ya "vertical slice") structure mein move ho jaate hain:

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

Ek feature ko jo bhi chahiye woh sab saath mein rehta hai; `index.ts` waala "public API" convention features ko chupke se ek doosre ke internals mein pahunchne se rokta hai (jo eventually ek codebase ko ek untestable, un-refactorable ball of mud bana deta hai). Large organizations jo *multiple* RN apps banati hain jo code share karti hain, woh often ek step aage jaake **monorepo** (Nx ya Turborepo) mein chali jaati hain, jisme ek shared design-system package, ek shared API-client package, aur har app apna khud ka workspace hota hai.

**Yahan log aksar gadbad karte hain:** ek brand-new, chhote app ke day one par hi isko over-engineer kar dena — feature-based structure aur monorepo *scale* problems ke solutions hain; inko premature adopt karna ek 5-screen MVP par abhi ke liye koi benefit ke bina real overhead (zyada config, zyada indirection) add kar deta hai. Senior-engineer wala answer almost hamesha "simple se start karo, restructure tab karo jab current structure ka pain actually feel ho" hota hai — "hamesha sabse fanciest architecture use karo" nahi.

---
# PART 3 — INTERVIEW PREP

## Interview Tips & Red Flags

**Answer karte waqt yeh dhyaan mein rakho:**
1. **Question ko samjho** — guess mat maro ki kya poocha ja raha hai, clarifying questions poocho.
2. **Context do** — apna reasoning explain karo, sirf final answer mat bolo.
3. **Code dikhao** — ek real (rough hi sahi) code sketch, purely verbal description se hamesha better hota hai.
4. **Trade-offs discuss karo** — is guide mein har choice (Redux vs. Context, FlatList vs. ScrollView, Expo vs. bare) ka ek real trade-off hai; usko naam se bolna sirf recall nahi, judgment dikhata hai.
5. **Real experience laao** — "yeh dekho, aisa hi ek bug maine actually hit kiya tha" ek textbook-perfect answer se zyada valuable hai jisme koi scar tissue na ho.

**Interviewer ke common follow-ups jo woh aksar poochta hai:**
- "Platform differences kaise handle karte ho?"
- "Performance kaise optimize karte ho?"
- "Kaunse security measures implement karte ho?"
- "Isko test kaise karte ho?"
- "Issues debug kaise karte ho?"
- "New Architecture ke under yeh kaise compare hota hai?" *(2025/2026 tak yeh increasingly common ho gaya hai — Topic 31 dekho)*

**Red flags jinse bachna hai:**
- Bridge/JSI architecture bilkul bhi na samajhna (Topic 31/32).
- Platform-specific concerns ignore karna (Topic 12).
- Poor ya absent error handling (Topic 18).
- Un-cleaned-up subscriptions se memory leaks (Topics 8, 23, 27).
- Performance blind spots (Topic 9, 13, 38).
- Security vulnerabilities — especially JS bundle mein ship hue secrets, ya unencrypted sensitive local storage (Topic 26).
- State management ke baare mein baat karna without koi mental model ki tum *kis type* ka state manage kar rahe ho (Topic 37).

## Curveball Follow-Up Questions (with answer sketches)

Yeh woh "arre, yeh toh socha hi nahi tha" wale questions hain jo ek good interview ko ek great interview se alag karte hain.

**"Mujhe thread by thread walk through karo ki kya hota hai jab user ek button tap karta hai jo ek `Animated.View` ke andar hai."**
> Touch UI thread pe detect hota hai → agar yeh native-driven animation hai, toh native isko directly handle karta hai; nahi toh event JS thread pe cross karta hai → tumhara `onPress` handler run hota hai, potentially `setState` call karta hai → React re-render karta hai (render phase, JS thread) → Fabric/bridge naya native view tree commit karta hai (commit phase) → Shadow thread koi bhi changed layout recompute karta hai → UI thread paint karta hai. (Yeh Topics 19, 32, 38 ko ek saath jodta hai — ek bahut hi accha single question hai jise loud bol ke rehearse karna chahiye.)

**"Tumhara app dev mein toh fine chalta hai lekin sirf release build mein crash hota hai. Aisa kyun ho sakta hai, aur tum isko debug kaise karoge?"**
> `__DEV__`-gated code paths alag hote hain; dev mein Hermes bytecode vs. JSC; minification/dead-code-elimination ek aisa bug expose kar sakti hai jo kisi unminified string pe ya kisi stripped-out dev-only warning pe depend karta tha; ek missing symbol/source map ke bina release crash log unreadable ho jaata hai — usko readable banane ke liye `hermesc` ke source-map tooling ki zaroorat padti hai. Answer: locally ek *release* build ke saath reproduce karo, correct source maps se crash ko symbolicate karo, check karo ki koi `__DEV__`-only code toh nahi jo release path skip kar raha hai.

**"Tum ek app ko fully offline kaise kaam karwaoge, including woh writes jo offline hote waqt hui ho?"**
> Ek local-first data layer (SQLite/Realm/WatermelonDB) as source of truth, offline hote waqt hue pending writes ke liye ek sync queue, connectivity changes detect karne ke liye `NetInfo`, aur ek conflict-resolution strategy (last-write-wins, ya ek proper CRDT/operational-transform approach) us case ke liye jab locally-queued write ka conflict server-side change se ho jaaye jo meanwhile ho chuka ho.

**"Identical specs wale do devices pe animation performance alag kyun dikh sakti hai?"**
> Alag GPU/CPU thermal throttling behavior, background OS load, kya app ki view hierarchy us device ke compositor pe zyada/kam native view overdraw trigger karti hai, aur (Android specifically) vendor-skin differences ki OS kitni aggressively background/foreground process priority manage karta hai.

**"Aaj ke time pe tum deliberately OLD architecture (bridge) ko New Architecture ke upar kab choose karoge?"**
> Rarely, lekin: jab koi specific third-party native module abhi tak New Architecture ke interop layer ko support karne ke liye migrate nahi hua ho, aur koi maintained fork bhi exist na kare. New Architecture mein ek interop layer specifically legacy modules run karne ke liye hi hai, toh yeh increasingly ek non-issue hai, lekin yeh pata hona ki yeh *ho sakta hai*, real-world awareness dikhata hai, sirf spec-sheet knowledge nahi.

## Bonus Q&A: FlatList, Push Notifications & Deep Linking in Production

Paanch specific questions jinka crisp answer, back to back dena worth hai — yeh exact combination (ek optimized list, jo ek push notification se drive hoti hai, jo deep-link karke sahi item pe le jaati hai) React Native interview mein sabse common "mujhe ek real feature build karke dikhao" waale system-design-style prompts mein se ek hai.

### 1. What is the difference between `FlatList` and `ScrollView`?

Short, interview-ready answer (full depth **Topic 13** mein hai): `ScrollView` **har** child ko immediately render karta hai, ek saath, aur unhe tab tak mounted rakhta hai jab tak `ScrollView` khud exist karta hai. `FlatList` **virtualize** karta hai — yeh sirf visible viewport ke paas wali rows ko mount karta hai (plus ek chhota sa buffer) aur user ke scroll karte waqt rows ko mount/unmount karta rehta hai, bilkul waise hi jaise `RecyclerView` (Android) ya `UITableView` (iOS) natively kaam karte hain.

```
ScrollView: mounts ALL rows, forever         FlatList: mounts only NEAR-viewport rows
[Row 1]  ◄ mounted                           [Row 41] ◄ mounted (visible)
[Row 2]  ◄ mounted                           [Row 42] ◄ mounted (visible)
  ...    ◄ mounted                           [Row 43] ◄ mounted (visible)
[Row 999]◄ mounted (!) — memory grows        [Row 44] NOT mounted yet — recycled in/out
                                              as the user scrolls
```

**Rule of thumb:** agar list ka size small, fixed, aur known hai (ek settings screen with 6 rows) — `ScrollView` simpler hai aur fine hai. Agar yeh ek feed hai, search-results list hai, chat log hai, ya kuch bhi jo ~20-30 items se zyada grow ho sakta hai — `FlatList` (ya grouped data ke liye `SectionList`), no exceptions.

### 2. How do you optimize `FlatList` performance?

Full list **Topic 9** mein hai, lekin ready rakhne layak answer, priority order mein:

1. **`keyExtractor`** jo ek stable, unique ID return kare (kabhi bhi array index nahi — Topic 29).
2. **`getItemLayout`** agar har row ki height fixed hai — isse `FlatList` rows ko measure karne ka kaam entirely skip kar sakta hai aur directly kisi bhi offset pe jump kar sakta hai (yeh critical hai taaki `scrollToIndex` instantly kaam kare).
3. **`renderItem`'s component ko `React.memo` se memoize karo**, aur usme jo bhi callback pass karte ho usko `useCallback` se memoize karo — nahi toh har parent re-render pe har row re-render hoga, virtualization ho ya na ho.
4. **Apne data ke hisaab se batching props tune karo:** `initialNumToRender` (pehle paint pe kitni rows render karni hain), `maxToRenderPerBatch` aur `updateCellsBatchingPeriod` (scroll-triggered batch mein kitna kaam hota hai), `windowSize` (viewport ke upar/neeche kitni "screens" worth content mounted rakhna hai).
5. **Android pe `removeClippedSubviews={true}`** — off-screen native views ko sirf hide nahi, entirely detach kar deta hai (Android pe bigger win hai; iOS ka UIKit already isme se zyada khud handle kar leta hai).
6. Har row ke apne render ko **cheap** rakho — `renderItem` ke andar koi inline function/object literals nahi, koi expensive computation nahi jo memoized na ho; ek slow `renderItem` hi sabse common cause hai ek "tuned" `FlatList` ke phir bhi stutter karne ka.

### 3. What is Firebase push notification, and how does it work in React Native?

**Firebase Cloud Messaging (FCM)** Google ki cross-platform push delivery service hai; `@react-native-firebase/messaging` woh RN library hai jo usse baat karti hai (aur, transparently, iOS pe Apple ke APNs se bhi — FCM waha APNs ko replace nahi karta, uske through relay karta hai). Full code **Topic 24** mein hai; yeh raha actual round trip:

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

Device pehle apna unique FCM token lene ke liye `messaging().getToken()` call karta hai aur woh token tumhare backend ko bhej deta hai — jab tumhara server push bhejta hai toh woh token target karta hai (user ki identity nahi). Permission maangna (`messaging().requestPermission()`) iOS pe mandatory hai, uske bina koi bhi notification show hi nahi ho sakti.

### 4. What is deep linking in React Native?

Deep linking iska matlab hai ki ek URL (`myapp://order/42`, ya ek real `https://myapp.com/order/42` **Universal/App Link**) tumhare app ko directly ek specific screen pe open kar de, right params ke saath already loaded — sirf app ko uske default home screen pe kholne ke bajaye. Full setup **Topic 41** mein hai — essential piece hai React Navigation ka `linking` config, jo URL patterns ko directly tumhare screen names aur route params pe map karta hai:

```jsx
const linking = {
  prefixes: ['myapp://', 'https://myapp.com'],
  config: { screens: { Home: 'home', OrderDetails: 'order/:orderId' } }
};
```

Ek `https://` Universal/App Link, ek bare custom scheme ke upar production-grade choice hoti hai: yeh domain-verified hoti hai (ek file ke through jo tum `/.well-known/apple-app-site-association` ya `assetlinks.json` pe host karte ho), koi doosra app same scheme register karke isko hijack nahi kar sakta, aur agar app installed nahi hai toh yeh gracefully ek real web page pe degrade ho jaati hai.

### 5. How would you implement all three together in a production-level app?

Yahi woh question hai jo actually poocha ja raha hota hai jab interviewer 1–4 ko string karta hai: **ek notifications feed screen build karo** jaha ek push tap karne pe user directly ek optimized list ke right item pe pahunch jaaye. Yeh raha shape jo ek real implementation leta hai:

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

**Production-level details jo isko ek demo se alag karte hain:** Topic 24 waale teeno app states handle karo (foreground/background/killed) kyunki killed-state tap hi woh cheez hai jise log test karna bhool jaate hain; live push aane pe apne `FlatList` ke data source ko invalidate/refetch karo instead of naye item ko haath se local state mein splice karne ki koshish karne ke (simpler hai, aur correctness bhi preserve karta hai); `getItemLayout` specifically use karo taaki `scrollToIndex`/`scrollToItem` (zaroori hai agar deep link ko user ko kisi specific row pe scrolled le jaana ho, sirf list ke top pe nahi) instantly kaam kare rows ko pehle measure kiye bina; aur background handler ko module scope pe register karo (kisi bhi component mount hone se pehle), kyunki OS isko bina ek full app launch ke bhi invoke kar sakta hai.

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

Agar tum is guide ko sirf ek baar padhne ke bajaye prepare karne ke liye use kar rahe ho, toh yeh raha ek reasonable order:

- **Week 1 — Foundations:** Topics 1–8. Ek chhota sa app end-to-end build karo (ek list, ek detail screen, ek form, ek API call) taaki har concept ka ek jagah ho jaha woh rehta hai.
- **Week 2 — Performance & internals:** Topics 9–13, 31–34, 38. Yahi woh jagah hai jaha "mujhe app build karna aata hai" "mujhe platform samajh aata hai" mein badalta hai.
- **Week 3 — Device capabilities & reliability:** Topics 14–26, 39–41. Apne practice app mein camera/location/notifications/storage add karo; ek Error Boundary aur real tests bhi add karo.
- **Week 4 — Shipping & interview polish:** Topics 27–30, 42–44, aur yeh Part 3. Ek real production-style build karo (signed, ek actual device pe, sirf simulator pe nahi), fir upar wale curveball questions ko loud bol ke rehearse karo.

---

*Source note for Parts 1–3: "Complete React Native Interview Questions & Answers Guide" (62-page PDF, shared via LinkedIn, dated August 2026) — Part 1 topics and code samples drawn from that document. Part 2, Part 3, all "Why it matters"/"Where people get burned" framing, and all diagrams are additions.*

---

# PART 4 — DART CRASH COURSE FOR JAVASCRIPT DEVELOPERS

Tumhe React Native se already JavaScript aati hai. Dart, JS/TypeScript ke kaafi kareeb hai, isliye yeh padhne mein sirf 30 minute lagenge, hafte nahi — yahan goal tumhe programming sikhana *nahi* hai, balki jo tumhe pehle se aata hai usko Dart ke syntax mein aur uske ek genuinely naye idea (sound null safety) mein translate karna hai. Jo bhi cheez already obvious lage usko skip kar do; jahan **⚠ different from JS** likha ho wahan dhyan se padho.

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

Dekho, JS mein tum `let`/`const` use karte ho, Dart mein `var`/`final`/`const` — teeno ka matlab thoda alag hai. `var` bilkul JS ke `let` jaisa hai — type infer ho jaata hai, but value badal sakti hai. `final` thoda `const` jaisa lagta hai kyunki ek baar set hone ke baad us binding ko dobara assign nahi kar sakte, lekin yeh JS ke `const` se zyada relaxed hai — value runtime pe decide ho sakti hai. `const` Dart mein sabse strict hai: yeh compile-time constant hona chahiye, matlab value ko Dart compiler ko compile karte waqt hi pata hona chahiye.

Number wala part bhi note karo — JS mein sirf ek `number` type hota hai jo integers aur decimals dono handle karta hai, lekin Dart mein do alag types hain: `int` (whole numbers) aur `double` (decimals). Aur Dart ke saare built-in types capitalized hote hain — `String`, `int`, `bool` — yeh ek chhoti si cheez hai jo shuru mein thoda ajeeb lagegi lekin jaldi aadat pad jaayegi. String interpolation bhi same concept hai jaise JS ke template literals, bas syntax thoda alag — `$name` seedha kaam karta hai simple variables ke liye, aur `${expr}` complex expressions ke liye, backticks ki jagah single quotes use hote hain.

## ⚠ Null Safety — the one genuinely new idea

Yeh Dart ka JS se sabse bada departure hai, aur koi bhi real Flutter code likhne se pehle isse comfortable hona sabse zaroori cheez hai. JS mein, **koi bhi** variable kabhi bhi `null`/`undefined` ho sakta hai, aur compiler tumhe kabhi nahi rokta usko use karne se — isi wajah se `Cannot read property 'x' of undefined` wala error hamesha aata rehta hai. Dart ka type system nullability ko **compile time pe hi** track karta hai:

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

**Yeh important kyun hai:** RN/JS mein jo bahut saare runtime crashes hote hain (`undefined is not an object`), woh Dart mein simply **compile hi nahi honge** — compiler unhe pakad leta hai app run hone se pehle hi. Yeh genuinely Flutter ke sabse bade advantages mein se ek hai RN/JS ke muqable, aur isse shuru mein hi apna lena worth hai, iske against fight karne ki bajaye.

Basically socho aise: `String` type ka matlab hai "yeh variable HAMESHA ek real value hold karega, guarantee hai." `String?` ka matlab hai "yeh variable value hold kar sakta hai YA null ho sakta hai." Jab bhi tum `String?` type ki cheez use karna chahoge, Dart compiler force karega ki pehle check karo ki woh null toh nahi hai — warna code compile hi nahi hoga. Isse compare karo `nickname?.length` (agar null hai toh silently null return karta hai, crash nahi), `nickname!.length` (tum compiler ko bol rahe ho "trust me, yeh null nahi hai" — agar galat nikla toh runtime pe crash hoga), aur `nickname ?? 'Guest'` (bilkul JS ke `??` operator jaisa — agar left side null hai toh right side wali default value use karo).

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

Function declarations Dart mein TypeScript se kaafi milte-julte hain — return type pehle aata hai, phir function name, phir parameters apne types ke saath. Single-expression functions ke liye arrow syntax (`=>`) bhi hai, bilkul JS ke arrow functions jaisa concept, bas iska matlab hai "iska body ek hi expression hai, jo return ho jaayega."

Ab dhyan se padho yeh wala part, kyunki yeh **⚠ different from JS** hai: named parameters ke liye Dart mein curly braces `{}` use hote hain function definition mein. Isका matlab hai ki caller ko parameter ka naam bhi specify karna padta hai jab call kar rahe ho (jaise `greet(name: 'Ali')`), JS ke positional arguments ki tarah nahi jahan order matter karta hai. Yeh pattern itna important hai ki isse yaad rakhna zaroori hai — kyunki **yehi exact tareeka hai jisse Flutter ke saare widgets apne props lete hain** (Part 5 mein detail mein aayega). `required` keyword bata deta hai ki woh named parameter mandatory hai, aur agar tum default value de do (jaise `int age = 18`) toh woh automatically optional ban jaata hai.

Iske alawa square brackets `[]` optional *positional* parameters ke liye use hote hain — matlab tum unhe order mein pass karte ho (named parameters ki tarah naam ke saath nahi), lekin woh optional hote hain.

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

Dart ki classes shape mein JS/TS classes se kaafi similar hain — properties declare karo, methods likho. Lekin constructor likhne ka tareeka thoda different hai. Dekho `Person(this.name, this.age);` wali line — yeh ek "constructor shorthand" hai, jahan `this.name` aur `this.age` seedhe constructor parameters ko class ke properties mein assign kar dete hain, ek line mein. Aur object create karte waqt `new` keyword ki zaroorat nahi hai (optional hai, purane JS ke `new Person()` ke ulta jahan yeh mandatory tha).

Ab ek naya concept jo JS mein exist hi nahi karta: **named constructors**. Ek hi class ke multiple "banane ke tareeke" ho sakte hain — jaise `Circle(radius)` normal constructor hai, aur `Circle.unitCircle()` ek alag named constructor hai jo hamesha radius 1.0 ke saath circle banayega. Isko `ClassName.constructorName()` syntax se define karte hain. Yeh pattern Flutter widget code mein CONSTANTLY use hota hai.

Sabse important cheez jo yahan note karni hai: `UserCard` wala example dekho — `const UserCard({required this.name, required this.age})`. Yeh exact pattern hai jo **har single Flutter widget** jo tum likhoge use karega: named + required parameters constructor mein, curly braces ke saath. Aur `const` keyword ke saath constructor mark karna Flutter mein performance optimization ke liye hota hai — is baare mein aage detail mein baat hogi.

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

Dart ka `List<String>` bilkul JS ke array jaisa hai, bas type-annotated — matlab tum specify karte ho ki list ke andar kis type ki cheezein rahengi. `.add()`, `.map()` jaisi familiar methods yahan bhi hain, lekin ek chhota difference: `.map()` ke baad `.toList()` call karna padta hai, kyunki Dart ke collections by default "lazy iterables" hote hain — matlab `.map()` turant ek nayi list nahi banata, balki ek "iterable" return karta hai jo tab tak compute nahi hota jab tak tum usko actually consume (jaise `.toList()` se) nahi karte.

`Map<String, int>` JS ke plain object (dictionary ki tarah use hone wala) ya JS ke `Map` jaisa hai — key-value pairs store karta hai. Square bracket syntax se access aur assign dono kaam karte hain, bilkul JS jaisa. `Set<String>` bhi same idea hai jaise JS ka `Set` — unique values ka collection.

Spread operator (`...`) bhi same concept hai jaise JS mein — ek list ke elements ko doosri list mein "spread" kar dena.

Ab ek genuinely naya idea, jiska **JS mein koi equivalent nahi hai**: tum collection literal (list/map/set banate waqt) ke andar hi `if` aur `for` use kar sakte ho! Jaise upar wale example mein, list ke andar ek `if (showExtra) 'Conditionally here'` daal diya — matlab agar `showExtra` true hai tabhi yeh element list mein add hoga. Aur `for (var n in names) 'Name: $n'` — yeh names list ke har element ke liye ek naya string generate karke list mein daal dega. Yeh syntax abhi ajeeb lag sakta hai, lekin Flutter ke widget-building code mein isse **constantly** use kiya jaata hai — jaise conditionally kisi widget ko dikhana ya ek list se widgets generate karna.

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

Yahan achhi khabar hai: `Future<T>` bilkul JS ke `Promise<T>` jaisa hai, aur `async`/`await` keywords bhi identical hain — koi naya syntax seekhna hi nahi padega yahan. Try/catch bhi wahi tareeke se kaam karta hai errors handle karne ke liye. Isliye JS ke async code se aane wala pattern-recognition seedha yahan transfer ho jaata hai.

Ab ek naya concept: `Stream<T>`. Isko samajhne ka sabse aasan tareeka hai — ek `Future` sirf **ek baar** resolve hota hai (ek value deke khatam), lekin `Stream` **baar-baar, time ke saath** values emit kar sakta hai — jaise ek websocket connection, ek location watcher, ya ek counter jo har second update ho raha ho. Yeh bilkul RN ke event-emitter-style APIs jaisa concept hai (jaise `Geolocation.watchPosition` ya `Keyboard.addListener`), bas Dart mein yeh language ke andar hi built-in hai.

`async*` (star ke saath) function ko ek "generator function" bana deta hai jo `Stream` return karta hai, aur `yield` keyword se andar se values "emit" ki jaati hain — bilkul JS ke generator functions ke `yield` jaisa concept. Stream ko consume karne ke liye `.listen()` method use hota hai, jo callback function ko har naye emitted value ke saath call karta hai.

Table mein dekho — `Promise.all([...])` ka Dart equivalent hai `Future.wait([...])`, jo multiple Futures ko parallel mein wait karta hai aur sab complete hone ka wait karta hai.

## The "Everything Is a Widget" Mental Model

Yeh RN se aane wale logon ke liye sabse bada conceptual shift hai, aur Part 5 shuru karne se pehle isko clearly samajh lena zaroori hai: React Native mein, **components aise functions hote hain jo JSX return karte hain jo views describe karta hai**. Flutter mein, **koi alag "markup language" exist hi nahi karti** — ek `Column`, ek `Padding`, ek `Text`, yahan tak ki invisible layout concepts bhi, sab sirf Dart **classes** hain, aur tumhara UI ek plain Dart object tree hai jo constructor calls ko nest karke banaya jaata hai:

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

Yahan koi JSX-to-JS compilation step nahi hai, koi alag template syntax seekhne ki zaroorat nahi hai — yeh Dart hai, poori tarah se, ekdum neeche tak. Part 5, Topic F3 isko poori depth mein cover karta hai.

---
# PART 5 — FLUTTER: THE COMPLETE FIELD GUIDE

Same structure jo Part 1 mein thi, same depth ke saath, bas ab Flutter ke liye — aur kyunki tum React Native se aa rahe ho, har topic RN comparison se hi shuru hoga.

## F1. What Is Flutter?

**Yeh hai kya.** Flutter Google ka cross-platform UI toolkit hai. React Native ki tarah, tum ek Dart codebase likhte ho aur iOS aur Android pe ship karte ho (aur web, desktop, embedded bhi — Flutter ka reach RN se zyada wide hai). React Native se **alag** yeh hai ki Flutter real native views render karta hi nahi hai — yeh har ek pixel khud draw karta hai, apne khud ke 2D rendering engine (Skia, jise recent Flutter versions mein newer Impeller replace kar raha hai) ki madad se.

**Yeh important kyun hai — yeh RN se sabse bada conceptual difference hai.** RN ka pura architecture (Part 1/Topic 1, Topic 31) isi liye exist karta hai ki JS ko *real* native `UIView`/`android.view.View` objects se bridge kar sake. Flutter yeh problem hi skip kar deta hai kyunki woh native views ko apna rendering target banata hi nahi — yeh buttons, text, scrollbars, sab kuch, ek blank canvas pe paint karta hai jo OS usko deta hai. Isi wajah se Flutter app purane aur naye phone pe, iOS aur Android pe, pixel-identical dikhta hai (kuch reinterpret karne ki zaroorat hi nahi), aur isi wajah se Flutter mein RN ka "bridge" concept, "New Architecture," ya `NativeModules` nahi hota — bridge karne ke liye view layer hi nahi hai shuru se.

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

**Advantages:** devices/OS versions ke across pixel-perfect consistency, generally bahut hi accha raw rendering performance (koi bridge cross nahi karna padta), genuinely polished tooling story (hot reload *bohot* fast hai, DevTools bhi strong hain), aur ek codebase se mobile + web + desktop tak pahunchna.

**Limitations:** kyunki Flutter native widgets use nahi karta, isko har platform convention khud se *re-implement* karna padta hai (iOS-style scroll physics, native text selection handles, waghera) — usually accha hi hota hai, lekin yeh RN ke "bas real native component use kar lo" wale approach se different kism ka kaam hai. App size bhi ek comparable RN app se thoda zyada hone ki tendency rakhta hai (pura rendering engine tumhare binary mein ship hota hai). Aur tumhari team ko Dart chahiye hoga, jo ek real adoption wali language hai Flutter ke bahar bhi, lekin JavaScript jitni ubiquitous kahin nahi hai.

**Yahan log aksar gadbad karte hain:** yeh kehna ki "Flutter basically React Native hai bas Dart ke saath" actual architectural difference ko undersell kar deta hai — RN ka core value proposition hai "tumhari UI hi REAL native UI hai"; Flutter ka hai "tumhari UI har jagah identical hai kyunki kuch bhi native nahi hai." Dono valid, alag bets hain — pata hona chahiye tumse kaunsa pucha ja raha hai.

---

## F2. Flutter vs. React Native

**Yeh hai kya.** Ek direct, practical comparison — woh table jo har "why did you pick X" wala interview question actually pucha jaa raha hota hai.

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

**Component-to-widget mapping** — yeh woh cheat sheet hai jo tum pehle mahine mein baar-baar reach karoge:

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

**Yahan log aksar gadbad karte hain:** isko "kaunsa objectively better hai" ki tarah treat karna — yeh ek real, defensible trade-off hai. RN ka pitch hai apni web React team ke saath code-sharing aur true native UI; Flutter ka pitch hai rendering consistency aur ek single toolchain jo aur aage tak pahunchta hai (web/desktop) kam platform-specific jhanjhat ke saath. Ek acha answer actual team/project ke liye actual trade-off naam leta hai, koi universal winner nahi.

---

## F3. Core Widgets

**Yeh hai kya.** Flutter ka RN ke Core Components (Part 1/Topic 3) wala equivalent — bas, Part 4 ke closing note ke hisaab se, yeh "JSX render karne wale components" nahi hain, yeh plain Dart **classes** hain jinko tum ek dusre ke constructors ke andar nest karte ho. Do foundational widget types jinko tum baar-baar extend karoge:

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

**The widget tree**, RN ke Topic 3 wale component hierarchy ko mirror karta hua:
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

**Essential widgets, jo tumhe pehle se pata hai usse map karke:**

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

**Yahan log aksar gadbad karte hain:** un widgets pe `const` lagana bhool jaate hain jo kabhi change nahi hote (`const Text('Hello')`) — yeh sirf style ki baat nahi hai, yeh Flutter ke liye ek real performance signal hai ki yeh widget subtree rebuild pe pura skip kiya ja sakta hai (F9 mein iski depth se coverage hai; iska direct RN equivalent nahi hai kyunki JS mein compile-time constant widgets hote hi nahi). Aur ek cheez: ek `StatefulWidget` ka `build()` method kayi baar call ho sakta hai, lekin uska `State` object (aur isliye uske instance fields) un calls ke across persist karta hai — yeh persistence hi *woh jagah* hai jahan tumhara state actually rehta hai, widget mein nahi, jo har rebuild pe thrown away hokar recreate ho jaata hai.

---

## F4. Styling in Flutter

**Yeh hai kya.** Yahan `StyleSheet.create()` jaisa kuch nahi hai — Flutter mein, **styling widgets HI widget tree hain**. `Padding`, `Center`, `Container`, `DecoratedBox` yeh sab real widgets hain jinke andar tum dusre widgets ko wrap karte ho, aur text/shape styling style *objects* (`TextStyle`, `BoxDecoration`) ke through hoti hai jo parameters ki tarah pass kiye jaate hain.

**Yeh important kyun hai.** RN/CSS-flavored styling se aane wale almost sabko yeh shuru mein confuse karta hai — "mera stylesheet kahan hai?" Honest answer: tumhari **widget composition** hi tumhara stylesheet hai. Ek `Text` ko `Padding` mein wrap karna, phir `Center` mein, phir `BoxDecoration` wale `Container` mein — yeh RN mein chaar alag CSS-jaisi properties apply karne ka direct equivalent hai — bas fark itna hai ki har ek apna khud ka explicit, nestable widget hai.

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

**Flexbox — Column/Row RN ke Flexbox concepts (Topic 4) pe directly map hote hain**, bas strings ki jagah Dart enum names ke saath:
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

**Text styling** — RN ke scattered `fontSize`/`fontWeight`/`color` style props ki jagah ek hi object:
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

**Theming** — Flutter ka answer hai "pure app mein consistent styling ke liye," aur yeh RN developers jo usually ek Context provider hand-roll karte hain, uska meaningfully zyada built-in/structured equivalent hai:
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

**Responsive design** — same underlying need jo RN ke `useWindowDimensions` (Topic 4) ka hai, bas API alag hai:
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

**Yahan log aksar gadbad karte hain:** "CSS file" ya ek single stylesheet object dhundhne ki koshish karte hain — aisa kuch hota hi nahi, aur usko dhundhna hi #1 sign hai ki koi abhi bhi RN/web terms mein soch raha hai. Mental shift yeh hai: composition (kaunse widgets ko kis order mein nest karte ho) **hi** styling model hai, koi alag concern nahi hai jo upar se layer kiya gaya ho.

---

## F5. Navigation

**Yeh hai kya.** Flutter ka built-in `Navigator` widget **routes ka ek stack** manage karta hai, conceptually React Navigation ke Stack Navigator (Topic 5) jaisa hi hai — `push` ek screen add karta hai, `pop` ek remove karta hai. Simple stack se aage kisi bhi cheez ke liye (tabs, drawers, deep-linkable URLs), zyadatar real Flutter apps community package **`go_router`** ke paas jaate hain, jo functionally Flutter ka React Navigation hai.

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

**Bottom tabs & drawers** — RN Topic 5 ke same UI patterns, bas navigator factories ki jagah widgets use karke:
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

**Yahan log aksar gadbad karte hain:** `Navigator.push` vs `context.go()` (go_router) ka behavior alag hota hai, exactly RN ke `navigate()` vs `push()` wale gotcha (Topic 5) jaisa — `go()` current location ko **replace** kar deta hai (koi naya stack entry nahi, kuch-kuch `navigate()` ke existing screen reuse karne jaisa), jabki `push()` **hamesha** ek naya add karta hai. In dono ko bina difference samjhe mix karna ek aisi back-button history bana deta hai jo user ki expectation se match nahi karti.

---

## F6. Networking / API Calls

**Yeh hai kya.** Flutter mein built-in `fetch` nahi hai — standard package hai **`http`** (simple, RN ke `fetch` jaisa) ya **`dio`** (richer: interceptors, cancellation, automatic JSON — `axios` ke zyada kareeb).

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

**Ek fetch ko widget mein wire karna** — yahi woh jagah hai jahan Flutter ki story RN ke `useEffect` + `useState` wale dance se sabse visibly diverge karti hai; iske idiomatic tareeke ke liye **F8** ka `FutureBuilder` dekho, jahan tumhe manually `loading`/`error`/`data` state manage nahi karna padta.

**Yahan log aksar gadbad karte hain:** yeh bhoolna, exactly RN ke `fetch` (Topic 6) ki tarah, ki `http` package 4xx/5xx response pe throw **nahi** karta — tumhe khud `response.statusCode` check karna padta hai. `dio`, `axios` ki tarah, non-2xx responses pe by default *throw karta hai* (ek `DioException` ke through) — pehle pata karo tum kaunsi library use kar rahe ho, tabhi koi behavior assume karo.

---

## F7. State Management

**Yeh hai kya.** Flutter ka baseline hai `setState()`, ek `StatefulWidget` ke andar — RN ke `useState` ka direct equivalent. Bahut saare widgets ke across share hone wale state ke liye, ecosystem mein teen tiers hain, roughly RN ki apni progression (Topic 7 → Topic 37) ko match karte hue: **`Provider`** (simple, widely used, Context+hooks ke sabse kareeb), **`Riverpod`** (Provider ka successor — compile-safe, zyada powerful, increasingly default recommendation), aur **`Bloc`** (ek stricter, zyada structured event-driven pattern, bade teams mein popular).

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

**Yahan log aksar gadbad karte hain:** ek build method ke andar `context.watch()` use karna jahan har change pe rebuild ki zaroorat hi nahi hai (isse unnecessary rebuilds hote hain, RN Context ke over-subscribe karne wali galti ka Flutter-side version) — jab bas ek one-off action karna ho (jaise ek button ke `onPressed` ke andar) to `context.read()` use karo, aur `Consumer`/`Selector` widgets ka use karo taaki rebuild sabse chhote possible subtree tak scope ho jaaye — yeh exactly RN Topic 7 ka "sab kuch ek hi giant Context mein mat daalo" wala lesson hai.

---

## F8. Async Operations

**Yeh hai kya.** `async`/`await` aur `Future<T>` bilkul RN/JS ke `Promise<T>` ki tarah kaam karte hain (Part 4 mein syntax cover ho chuki hai) — jo genuinely alag hai woh yeh hai ki Flutter tumhe **purpose-built widgets** deta hai, `FutureBuilder` aur `StreamBuilder`, jo "data fetch karo, phir loading/error/data states dikhao" ko RN Topic 6/8 wale manual `useState`+`useEffect` dance ki jagah ek declarative pattern bana dete hain.

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

**Yahan log aksar gadbad karte hain:** `build()` ke andar ek naya `Future` recreate karna (jaise `future: fetchUser()` seedha widget tree mein likh dena) — kyunki `build()` kayi baar chal sakta hai, isse **har rebuild pe ek bilkul naya network request** fire ho jaata hai, RN ke "har render pe naya object" wali galti (Topic 4/9) ka Flutter-specific version. Hamesha `Future` ko ek hi baar create karo (`initState()` mein, ya kisi field/provider mein hold karke) aur *wahi same* Future reference `FutureBuilder` mein pass karo.

---

## F9. Performance Optimization

**Yeh hai kya.** Kyunki Flutter ek widget ke `build()` method ko dobara chalata hai yeh decide karne ke liye ki kya change hua (conceptually React ke render phase — Topic 38 — jaisa), same core discipline yahan bhi apply hoti hai: **unnecessary rebuilds avoid karo, aur jo rebuilds ho hi jaate hain unhe cheap banao.**

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

**Yahan log aksar gadbad karte hain:** un widgets pe `const` lagana bhool jaana jo kabhi change nahi hote — RN se aane walon ke liye yeh genuinely sabse common Flutter performance miss hai, kyunki RN/JS mein aisa kuch analogous hai hi nahi jo yeh habit sikhaye. Ek aur baat: ek `StatefulWidget` mein `setState()` call karna **uss poore widget ke `build()` method** ko rebuild karta hai, sirf "jo visually change hua" usko nahi — agar `build()` bada hai, to usko chhote `const`-able child widgets mein split karo, ek hi giant method ke andar optimize karne ki koshish karne ke bajaye.

---

## F10. Platform Channels

**Yeh hai kya.** Flutter ka RN ke Native Modules (Topic 10) ka direct equivalent — us cheez ke liye escape hatch jo Flutter framework khud expose nahi karta (koi vendor SDK, koi platform-specific API). Ek `MethodChannel` tumhare Dart code aur native Kotlin/Swift code ke beech named, asynchronous messages bhejta hai.

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

**Yahan log aksar gadbad karte hain:** exactly RN ke Native Modules ki tarah, `MethodChannel` call ko apna everyday tool samajh lena, last resort nahi — zyadatar features already `pub.dev` packages ki tarah exist karte hain jo platform channel ko tumhare liye wrap kar dete hain (camera, geolocation, file access), bilkul waise hi jaise zyadatar RN apps community native modules pe rely karte hain, khud se Objective-C/Kotlin likhne ke bajaye. Naam se jaan lena bhi zaroori hai (zaroori nahi depth mein): **Pigeon** (type-safe platform channel code generate karta hai, message codec hand-write karne ke bajaye) aur **FFI** (direct calls C/C++ code mein, async channel ko poora bypass karke, latency-critical native interop ke liye) — agar interviewer aur aage push kare to yeh dono "raw MethodChannel se aage ka" answer hain.

---

## F11. Debugging

**Yeh hai kya.** **Flutter DevTools** yahan sabse important tool hai — ek browser-based suite (widget inspector, timeline/performance view, memory profiler, network view) jo Flutter SDK ke saath hi aata hai, roughly RN ke Flipper + React DevTools + Chrome DevTools (Topic 11) ka combined role ek hi integrated tool mein play karta hai.

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

**Yahan log aksar gadbad karte hain:** performance-related kisi bhi cheez ke liye sirf `print()` pe depend karna — DevTools ka **Timeline view** (jo exactly dikhata hai kaunse frames ne zyada time liya aur kyun) hi jank diagnose karne ka actual tool hai, aur yeh RN mein JS/UI/Shadow threads (Topic 32) ko profile karne ka direct Flutter analog hai. Jo candidate sirf `print()` debugging ka naam leta hai, DevTools ki koi story nahi deta, woh waise hi lagta hai jaise ek RN candidate jisne kabhi Flipper khola hi na ho.

---

## F12. Platform Differences

**Yeh hai kya.** Flutter out of the box **do design systems** ship karta hai — **Material** (Android/Google ki design language) aur **Cupertino** (iOS-styled widgets) — aur branching logic ke liye ek `Platform` class, jo conceptually RN ke `Platform.OS` (Topic 12) jaisa hi hai.

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

**Yahan log aksar gadbad karte hain:** yeh assume kar lena ki "Flutter har jagah same dikhta hai" hamesha sahi choice hai — yeh Flutter ka *default* hai (dono platforms pe Material, jab tak tum khud branch na karo), lekin woh default bhi ek real product decision hai: kuch apps deliberately Cupertino ko iOS pe embrace karti hain zyada native feel ke liye, kuch aur intentionally har jagah ek consistent Material look rakhti hain ek *brand* choice ki tarah. Yeh samajh lo ki yeh ek decision hai jo lena hai, framework ka koi accident nahi — same underlying lesson jo RN Topic 12 ka hai.

---

## F13. ListView / GridView

**Yeh hai kya.** `ListView.builder` Flutter ka `FlatList` (RN Topic 13) hai — same virtualization concept, sirf near-viewport items hi build hote hain aur memory mein rakhe jaate hain; ek plain `ListView(children: [...])` Flutter ka `ScrollView` hai — yeh har child ko turant build kar deta hai, jo sirf chhote, fixed content ke liye theek hai.

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

**Yahan log aksar gadbad karte hain:** ek plain `ListView(children: buildAllItems())` use karna ek list ke liye jo grow kar sakti hai — same mistake, same consequence jo RN ke `.map()`-inside-`ScrollView` wale pitfall (Topic 29) ki hai: har item build hokar upfront memory mein hold ho jaata hai, unbounded. Jaise hi size chhota aur fixed na ho, hamesha `.builder` constructors ke paas jaao.

---

## F14. Image Handling

**Yeh hai kya.** Chaar image sources, RN ke chaar (Topic 14) pe directly map hote hue: bundled assets, network, memory/file, aur local file paths ke liye Flutter ka `Image.file`.

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

**Yahan log aksar gadbad karte hain:** `pubspec.yaml` mein ek asset register karna bhool jaana (`flutter: assets: - assets/logo.png`) — RN ke `require()` ke unlike, jo file path se hi kaam kar jaata hai, Flutter ka asset bundling explicit aur declarative hai; ek missing entry runtime pe silently "unable to load asset" error ke saath fail hoti hai, koi build-time error nahi milta.

---

## F15. Storage

**Yeh hai kya.** RN (Topic 15) jaise hi teen tiers, bas Flutter-native package names ke saath: **`shared_preferences`** (simple key-value, == `AsyncStorage`), **`sqflite`** (SQLite, == `react-native-sqlite-storage`), aur **`Hive`** ya **`Isar`** (fast, pure-Dart NoSQL object databases — Flutter ka Realm ka jawab, arguably kam native-dependency friction ke saath kyunki yeh pure Dart hain).

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

**Yahan log aksar gadbad karte hain:** RN ke `AsyncStorage` (Topic 15) jaisa hi — `shared_preferences` **encrypted nahi** hai; ismein directly kabhi tokens ya PII store mat karo. Kisi bhi sensitive cheez ke liye **`flutter_secure_storage`** (F26) use karo, bilkul waise hi jaise RN raw `AsyncStorage` ke bajaye `expo-secure-store`/Keychain-backed storage ke paas jaata hai.

---
## F16. Permissions

**Yeh hai kya.** Community package **`permission_handler`** Flutter ka `react-native-permissions` (RN Topic 16) hai — dono platforms ke bilkul alag underlying permission systems ke upar ek hi API surface.

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

**Yahan log aksar gadbad karte hain:** bilkul RN ke Topic 16 wala gotcha, seedha ported — ek baar jab permission `isPermanentlyDenied` ho jaaye (user ne "don't ask again" check kiya, ya iOS pe do baar deny kar diya), toh dobara `.request()` call karne se **kuch nahi hota**; aapko `openAppSettings()` ke through app ke Settings page pe deep-link karna padega, exactly wahi shape ka fix jo RN ka `Linking.openSettings()` deta hai.

---

## F17. Testing

**Yeh hai kya.** Flutter ka testing pyramid RN ke (Topic 17) upar almost 1:1 map hota hai: **unit tests** (`test` package — pure Dart logic), **widget tests** (`flutter_test` — `@testing-library/react-native` jaisa, ek widget ko render karta hai aur usse interact karta hai), aur **integration tests** (`integration_test` package — Flutter ka Detox/Maestro equivalent, jo real compiled app ko drive karta hai).

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

**Yahan log aksar gadbad karte hain:** interaction ke baad `tester.pump()` (ya `pumpAndSettle()`) bhool jaana — Flutter ke widget tests khud-ba-khud rebuild nahi hote jaise ek real running app hota hai; aapko explicitly test framework ko batana padta hai ki frame process karo, warna aapke assertions stale UI state ke against run hote hain.

---

## F18. Error Handling

**Yeh hai kya.** RN (Topic 18) jaisa hi three-layer model — individual operations ke liye `try`/`catch`, ek widget-level error display, aur ek global handler — bas Dart ka stricter typing ek cheez easy bana deta hai: exceptions typed hote hain, isliye `catch (e)` ko `catch (e) on SpecificException` tak narrow kar sakte ho.

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

**Yahan log aksar gadbad karte hain:** akela `FlutterError.onError` un errors ko **nahi** pakadta jo kisi `async` function se aate hain jise kahin await/catch nahi kiya gaya, ya ek raw `Future` jo reject ho jaaye aur koi sun hi na raha ho — yeh specifically wahi kaam hai jo `PlatformDispatcher.instance.onError` karta hai, exactly usi wajah se jiske liye RN ko sirf ek nahi balki Error Boundary *aur* `ErrorUtils.setGlobalHandler` (Topic 18) dono chahiye hote hain.

---

## F19. Animations

**Yeh hai kya.** Do tiers hain, jo RN ke `Animated` vs. Reanimated split (Topic 19) pe map hote hain: **implicit animations** (`AnimatedContainer`, `AnimatedOpacity` — end state declare karo, Flutter transition khud animate kar deta hai) simple cases ke liye, aur **`AnimationController`** + `Tween` kisi bhi cheez ke liye jise precise control chahiye (sequencing, custom curves, gesture-driven animation).

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

**Yahan log aksar gadbad karte hain:** `dispose()` mein `controller.dispose()` call karna bhool jaana — jo `AnimationController` apni widget se zyada zinda reh jaaye woh memory leak karta hai aur "used after dispose" jaisi errors bhi throw kar sakta hai, structurally bilkul wahi class ka bug jo RN ke `useEffect` cleanup mein `clearTimeout`/`clearWatch`/`removeListener` bhool jaane se hota hai (Topics 8, 23, 27).

---

## F20. Gestures

**Yeh hai kya.** `GestureDetector` Flutter ka `TouchableOpacity`/`Pressable` (RN Topic 20) hai — ek widget jo kisi bhi child ko wrap karta hai aur tap/drag/pinch callbacks expose karta hai. RN ke ulta, Flutter ka gesture system framework mein hi built-in hai (full native-feeling gesture recognition ke liye alag se `react-native-gesture-handler` jaisa package nahi chahiye).

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

**Yahan log aksar gadbad karte hain:** aisi jagah `GestureDetector` use karna jahan Material design visible tap feedback expect karta hai (ek list row, ek button-jaisi surface) — yeh by default **zero** visual feedback deta hai, jabki `InkWell` automatically Android ka native ripple de deta hai; galat wala choose karne se UI *kaam* toh karta hai par unresponsive/non-native feel karta hai — RN ke "sab kuch ek `TouchableOpacity` hai bina kisi visual press state ke" wale polish gap ka yeh Flutter-specific version hai.

---

## F21. Keyboard Handling

**Yeh hai kya.** Flutter zyada tar keyboard-avoidance **automatically** handle karta hai — `Scaffold` by default keyboard se bachne ke liye resize ho jaata hai, jo RN ke manual `KeyboardAvoidingView` (Topic 21) se genuinely alag (aur aksar easier) starting point hai.

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

**Yahan log aksar gadbad karte hain:** yeh assume kar lena ki Flutter "bas sab handle kar leta hai" 100% waqt, aur kabhi chhote device pe form test hi na karna — automatic resize genuinely zyada tar cases cover kar leta hai, lekin nested `Scrollable`s ke andar deep gaya hua ek `TextField`, ya ek custom layout, ab bhi `SingleChildScrollView` se form ko wrap karwana maang sakta hai (taaki resize ke paas scroll karne ki jagah ho) — yeh RN ke iOS-`"padding"`-vs-Android-`"height"` wale `KeyboardAvoidingView` tuning (Topic 21) ka seedha Flutter-flavored version hai.

---
## F22. Camera Integration

**Yeh hai kya.** RN ke `react-native-image-picker`/`expo-camera` (Topic 25, agar media ke under listed hai) ke Dart equivalents hain **`image_picker`** package (ek single photo/video pick ya snap karna, koi live preview UI nahi chahiye) aur **`camera`** package (live camera preview pe full manual control — socho `expo-camera` ka custom-UI mode).

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

**Yahan log aksar gadbad karte hain:** RN Topic 25 wala hi failure mode — sirf runtime request bhoolna nahi, balki platform permission *declarations* hi bhool jaana. `image_picker` ko abhi bhi `Info.plist` mein `NSCameraUsageDescription`/`NSPhotoLibraryUsageDescription` aur `AndroidManifest.xml` mein `CAMERA` permission chahiye — bilkul waise hi jaise RN ko `react-native-permissions` prompt karne se pehle `Info.plist` + `AndroidManifest.xml` entries chahiye hoti hain. Simulator/emulator ka camera bhi dono platforms pe fake hardware hota hai — camera features pe sign off karne se pehle hamesha ek real device pe final pass zaroor karo.

---

## F23. Location Services

**Yeh hai kya.** **`geolocator`** package Flutter ka `react-native-geolocation-service`/`expo-location` hai — dono platforms pe GPS position ke liye ek hi API, wahi permission wala dance jo RN developers already jaante hain.

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

**Yahan log aksar gadbad karte hain:** upar wala three-layer permission check shortcut karna easy hai — sirf `checkPermission()` check karna aur *service-enabled* check skip kar dena matlab jis user ne location services globally off kar rakhi hai usse ek silent failure milega, na ki ek clear "please enable GPS" message — yeh bilkul wahi class ka bug hai jo RN apps mein hota hai jab woh device-level settings check kiye bina sirf `Geolocation.getCurrentPosition()` ko try/catch mein wrap kar dete hain. Background location (app backgrounded hote hue bhi tracking) ke liye additionally iOS pe `NSLocationAlwaysAndWhenInUseUsageDescription` aur Android pe `ACCESS_BACKGROUND_LOCATION` manifest permission chahiye — dono platforms ab isko extra App Store/Play Store review scrutiny ke peeche gate karte hain, RN jaisa hi.

---

## F24. Push Notifications

**Yeh hai kya.** Flutter bhi RN wale hi backend se baat karta hai — **Firebase Cloud Messaging (FCM)** — **`firebase_messaging`** package ke through. Agar RN app ke liye already ek FCM project hai (upar wale Bonus Q&A mein), toh wahi Firebase project aur wahi server-side sending code reuse hota hai; sirf client SDK package badalta hai.

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

**Yahan log aksar gadbad karte hain:** upar wale RN Bonus Q&A wala hi trap — yeh assume kar lena ki app foreground mein hote hue OS automatically ek notification banner dikha dega. Dono frameworks pe, dono SDKs ke liye, aisa nahi hota: `onMessage`/`FirebaseMessaging.onMessage` silently fire hota hai aur aapko khud apna in-app banner render karna padta hai (ek `SnackBar`, ek custom overlay). Doosri baar-baar hone wali galti hai background handler pe `@pragma('vm:entry-point')` bhool jaana — iske bina, Dart ka tree-shaking release builds mein us function ko strip kar sakta hai kyunki visible call graph mein koi usse call karta hua nahi dikhta, jiski wajah se background notifications sirf release/production builds mein silently kaam karna band kar dete hain (debug mein kabhi nahi) — yeh RN ke "Debug pe kaam kiya, Release pe toota" wale Hermes-bytecode class ke bug (Topic 27/44) ka Flutter-specific version hai.

---

## F25. Background Tasks

**Yeh hai kya.** **`workmanager`** package Flutter ka `react-native-background-fetch`/Headless JS equivalent hai — yeh Dart code ko periodically schedule karta hai chalane ke liye, chahe app foreground mein na ho, aur har OS ke apne background-scheduling system (Android pe `WorkManager`, iOS pe `BGTaskScheduler`) pe defer karta hai, na ki hamesha ke liye ek process ko zinda rakhne ki koshish karta hai.

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

**Yahan log aksar gadbad karte hain:** iOS ko Android jaisa treat kar lena. Android ka `WorkManager` aapke periodic task ko requested interval ke reasonably kareeb chalata hai; iOS ka `BGTaskScheduler` interval ko sirf ek *hint* treat karta hai aur battery level, network conditions, aur user kitni baar app kholta hai — inke basis pe runs ko delay, batch, ya bilkul skip kar sakta hai — bilkul wahi constraint jo RN developers `react-native-background-fetch` ke saath iOS pe face karte hain. Koi bhi framework iOS pe truly reliable background execution force nahi kar sakta; jo bhi time-critical ho (chat delivery, live tracking), usko background-fetch task ki jagah push notifications ke through hi bhejna padega.

---

## F26. Security

**Yeh hai kya.** Teen concerns hain, har ek ka Topic-26/RN-package se seedha mirror hai: secrets ke liye secure storage (`flutter_secure_storage`, jo F15 mein already introduce ho chuka tha `shared_preferences` ke encrypted alternative ke roop mein — Flutter ka `SecureStore`/Keychain wrapper, RN Topic 26 jaisa), man-in-the-middle attacks ke against certificate pinning, aur release builds mein apne Dart source ko hide karna.

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

**Yahan log aksar gadbad karte hain:** development ke waqt "abhi ke liye" tokens ko `shared_preferences` mein store kar dena aur usi tarah ship kar dena — unencrypted, plaintext, ek rooted/jailbroken device pe yeh trivially readable hai, exactly F15/Topic 26 wali galti. Doosra common gap: pinning ke liye `badCertificateCallback` add karna par debugging session ke dauraan "error hataane ke liye" unconditionally `true` return kar dena, aur phir usse revert karna bhool jaana — isse saara certificate validation silently disable ho jaata hai, aur *koi bhi* certificate accept ho jaata hai, attacker ka bhi — jo bilkul koi pinning code na hone se bhi zyada bura hai.

---

## F27. App Optimization

**Yeh hai kya.** Flutter ki performance story RN ki (Topic 27) se kaafi close map hoti hai: unnecessary rebuilds avoid karo, lambi lists ko virtualize karo, aur guess karne se pehle profile karo. Primary tools hain `const` constructors (jab kuch badla hi na ho toh ek widget subtree ko poora rebuild karna skip kar dena — RN ka koi direct equivalent nahi hai kyunki RN ka `memo`/`useMemo` *props* compare karte hain, jabki yahan `const` ek compile-time guarantee hai ki widget identical hai), `ListView.builder`/`GridView.builder` virtualization ke liye (F13, seedha `FlatList` equivalent), aur `RepaintBoundary` expensive repaints ko isolate karne ke liye (F9).

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

**Yahan log aksar gadbad karte hain:** sab kuch ek giant `build()` method mein wrap kar dena aur tree mein bahut upar `setState()` call karna — Flutter by default `setState()` call ke *neeche* ke har widget ko rebuild kar deta hai, isliye ek bade screen ke top pe ek simple counter increment poore screen ko rebuild kar sakta hai, jab tak state ko ek chhote, isolated `StatefulWidget` mein neeche push na kiya jaaye (ya ek state-management solution mein move na kiya jaaye — F7) jo sirf usi cheez ko wrap kare jo actually change hona chahiye. Yeh RN ke "poora state ek top-level component mein daal dena aur har keystroke pe poore tree ko re-render hote dekhna" (Topic 27) ka Flutter-shaped version hai.

---

## F28. Building for Production

**Yeh hai kya.** Flutter ke release-build commands RN ke Gradle/Xcode build step (Topic 28) pe seedha map hote hain, bas ek unified CLI ke roop mein, na ki do alag native toolchains jinhe aap haath se invoke karte ho.

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

**Yahan log aksar gadbad karte hain:** galti se debug ya profile build ship kar dena — `flutter run` by default debug mode use karta hai (JIT-compiled, debug assertions ke saath, noticeably slow), aur sirf `--release` hi woh AOT-compiled, tree-shaken, optimized binary produce karta hai; yeh bilkul wahi category ki "meri published app janky kyun hai" complaint hai jo RN apps ko tab milti hai jab koi `--variant release` ke bina accidentally bundle ship kar deta hai. Code signing doosra hamesha wala pain point hai — Android ko har release ke liye ek consistent upload keystore chahiye (ise kho dena matlab aap us app listing ko phir kabhi update nahi kar sakte) aur iOS ko valid provisioning profiles/certificates chahiye — Flutter in underlying platform requirements ko bilkul bhi nahi badalta.

---

## F29. Common Pitfalls

Nau galtiyan jo Flutter code review mein baar-baar dikhti hain, jinme se kai ka upar cover ho chuka RN counterpart seedha hai:

1. **Widget dispose hone ke baad `setState()` call karna** — ek async operation (ek network call, ek timer) tab resolve hota hai jab user already navigate away kar chuka hota hai, aur `setState()` throw karta hai kyunki widget hi gaya. Har async callback ke andar har `setState()` se pehle `if (!mounted) return;` se guard karo — yeh RN ke "setState on an unmounted component" warning ka Flutter-specific version hai.
2. **Dynamic lists mein `key`s missing hona** — bilkul RN ke Topic 29-class "missing `key` prop" bug (Part 1) jaisa. Ek stable `Key` (`ValueKey`, `ObjectKey`) ke bina, jab list reorder ya filter hoti hai toh Flutter list items ke beech state misattribute kar sakta hai.
3. **`await` ke aar-paar `BuildContext` pass karna** — pehle `mounted` check kiye bina ek async gap ke baad `context` use karna throw kar sakta hai ya ek stale, disposed context ko reference kar sakta hai; linter (`use_build_context_synchronously`) inme se zyada tar pakad leta hai.
4. **`const` constructors use na karna** — sabse easy, sabse zyada skip hone wala performance win (F27); likhne mein kuch cost nahi lagti, aur analyzer (`prefer_const_constructors`) bhoolne pe nag karta hai.
5. **Simple layouts ke liye deeply nested widget trees** — paanch `Container`s jo ek `Padding` ko wrap kar rahe hain jo ek `Center` ko wrap kar raha hai, jabki do se hi kaam ban jaata — readability aur rebuild cost dono ko chot pahunchati hai. Nesting ki jagah named widgets extract karo.
6. **Ek `setState()` se poori screen rebuild karna** — F27 wala hi pitfall, yahan phir se isliye repeat kiya kyunki "meri simple app janky feel karti hai" reports ka yehi sabse common source hai.
7. **`flutter analyze` ki warnings ignore karna** — Dart ka static analyzer runtime se pehle hi null-safety aur type bugs ka bahut bada hissa pakad leta hai; jo codebase analyzer warnings ko addressed kiye bina ship hoti rehti hai, woh usi tarah silently tech debt jama karti hai jaise ek RN codebase jo ESLint/TypeScript errors ignore karti hai.
8. **Platform-specific values hardcode karna** — sizes aur spacing sirf ek screen size/density ke liye tune kiye gaye, RN Topic 12 ki "`Platform.select()`/responsive units bhool jaana" wali galti ka seedha Dart-side version.
9. **Merge karne se pehle iOS aur Android dono pe test na karna** — Cupertino vs. Material differences (F12) miss karna easy hai jab aap hamesha ek hi simulator pe run karte ho.

---

## F30. Best Practices

Ek closing checklist, jaan-bujhkar RN Topic 30 ke structure ko mirror karti hui, taaki dono frameworks ek shared discipline ki tarah padhein, na ki do unrelated skill sets ki tarah.

- **Feature-based folder structure** type-based ke upar (`lib/features/auth/`, `lib/features/profile/`, na ki `lib/screens/`, `lib/widgets/`, `lib/models/` alag top-level buckets ki tarah) — RN Topic 42 ke large-scale app structure jaisa hi reasoning.
- **Ek state-management tier pick karo aur poori app mein usi pe tike raho** (F7 ki ladder: `setState` → `Provider` → `Riverpod`/`Bloc`) — poore codebase mein teen alag approaches mix karna Flutter version hai us RN app ka jo plain Redux, Context, aur teen alag data-fetching libraries mix karti hai bina kisi clear rule ke ki kab kya use karna hai.
- **`const` har jagah lagao jahan analyzer allow kare** — free performance (F27), aur `prefer_const_constructors` lint yaad dilata rahega.
- **Null safety discipline** — `!` (bang operator, F-Part-4) ka use karke analyzer ko chup karane ke temptation se bacho; ek galat `!` ek runtime crash hai jo hone hi wala hai — bilkul waise jaise RN/TypeScript developers `as any` use karke type error ko gayab karte hain, actual type fix karne ki jagah.
- **Teen levels pe test karo** — pure Dart logic ke liye unit tests, individual components ke liye widget tests (F17), full user flows ke liye integration tests — bilkul wahi testing pyramid jo RN Topic 23 Jest unit/component tests plus Detox/Maestro end-to-end tests ke saath recommend karta hai.
- **Din 1 se hi `flutter_lints`** (ya stricter `very_good_analysis`) se lint karo — null-safety aur style issues ko compound hone se pehle pakad lena, ek naye RN project mein baad mein retrofit karne ki jagah shuru se hi strict ESLint + TypeScript enable karne ka seedha equivalent.
- **CI/CD** — Codemagic, Fastlane, ya GitHub Actions jo har PR pe `flutter test`, `flutter analyze`, aur `flutter build` chalaye, RN Topic 42 ke Fastlane/EAS Build pipelines ko mirror karte hue.
- **Optimize karne se pehle profile karo** — DevTools ka Performance tab batata hai ki actually slow kya hai; guess karna galat fix pe effort waste karta hai, RN ke Topic 27 ke us emphasis jaisa hi rule jo intuition ke upar Profiler ko rakhta hai.

---
# PART 6 — HANDS-ON EXERCISES

*Is material ko actually seekhne ka sabse fast tareeka yeh hai ki padhna band karo aur type karna shuru karo. Neeche har exercise mein ek spec milega, ek "try it yourself first" wala nudge jo exactly batayega ki solution dekhne se pehle kya try karna hai, aur uske baad **dono** frameworks mein reference solution — taaki tum apna approach compare kar sako, kahin atak jao to unstuck ho sako, ya dekh sako ki jo cheez RN mein pehle se aati hai uska idiomatic Flutter shape kaisa dikhta hai. Solutions ko copy-paste mat karo — unhe padho, file band karo, aur unhe memory se dobara likho. Yehi part hai jo actually skill build karta hai.*

*Har exercise ke liye ek rough time budget diya gaya hai — ise ek ceiling ki tarah treat karo jiske neeche rehne ki koshish karni hai, target ki tarah nahi.*

---

## Beginner

### Exercise B1 — Counter with Increment, Decrement & Reset

**Spec:** Ek screen banao jisme ek number bade text mein dikhe, aur teen buttons ho: `+1`, `-1`, aur `Reset` (wapas 0 pe). Number kabhi bhi 0 se neeche nahi jaana chahiye — 0 pe `-1` click karne se kuch nahi hona chahiye.

**Pehle khud try karo.** ~15 minute. Yeh purely local component state ke baare mein hai (RN: `useState`; Flutter: `setState`) aur conditional logic — koi networking nahi, koi navigation nahi.

<details>
<summary><strong>Solution — React Native</strong></summary>

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
<summary><strong>Solution — Flutter</strong></summary>

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

**Isse yeh seekhne ko milta hai:** local state updates (Topic 7 / F7), RN ke `useState`-updater-function shape vs. Flutter ke `setState`-callback shape mein difference, aur clamping logic — jo dono frameworks mein handler ke andar hi likhni padti hai, kyunki koi bhi framework input validation apne aap nahi karta.

---

### Exercise B2 — Static List with Images

**Spec:** 20 fake "contacts" (name, subtitle, avatar — array ko hardcode kar sakte ho ya loop se generate kar sakte ho) ki ek scrollable list render karo, har framework ke virtualized list component se — plain `map()`/`Column` se nahi.

**Pehle khud try karo.** ~20 minute. Point yeh hai ki specifically `FlatList`/`ListView.builder` practice ho — Topic 13 / F13 — jisme ek proper `keyExtractor`/`ValueKey` bhi shaamil ho.

<details>
<summary><strong>Solution — React Native</strong></summary>

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
<summary><strong>Solution — Flutter</strong></summary>

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

**Isse yeh seekhne ko milta hai:** virtualization (dono components sirf wahi render karte hain jo screen pe hai, F13/Topic 13), stable keys, aur yeh fact ki Flutter ka `ListTile` tumhe "avatar + title + subtitle row" wala layout free mein de deta hai, jabki RN mein manually `flexDirection: 'row'` styling karni padti hai.

---

### Exercise B3 — Form with Validation

**Spec:** Do text inputs (name, email) aur ek submit button. Har field ke neeche ek inline error dikhao agar wo empty hai, aur email ke case mein specifically tab bhi jab usme `@` na ho. Successful submit pe, form ki jagah ek success message dikhao.

**Pehle khud try karo.** ~20 minute. Controlled inputs plus conditional rendering — itni simple validation ke liye koi library ki zaroorat nahi.

<details>
<summary><strong>Solution — React Native</strong></summary>

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
<summary><strong>Solution — Flutter</strong></summary>

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

**Isse yeh seekhne ko milta hai:** controlled vs. `TextEditingController`-based inputs, aur ek genuine ergonomic difference jo interviews ke liye jaanna zaroori hai — Flutter ka built-in `Form`/`TextFormField`/`validator` machinery "sab validators run karo, errors collect karo, re-render karo" wala loop tumhare liye handle kar deta hai, jabki RN mein koi built-in form layer hai hi nahi (isi wajah se real apps mein ecosystem `react-hook-form`/Formik pe itna heavily rely karta hai — agar interview mein poocha jaaye "15 fields wale form ko kaise handle karoge" to mention karne layak baat hai).

---

## Intermediate

### Exercise I1 — Fetch & Display Remote Data (Loading / Error / Success States)

**Spec:** Mount hote hi `https://jsonplaceholder.typicode.com/posts` se posts ki list fetch karo aur unhe ek list mein render karo. Loading ke waqt spinner dikhao aur failure pe retry button.

**Pehle khud try karo.** ~25 minute. Yeh Topic 6/8 (Networking + Async) aur F6/F8 dono combined hai — solution dekhne se pehle three-state (`loading`/`error`/`data`) pattern ko sahi se karo.

<details>
<summary><strong>Solution — React Native</strong></summary>

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

*(Ek real production app mein, is state machine ko hand-roll karne ke bajaye TanStack Query — Topic 37 — use karo; yahaan isse haath se isliye dikhaya gaya hai taaki underlying mechanics bilkul saaf dikhein.)*

</details>

<details>
<summary><strong>Solution — Flutter</strong></summary>

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

**Isse yeh seekhne ko milta hai:** RN wale version ko hand-rolled status enum ki zaroorat padti hai kyunki `useEffect` + `useState` khud koi enum nahi deta; Flutter ka `FutureBuilder` (F8) loading/error/data states ko directly `AsyncSnapshot` mein bake kar deta hai — ek genuinely different ergonomic tradeoff jise interview mein explain karna aana chahiye.

---

### Exercise I2 — Three-Screen Navigation with Params

**Spec:** Ek list screen jisme 5 products dikhein → kisi ek pe tap karne se ek detail screen pe navigate ho jo us product ka naam aur price dikhaye (param ke roop mein pass kiya gaya, dobara fetch nahi kiya gaya) → detail screen pe ek button se ek checkout confirmation screen pe navigate ho.

**Pehle khud try karo.** ~25 minute. Topic 5/F5 — specifically route params pass aur read karna practice karo, sirf navigate karna nahi.

<details>
<summary><strong>Solution — React Native (React Navigation)</strong></summary>

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
<summary><strong>Solution — Flutter (Navigator 1.0)</strong></summary>

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

**Isse yeh seekhne ko milta hai:** wahi conceptual difference jo F5 mein pehle bhi flag kiya gaya tha — RN ka `route.params` component ke saath ek alag "data ka bag" hai jo saath-saath thread hota hai, jabki Flutter params ko bilkul waise hi pass karta hai jaise kisi bhi widget ko props pass karte ho: constructor arguments ke roop mein. Navigator 1.0 wala version chalne ke baad exercise ko dobara `go_router` (F5 ka declarative alternative) ke saath try karo, taaki isi flow ka URL-based version bhi dekh sako.

---

### Exercise I3 — Persisted Todo List

**Spec:** Ek todo list (item add karo, complete mark karo, delete karo) jo app restart ke baad bhi bachi rahe — har change pe local storage mein likho, launch pe usse wapas padho.

**Pehle khud try karo.** ~30 minute. Topic 15/F15 — point storage read/write hai, list UI nahi.

<details>
<summary><strong>Solution — React Native (AsyncStorage)</strong></summary>

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
<summary><strong>Solution — Flutter (shared_preferences)</strong></summary>

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

**Isse yeh seekhne ko milta hai:** `AsyncStorage` aur `shared_preferences` dono string-only key-value stores hain, isliye dono solutions ek jaisa hi `jsonEncode`/`jsonDecode` (ya `JSON.stringify`/`JSON.parse`) wala dance hand-roll karte hain — "Realm/Hive ke liye kyun jaoge" wale interview question ke liye ek achha talking point (F15/Topic 15: jab bhi queries, relations, ya large datasets chahiye ho, sirf flat blob nahi, tab).

---

### Exercise I4 — Infinite Scroll with Pull-to-Refresh

**Spec:** `jsonplaceholder.typicode.com/posts?_page=N&_limit=20` se posts 20-20 karke load karo; jab user scroll karte hue bottom ke paas pahunche to agla page automatically fetch ho, aur pull-down-to-refresh support karo jo page 1 pe reset kar de.

**Pehle khud try karo.** ~30 minute. Yeh pehle add kiye gaye FlatList-optimization wale question (Bonus Q&A) ka direct answer hai — RN side pe `onEndReached` + `onRefresh`, Flutter side pe `ScrollController` + `RefreshIndicator`.

<details>
<summary><strong>Solution — React Native</strong></summary>

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
<summary><strong>Solution — Flutter</strong></summary>

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

**Isse yeh seekhne ko milta hai:** RN ka `FlatList` `onEndReached` + `refreshing`/`onRefresh` ko first-class props ke roop mein bundle karta hai; Flutter mein tumhe do alag primitives compose karne padte hain (`ScrollController` ka position math infinite scroll ke liye, `RefreshIndicator` pull-to-refresh ke liye) — code zyada hai, lekin yeh bhi zyada saaf dikhta hai ki exactly kya cheez kaunsa behavior trigger karti hai — agar interviewer poochhe "FlatList ek plain ScrollView se extra kya deta hai" to mention karne layak.

---

### Exercise I5 — Debounced Search

**Spec:** Ek search box jo client-side pe 500 items ki list filter kare, lekin re-filter tabhi ho jab user ke type karna band kiye 300ms ho gaye ho (har keystroke pe nahi).

**Pehle khud try karo.** ~20 minute. Topic 9/F9 (Performance) — debounce timer logic dono languages mein identical hai; interesting part yeh hai ki memoization *kahan* rakhte ho.

<details>
<summary><strong>Solution — React Native</strong></summary>

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
<summary><strong>Solution — Flutter</strong></summary>

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

**Isse yeh seekhne ko milta hai:** debounce-timer-cleanup ka discipline dono jagah identical hai (re-trigger aur unmount, dono pe clear/cancel karna) — RN mein miss karo to `setState` on unmounted warning milegi (Topic 9), Flutter mein miss karo to F29 wala "setState after dispose" crash milega. `useMemo` RN mein isliye kaam ka hai kyunki React har render pe poora function body dobara chalata hai; Flutter ka `setState` sirf tabhi `build()` ko dobara chalata hai jab tum use call karte ho, isliye itni cheap computation ke liye alag se memoization step ki zaroorat kam hi padti hai.

---
## Advanced

### Exercise A1 — Authentication Flow with Secure Token Storage

**Spec:** Ek login screen banao (email/password, real backend ki zaroorat nahi — 1-second ka fake delay maar do aur koi bhi non-empty input accept kar lo) jo success hone par auth token ko **secure**, encrypted storage mein store kare, ek protected home screen jo tabhi render ho jab token exist kare, aur ek logout button jo usse clear kar de.

**Pehle khud try karo.** ~40 minutes. Topic 26/F26 (Security) plus 15/F15 (Storage) plus navigation guarding.

<details>
<summary><strong>Solution — React Native</strong></summary>

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
<summary><strong>Solution — Flutter</strong></summary>

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

*(Flutter wala solution jaan-boojh kar dependency-injection wiring ke maamle mein RN version se thoda kam polished rakha gaya hai, taaki tumhare paas fix karne ke liye kuch real cheez bache — is ad-hoc `findAncestorStateOfType` lookup ko proper `Provider`/`ChangeNotifierProvider`, F7, se replace karke try karo, exercise ke "ise khud finish karo" wale part ke taur par.)*

</details>

**Isse yeh seekhne ko milta hai:** "abhi storage check ho raha hai" wala teesra state (`undefined`/`checking`) jo dono solutions ko chahiye hota hai ye decide karne se pehle ki kaunsi screen dikhani hai — ek aisa bug jo tumhe sirf cold app starts test karne par milega, hot reloads par nahi, dono frameworks mein. Ye F26 ki us warning ka bhi direct hands-on version hai jo kabhi bhi token ko plain `AsyncStorage`/`shared_preferences` mein daalne ke khilaaf di gayi thi.

---

### Exercise A2 — End-to-End Push Notifications

**Spec:** Firebase Cloud Messaging ko wire up karo taaki: (1) app push ke liye register ho aur device token log kare, (2) foreground notification ek in-app banner dikhaye, (3) notification tap karne par (chahe app backgrounded ho ya poori tarah killed ho) notification ke data payload mein diye `screen` field ke basis par ek specific screen par navigate ho.

**Pehle khud try karo.** ~45 minutes, plus real Firebase project setup — is poore set mein sabse zyada "production reality" wala exercise yehi hai. Upar wale Bonus Q&A aur F24 ka direct extension hai.

<details>
<summary><strong>Solution — React Native</strong></summary>

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
<summary><strong>Solution — Flutter</strong></summary>

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

**Isse yeh seekhne ko milta hai:** notification-handling ka teen-state shape (foreground / backgrounded-tapped / killed-tapped) dono frameworks mein same hai kyunki ye OS decide karta hai, framework nahi — interviewer ke liye ye ek accha signal hai ki tumhe pata hai ye platform constraint hai, koi library ki quirk nahi. Flutter version mein `@pragma('vm:entry-point')` wali line dhyan se dekho — isse skip kar do to ye exact exercise har debug session mein perfectly chalega aur phir tumhare ship kiye release build mein chupchaap fail ho jayega — bilkul wahi trap jiske baare mein F24 warn karta hai.

---

### Exercise A3 — Offline-First Todo List with Sync

**Spec:** Ek todo list jo poori tarah offline kaam kare (ek local SQLite database ke sahare), offline rehte hue banaye gaye items par ek "pending sync" indicator dikhaye, aur connectivity wapas aane par unhe automatically ek (mocked) server endpoint par push kar de.

**Pehle khud try karo.** ~50 minutes. Topic 15/F15 (local DB) ko connectivity detection ke saath combine karta hai — ye topic apne alag numbered section mein cover nahi hua, lekin ye pattern (`NetInfo`/`connectivity_plus`) Topic 6/F6 ke networking material ka natural extension hai.

<details>
<summary><strong>Solution — React Native (sketch, SQLite via `react-native-sqlite-storage` + `@react-native-community/netinfo`)</strong></summary>

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
<summary><strong>Solution — Flutter (sketch, `sqflite` + `connectivity_plus`)</strong></summary>

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

**Isse yeh seekhne ko milta hai:** offline-first sync loop ek *pattern* hai, koi library feature nahi — dono solutions structurally same chaar pieces se bane hain (pehle locally likho, ek `synced` flag rakho, connectivity listener lagao, aur ek retry-safe push loop chalao), chahe tum jo bhi SQL wrapper ya connectivity package use karo — aur ye bilkul wahi system-design wala jawaab hai jo interviewer sunna chahta hai jab wo "offline support kaise handle karoge" poochta hai, "kaunsi library use karte ho" nahi.

---

### Exercise A4 — Animated, Gesture-Driven Onboarding with Deep Linking

**Spec:** Ek 3-screen swipeable onboarding flow banao (screens ke beech left/right swipe karo, animated transition ho, current position dikhane ke liye ek dot indicator ho) jo *saath hi* directly screen 2 ya 3 par ek deep link ke through bhi khul sake (jaise `myapp://onboarding/2`), sirf shuruaat se nahi.

**Pehle khud try karo.** ~50 minutes. Is set ka jaan-boojh kar sabse mushkil exercise — ye Topic 19/F19 (Animations), 20/F20 (Gestures), aur 41 (Deep Linking, RN-only numbered topic; Flutter ka equivalent F5 ke navigation material mein inline cover hua hai) sabko ek hi flow mein combine karta hai.

<details>
<summary><strong>Solution — React Native (sketch)</strong></summary>

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
<summary><strong>Solution — Flutter (sketch, using `PageView` — Flutter's built-in swipeable-pages widget)</strong></summary>

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

**Isse yeh seekhne ko milta hai:** is poore exercise ka sabse bada lesson — RN ka `PanResponder` + `Animated` tumhe raw gesture deltas deta hai jinhe tumhe khud jodkar paging behavior banana padta hai, jabki Flutter ka `PageView` "animated transitions ke saath swipeable pages" ko ek built-in widget ke roop mein bake-in karke deta hai, kyunki paged onboarding/carousels itne common hain ki Flutter ne iske liye ek primitive hi ship kar diya. Aur deep linking ki baat karein to: `go_router` ek route path aur ek deep link ko literally ek hi declaration maanta hai, jabki React Navigation ko URL patterns ko screens se map karne ke liye ek alag, explicit `linking` config object chahiye hota hai — interview mein "har framework mein deep linking kaise kaam karta hai" ke direct jawaab ke taur par ye ready rakhne layak baat hai.

---

# PART 7 — FUTURE TOPICS

*Ye jagah reserved hai jo bhi tum aage add karna chaho uske liye. Ek topic (ya topics ki list) bhej do aur wo yahan bilkul usi "What it is / Why it matters / code / Where people get burned" structure mein likh diya jayega jo upar sab jagah use hua hai — saath hi agar dono frameworks par apply hota hai to matching Flutter mirror bhi, aur Learning Checklist aur Table of Contents mein bhi ek entry add ho jayegi.*

**Yahan abhi tak kuch add nahi hua hai.**

---
