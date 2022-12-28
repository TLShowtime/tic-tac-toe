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
  <button class="btn btn-purple" @click="reset">
    Reset
  </button>
</template>

<script>
  import { ref, computed } from 'vue';
  import { calculateWinner } from '../functions/BoardFunctions';

  export default {
    setup() {
      const player = ref('X')
      const squares = ref([
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ])
      const winner = ref(null)

      const move = (x, y) => {
        if (winner.value) return
        if (squares.value[x][y] != '') return
        squares.value[x][y] = player.value
        player.value = player.value === 'O' ? 'X' : 'O'
        winner.value = calculateWinner(squares.value.flat())
      }

      const reset = () => {
        player.value = 'X'
        squares.value = [
          ['', '', ''],
          ['', '', ''],
          ['', '', '']
        ]
        winner.value = null
      }

      return { winner, player, squares, move, reset }
    }
  }
</script>

<style>
  .btn {
    @apply font-bold text-3xl py-6 px-12 rounded;
  }
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
