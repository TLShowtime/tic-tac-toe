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
    const flat_board = this.board.flat()
    this.winning_lines.forEach(line => {
      const [a, b, c] = line
      if (flat_board[a] && flat_board[a] === flat_board[b] && flat_board[a] === flat_board[c]) {
        this.winner = flat_board[a]
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
