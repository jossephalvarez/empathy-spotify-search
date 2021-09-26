layouts
<template>
  <nav class="nav-view">
    <ul class="nav-view__nav">
      <router-link
        v-for="(item, index) in links"
        v-show="item.isVisible !== undefined ? item.isVisible : true"
        :key="index"
        :to="item.to"
        active-class="nav-view__nav-item--active"
        class="nav-view__nav-item"
        exact
        tag="li"
      >
        {{ item.name }}
      </router-link>
    </ul>
  </nav>
</template>

<script>
    export default {
        name: "NavView",

        props: {
            links: {
                required: true
            }
        }
    };
</script>

<style lang="sass" scoped>

  .nav-view
    padding: 2px

    &__nav
      display: flex
      padding: 12px 0
      list-style-type: none
      display: flex
      flex-wrap: wrap
      justify-content: space-around
      align-items: center

    &__nav-item
      position: relative
      margin: 0 15px
      color: $c-gray
      text-transform: uppercase
      cursor: pointer
      font-size: 16px
      padding: 15px 5px
      white-space: nowrap

      &:hover
        color: $c-white

      &--active
        color: $c-white

        &:after
          +horizontal-center
          bottom: -10px
          width: 50px
          height: 3px
          background: $c-green
          content: ''

    &__content
      padding: 15px 0
</style>
