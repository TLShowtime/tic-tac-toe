<template>
  <div id="app" class="grid h-screen place-items-center bg-blue-200">
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
