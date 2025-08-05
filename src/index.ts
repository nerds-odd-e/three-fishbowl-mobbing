// Main entry point for the project
export const version = '1.0.0'

export function sayHello(name: string = 'Jane'): string {
  return `hello ${name}!`
}

import { compareHands } from './utils/poker'

// Entry point for running the script
if (require.main === module) {
  const args = process.argv.slice(2)
  
  if (args.length === 2) {
    const hand1 = args[0]
    const hand2 = args[1]
    const result = compareHands(hand1, hand2)
    console.log(`Hand 1: ${hand1}`)
    console.log(`Hand 2: ${hand2}`)
    console.log(`Result: ${result ? 'Hand 1 wins' : 'Hand 2 wins'}`)
  } else {
    console.log('Usage: npm start <hand1> <hand2>')
    console.log('Example: npm start 10H5H4S3H2C 9H5H4S3H2C')
  }
} 