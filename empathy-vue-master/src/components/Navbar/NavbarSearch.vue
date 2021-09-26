<template>
  <div>
    <!--    <form class="search-form">-->
    <!--      <input-->
    <!--        type="search"-->
    <!--        name="search"-->
    <!--        placeholder="Search"-->
    <!--        class="search-form__input"-->
    <!--        @focus="onFocus"-->
    <!--        @keyup="onKeyUp"-->
    <!--      >-->
    <!--    </form>-->
    <form class="search-form">
      <input
        ref="my_input"
        type="text"
        class="search-form__input"
        placeholder="What are you looking for?"
        :disabled="isLoadingData"
        @focus="onFocus"
      >
      <button
        class="search-form__button"
        :disabled="isLoadingData"
        @click.prevent="getSearchResult()"
      >
        {{ isLoadingData ? 'Searching' :'Search' }}
      </button>
    </form>
  </div>
</template>

<script>
    import router from "@/router";
    import {mapActions, mapState} from "vuex";

    export default {
        name: "NavbarSearch",
        data() {
            return {
                submitting: false,
                searchString: 'Search'
            };
        },
        computed: {
            ...mapState("search", [
                "isLoading",
            ]),
            isLoadingData() {
                return (
                    this.isLoading);
            },
        },
        methods: {
            ...mapActions({
                search: "search/search"
            }),

            onFocus() {
              router.push("/search").catch(() => {
              });
            }
            ,

            onKeyUp(e) {
                const {value} = e.target;

                if (value !== "") {
                    this.$router.replace({
                        name: "search-result",
                        params: {query: value}
                    }).catch(() => {
                    });
                    this.search(value);
                }
            }
            ,
            getSearchResult() {
                const searchValue = this.$refs.my_input.value;

                if (searchValue !== "") {
                    this.$router.replace({
                        name: "search-result",
                        params: {query: searchValue}
                    }).catch(() => {
                    });
                    this.search(searchValue);
                }
            }
        }
    }
    ;
</script>

<style lang="sass" scoped>

  ::placeholder
    font-size: 0.85em


  .search-form
    width: 100%
    position: relative
    display: flex
    &__input
      width: 100%
      border: 3px solid $c-green
      border-right: none
      padding: 5px
      height: 20px
      border-radius: 5px 0 0 5px
      outline: none
      color: $c-shark

      &:focus
        color: $c-shark

    &__button
      border: 1px solid $c-green
      background: $c-green
      text-align: center
      color: $c-shark
      border-radius: 0 5px 5px 0
      cursor: pointer
      font-size: 20px

</style>
