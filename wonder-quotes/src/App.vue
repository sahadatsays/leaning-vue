<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h3
          class="text-center mt-4 bg-light py-3"
        >Welcome to Wonder Quotes - Demo Application for Learn to VueJS</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="card card-body bg-light">
          <p
            class="quote"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, totam?</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card card-body bg-light">
          <p
            class="quote"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, totam?</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card card-body bg-light">
          <p
            class="quote"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, totam?</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>


<style>
.quote {
  font-family: "Arizonia", cursive;
  font-size: 2em;
  font-weight: normal;
}
</style>
