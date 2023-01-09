import { test, expect } from 'vitest'
import { Game } from '../functions/Board'

describe('calculateWinner', () => {

  test ('make valid moves in board', () => {
    let gameBoard = new Game()
    gameBoard.move(0, 0)
    gameBoard.move(2, 1)
    expect(gameBoard.board).toEqual([
      ['X', '', ''],
      ['', '', ''],
      ['', 'O', '']
    ])
  })

  test ('do not make invalid moves in board', () => {
    let gameBoard = new Game()
    gameBoard.move(0, 0)
    gameBoard.move(2, 1)
    expect(gameBoard.board).toEqual([
      ['X', '', ''],
      ['', '', ''],
      ['', 'O', '']
    ])
  })

  test ('nobody wins in incomplete board', () => {
    let gameBoard = new Game()
    gameBoard.move(0, 0)
    gameBoard.move(2, 1)
    gameBoard.calculateWinner()
    expect(gameBoard.winner).toEqual(null)
  })

  test ('X wins in incomplete board', () => {
    let gameBoard = new Game()
    gameBoard.move(0, 0)
    gameBoard.move(0, 1)
    gameBoard.move(1, 0)
    gameBoard.move(0, 2)
    gameBoard.move(2, 0)
    gameBoard.calculateWinner()
    expect(gameBoard.winner).toEqual('X')
  })

})
