<template>
  <div id="app" class="app app-blue">
    <Board/>
  </div>
</template>

<script>
  import Board from "./components/Board.vue";

  export default {
    name: 'App',
    components: { Board }
  }
</script>

<style>
  .app {
    @apply grid h-screen place-items-center
  }
  .app-blue {
    @apply bg-blue-200
  }
</style>
