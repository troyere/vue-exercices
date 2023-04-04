export function greeter(greeting: string): (name: string) => string {
  return (name: string): string => {
    return `${greeting} ${name}`;
  };
}
