# Learn Vue

## Root Content List

- [x] Getting Started.
- [x] Interacting with the DOM (Templates)
- [x] Understanding the VueJS Instance.
- [x] Vue CLI.
- [x] Components
- [ ] Forms
- [ ] Directives Filters & Mixins.
- [ ] Animations & Transitions.
- [ ] Working with HTTP.
- [ ] Routing.
- [ ] State Management.
- [ ] Demploying a Vue Applications.

# Full Content List

- [x] Basic Structure.
- [x] Different Types of Directives.
- [x] Listening to events.
- [x] Modifying events.
- [x] Listening to Keybord events.
- [x] Two-way-binding data.
  - [x] v-model directive
- [x] Reactivity with the computed property.
- [x] Alternative to Computed Properties. `watch`
- [x] Shorthand.
  - [x] `v-on:click="clickHandler"` to `@click="clickHandler"`
  - [x] `v-bind:href="link"` to `:href="link"`
- [x] Dynamic Styling with C SS Classes.
- [x] Dynamic Styling with css by method object.
- [x] Dynamic Styling using names.
- [x] Styling dynamically without CSS Classes.
- [x] Styling Elements with the Array syntax.
- [] Conditionals & Lists.
- [x] Coditional Rendering with `v-if`
  - [x] Using Alternative of `v-if` use `<template> </template>`
- [x] Don't detach `v-show`. It can `display:noen`.
- [x] Rendering Lists using `v-for`.
- [x] looping through objects.
  - [x] exmple for loop `v-for="(value, key, index) in list"`
- [x] Looping through a list of numbers `v-for="n in 10"` {{ n }}

## Detail Note For Learn VueJS.

### Understanding Vue Template.

This is Vue template Sample code.

```html
<div id="app">
  <p>{{ title }}</p>
</div>
```

```javascript
// scripts
new Vue({
  el: "#app",
  data: {
    title: "Hello VueJS."
  }
});
```

## Understanding Vue Directives.

In addition to the default set of directives shipped in core (v-model and v-show), Vue also allows you to register your own custom directives. Note that in Vue 2.0, the primary form of code reuse and abstraction is components - however there may be cases where you need some low-level DOM access on plain elements, and this is where custom directives would still be useful. An example would be focusing on an input element, like this one:

```html
<a v-bind:href="link">Google</a>
```

```javascript
new Vue({
  el: "#app",
  data: {
    link: "https://google.com"
  }
});
```

`v-once` : Do not change the data value, if I use `v-once`

```html
<p>{{ changeVlue() }}</p>
<p></p>
<h1>{{ title }}</h1>
<h1 v-once>{{ title }}</h1>
```

```javascript
new Vue({
  el: "#app",
  data: {
    title: "Do not change the Value"
  },
  methods: {
    changeVlue: function() {
      this.title = "Change the Vlue";
      return this.title;
    }
  }
});
```

`v-html="htmlCode"`

```html
<div v-html="htmlLink"></div>
```

```javascript
new Vue({
  el: "#app",
  data: {
    htmlLink: '<a href="https://google.com">Google</a>'
  }
});
```

Listening to Events `v-on` and `v-bind`

```html
<p>{{ counter }}</p>
<br />
<button v-on:click="increase">Increase</button>
```

```javascript
new Vue({
  el: "#app",
  data: {
    counter: 0
  },
  methods: {
    increase: function() {
      return this.counter++;
    }
  }
});
```
