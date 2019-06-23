<template>
  <div>
    <h2>User Edit Component</h2>
    <p>My age is : {{ myAge }}</p>
    <button @click="changeAgeFromChild">Edit Age</button>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  props: {
    myAge: {
      type: Number,
      default: 20
    }
  },
  data() {
    return {};
  },
  methods: {
    changeAgeFromChild() {
      this.myAge = 40;
      eventBus.$emit("changeAgeToUserEditComp", this.myAge);
    }
  }
};
</script>
    
<style scoped>
p {
  color: green;
  padding: 12px;
  font-size: 18px;
}

button {
  min-width: 120px;
  padding: 15px;
  font-size: 19px;
}
</style>

