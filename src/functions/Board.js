export class Game {
  constructor() {
    this.winner = null
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]
    this.player = 'X'
    this.winning_lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
  }

  changePlayer() {
    this.player = this.player === 'O' ? 'X' : 'O'
  }

  calculateWinner() {
    const flatBoard = this.board.flat()
    this.winning_lines.forEach(line => {
      const [a, b, c] = line
      if (flatBoard[a] && flatBoard[a] === flatBoard[b] && flatBoard[a] === flatBoard[c]) {
        this.winner = flatBoard[a]
      }
    })
  }

  move(x, y) {
    if (this.winner) return
    if (this.board[x][y] != '') return
    this.board[x][y] = this.player
    this.changePlayer()
    this.calculateWinner()
  }
}
