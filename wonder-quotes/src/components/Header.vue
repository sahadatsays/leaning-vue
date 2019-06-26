<template>
  <div class="row">
    <div class="col-md-12 py-3">
      <h3
        class="text-center mt-4 bg-light py-3"
      >Welcome to Wonder Quotes - Demo Application for Learn to VueJS</h3>
      <div class="progress">
        <div
          class="progress-bar progress-bar-striped bg-danger"
          role="progressbar"
          :style="{width: (count_quotes / max_quotes) * 100 + '%'}"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        >{{ count_quotes }} / {{ max_quotes}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["count_quotes", "max_quotes"]
};
</script>
