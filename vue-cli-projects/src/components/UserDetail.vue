<template>
  <div>
    <h2>User Details Component</h2>
    <p>Name : {{ name }}</p>
    <p>My Age : {{ age }}</p>
    <p>Universtiy: {{ university }}</p>
    <button @click="switchingName">Reverse</button>
    <button @click="resetName">Reset Name</button>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  props: {
    name: {
      type: String,
      default: "Sakib"
    },
    age: {
      type: Number,
      default: 25
    }
  },
  data() {
    return {
      university: "Northern University, Dhaka"
    };
  },
  methods: {
    switchingName() {
      return (this.name = this.name
        .split("")
        .reverse()
        .join(""));
    },
    resetName() {
      this.name = "Md Juwel";
      this.$emit("changeToChild", this.name);
    }
  },
  created() {
    eventBus.$on("changeAgeToUserEditComp", age => {
      this.age = age;
    });
  }
};
</script>

<style scoped>
p {
  color: red;
  padding: 5px;
}
</style>

