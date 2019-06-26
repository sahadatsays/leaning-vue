<template>
  <div class="row">
    <quote
      v-for="(quote, index) in quotes"
      :key="index"
      @click.native="deleteQuote(index)"
    >{{ index+1 }} | {{ quote }}</quote>
  </div>
</template>

<script>
import Quote from "./Quote";

export default {
  props: {
    quotes: {
      type: Array
    }
  },
  components: {
    Quote
  },
  methods: {
    deleteQuote(index) {
      this.$emit("quoteDeleted", index);
    }
  }
};
</script>

<style>
.card-body {
  font-family: "Arizonia", cursive;
  font-weight: normal;
  font-size: 2em;
}

.quote {
  background: #eee;
  transition: all 1s;
  cursor: pointer;
}
.quote:hover {
  background: rgb(233, 65, 65);
  color: #fff;
}
</style>
