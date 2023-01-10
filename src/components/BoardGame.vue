<template>
  <div class="font-mono text-5xl" >
    <h2 v-if="winner">Winner {{ winner }} 😊🎉</h2>
    <h2 v-else>Player Move: {{ player }}</h2>
  </div>
  <div class="flex items-center mb-8">
    <div v-for="(_, x) in 3" :key="x">
      <button v-for="(_, y) in 3" :key="y" class="square" @click="move(x, y)">
        {{ squares[x][y] }}
      </button>
    </div>
  </div>
  <button class="font-bold text-3xl py-6 px-12 rounded btn-purple" @click="reset">
    Reset
  </button>
</template>

<script>
  import { ref } from 'vue';
  import { Game } from '../functions/Board';

  export default {
    setup() {
      const gameboard = ref(new Game())
      const player = ref(gameboard.value.player)
      const squares = ref(gameboard.value.board)
      const winner = ref(gameboard.value.winner)

      const move = (x, y) => {
        gameboard.value.move(x, y)
        winner.value = gameboard.value.winner

        player.value = gameboard.value.player
        squares.value = gameboard.value.board
      }

      const reset = () => {
        gameboard.value = new Game()

        winner.value = gameboard.value.winner
        squares.value = gameboard.value.board
        player.value = gameboard.value.player
      }

      return { winner, player, squares, move, reset }
    }
  }
</script>

<style>
  .btn-purple {
    @apply bg-purple-600 text-white;
  }
  .btn-purple:hover {
    @apply bg-purple-800;
  }
  .square {
    @apply flex items-center justify-center border border-black bg-white text-7xl h-32 w-32;
  }
  .square:hover {
    @apply hover:bg-gray-300;
  }
</style>
