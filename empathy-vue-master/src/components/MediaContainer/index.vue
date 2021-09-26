<template>
  <div class="media-container">
    <slot />
  </div>
</template>

<script>
    export default {
        name: "MediaContainer"
    };
</script>

<style lang="sass">

  .media-container
    display: flex
    flex-flow: wrap
    padding: 0 8px
    justify-content: center

    .media-object
      display: initial
      vertical-align: top
</style>
