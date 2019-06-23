<template>
  <div class="container">
    <h2>Vue JS Learn Vue-CLI</h2>
    <p>Server Status: {{ status }}</p>
    <hr>
    <user></user>
  </div>
</template>

<script>
import User from "./components/User";

export default {
  data() {
    return {
      status: "Cretical"
    };
  },
  components: {
    User
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.container {
  width: 70%;
  margin: 0 auto;
}
.col-xs-12 {
  width: 100%;
  height: auto;
  overflow: hidden;
}

.col-md-6 {
  width: 45%;
  height: auto;
  overflow: hidden;
}
</style>
