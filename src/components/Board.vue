<template>
  <div class="container">
    <h2 v-if="winner">Winner {{ winner }}</h2>
    <h2 v-else>Players Move: {{ player }}</h2>
    <button @click="reset">
      Reset
    </button>

    <div v-for="(_, x) in 3" :key="x" class="row">
      <button v-for="(_, y) in 3" :key="y" class="square" @click="move(x, y)">
        {{ squares[x][y] }}
      </button>
    </div>
  </div>
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

<style scoped>
.square {
  background: white;
  font-size: 70px;
  height: 100px;
  width: 100px;
}
</style>
