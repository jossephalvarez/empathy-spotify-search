<template>
  <div :class="elClass">
    <h2 class="header__title">
      {{ title }}
    </h2>
  </div>
</template>

<script>
    export default {
        name: "Header",

        props: {
            title: {
                type: String
            },

            small: {
                type: Boolean,
                default: false
            }
        },

        computed: {
            elClass() {
                return [
                    "header",
                    {
                        "header--small": this.small
                    }
                ];
            }
        }
    };
</script>

<style lang="sass" scoped>

  .header
    padding: 0 15px

    &--small
      .header__title
        font-size: 18px

    &__title
      margin: 30px 0 15px
      font-size: 30px
</style>
