import { test, expect } from 'vitest'
import { calculateWinner } from '../functions/BoardFunctions'

describe('calculateWinner', () => {

  test ('not winning in empty board', () => {
    expect(calculateWinner(
      ['', '', '',
       '', '', '',
       '', '', '']
      )).toEqual(null)
  })

  test ('not winning in incomplete board', () => {
    expect(calculateWinner([
      '', 'O', '',
      'X', 'O', '',
      'X', 'X', 'O'
    ])).toEqual(null)
  })

  test ('winning in board', () => {
    expect(calculateWinner([
      'X', 'O', '',
      'X', 'O', '',
      'X', 'X', 'O'
    ])).toEqual('X')
  })

})
