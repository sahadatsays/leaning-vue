# Learn Vue

## Content List

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
