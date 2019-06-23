<template>
  <div class="user">
    <h1>User Component</h1>
    <button @click="changeName">Change Name</button>
    <p>Root Name : {{ myName }}</p>
    <p>Root Age : {{ myAge }}</p>
    <div class="col-xs-12">
      <div class="col-md-6 details">
        <user-detail :name="myName" @changeToChild="myName = $event" :age="myAge"></user-detail>
      </div>
      <div class="col-md-6 edit">
        <user-edit :myAge="myAge"></user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail";
import UserEdit from "./UserEdit";
export default {
  data() {
    return {
      myName: "Rifath Hasan",
      myAge: 27
    };
  },
  components: {
    "user-detail": UserDetail,
    "user-edit": UserEdit
  },
  methods: {
    changeName() {
      this.myName = "Hossain";
    }
  }
};
</script>

<style scoped>
.user {
  background: #ccc;
  width: 100%;
  min-height: 350px;
  padding: 10px;
  margin: 15px 0;
}
.details {
  background: #c2c2;
  display: inline-block;
  padding: 15px 10px;
}
.edit {
  background: rgba(35, 63, 2, 0.133);
  display: inline-block;
  padding: 15px 10px;
}
button {
  min-width: 120px;
  padding: 15px;
  font-size: 19px;
}
</style>
