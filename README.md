# Three Fishbowl Mobbing

A TypeScript project with unit testing using Vitest.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Build the project:
```bash
npm run build
```

## Development

- **Watch mode**: `npm run dev` - Compiles TypeScript in watch mode
- **Build**: `npm run build` - Compiles TypeScript to JavaScript
- **Clean**: `npm run clean` - Removes build artifacts

## Testing

- **Run tests**: `npm test` - Runs tests in watch mode
- **Run tests once**: `npm run test:run` - Runs tests once and exits
- **Coverage**: `npm run test:coverage` - Runs tests with coverage report
- **Test UI**: `npm run test:ui` - Opens Vitest UI for interactive testing

## Linting

- **Lint**: `npm run lint` - Runs ESLint
- **Fix**: `npm run lint:fix` - Runs ESLint with auto-fix

## Project Structure

```
src/
├── index.ts          # Main entry point
├── types.ts          # Type definitions
└── utils/
    ├── calculator.ts # Calculator implementation
    └── __tests__/    # Test files
        └── calculator.test.ts
```

## Example Usage

```typescript
import { calculator } from './src/utils/calculator'

// Perform calculations
const result = calculator.calculate(10, 5, 'add')
console.log(result.result) // 15

// Get calculation history
const history = calculator.getHistory()
console.log(history)
``` 