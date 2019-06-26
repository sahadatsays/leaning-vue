<template>
  <div class="row justify-content-center">
    <div class="col-sm-8 col-md-6">
      <form>
        <div class="form-group">
          <textarea class="form-control" rows="3" v-model="quote"></textarea>
        </div>
        <div class="form-group">
          <button class="btn btn-primary" @click.prevent="addQuote">Add Quote</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quote: ""
    };
  },
  methods: {
    addQuote() {
      if (this.quote === "") {
        alert("Input must be not empty !");
        return;
      }
      this.$emit("addNewQuote", this.quote);
      this.quote = "";
    }
  }
};
</script>

