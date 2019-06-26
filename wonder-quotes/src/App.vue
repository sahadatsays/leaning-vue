<template>
  <div class="container">
    <quote-header :count_quotes="quotes.length" :max_quotes="max_quotes"></quote-header>
    <new-quote @addNewQuote="newQuoteToQuotes"></new-quote>
    <quotes-grid :quotes="quotes" @quoteDeleted="deleteQuote"></quotes-grid>
  </div>
</template>

<script>
import QuotesGrid from "./components/QuotesGrid";
import Header from "./components/Header";
import NewQuote from "./components/NewQuote";

export default {
  name: "app",
  data() {
    return {
      quotes: ["Some Quote for See."],
      max_quotes: 10
    };
  },

  components: {
    QuotesGrid,
    QuoteHeader: Header,
    NewQuote
  },
  methods: {
    newQuoteToQuotes(quote) {
      if (this.quotes.length >= this.max_quotes) {
        alert("Your have maximum number of quotes. Pelase delete some quote.");
        return;
      }
      this.quotes.push(quote);
      // console.log(quote);
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
    }
  }
};
</script>


<style>
</style>
