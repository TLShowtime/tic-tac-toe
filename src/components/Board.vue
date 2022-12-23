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

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }

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
