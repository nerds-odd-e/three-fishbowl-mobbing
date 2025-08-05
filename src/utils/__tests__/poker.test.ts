import { describe, it, expect } from 'vitest'
import { compareHands } from '../poker'

describe('Poker Hand Comparison', () => {
  describe('High Card', () => {
    it('should return true for first hand winning with higher card', () => {
      const hand1 = '10H5H4S3H2C'
      const hand2 = '9H5H4S3H2C'
      expect(compareHands(hand1, hand2)).toBe(true)
    })

    it('should return false for second hand winning with higher card', () => {
      const hand1 = '9H5H4S3H2C'
      const hand2 = '10H5H4S3H2C'
      expect(compareHands(hand1, hand2)).toBe(false)
    })
  })
}) 