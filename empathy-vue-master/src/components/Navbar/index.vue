<template>
  <nav class="navbar">
    <navbar-search />
  </nav>
</template>

<script>
    import NavbarSearch from "./NavbarSearch";

    export default {
        name: "Navbar",

        components: {
            NavbarSearch,
        }
    };
</script>

<style scoped lang="sass">
    .navbar
        display: flex
        height: 4em
        background: $c-shark
        align-items: center
        justify-content: center


        .navbar-search
            display: flex
            align-items: center
            margin-left: 6px

        .navbar-nav
            margin: auto 30px auto auto
</style>
