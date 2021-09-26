<template>
  <div
    id="app"
    class="app"
  >
    <app-layout />
  </div>
</template>

<script>
    import AppLayout from "@/layouts/AppLayout";
    import {mapActions} from "vuex";

    export default {
        name: "App",

        components: {
            AppLayout,
        },
        methods: {
            ...mapActions({
                init: "app/init",
            })
        },

        created() {
            this.init();
        }
    };
</script>

<style>
</style>
