// Main entry point for the project
export const version = '1.0.0'

export function sayHello(name: string = 'Jane'): string {
  return `hello ${name}!`
}

// Entry point for running the script
if (require.main === module) {
  console.log(sayHello())
} 