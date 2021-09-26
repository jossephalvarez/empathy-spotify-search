<template>
  <div class="app-layout">
    <navbar />
    <div class="app-layout__wrap">
      <div class="app-layout__main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
    import Navbar from "@/components/Navbar";

    export default {
        name: "AppLayout",

        components: {
            Navbar,
        }
    };
</script>

<style scoped lang="sass">

  .app-layout
    position: relative
    display: flex
    flex-flow: column
    flex-grow: 1
    color: $c-white

    &__wrap
      display: flex
      flex-flow: row
      flex-grow: 1
      background: $c-shark-dark

    &__main
      flex-grow: 1
      max-height: calc(100vh - 130px)
      overflow-y: auto

</style>
