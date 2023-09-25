export function parseNumber(key: string, defaultValue: number): number {
  return parseInt(process.env[key] || `${defaultValue}`) || defaultValue;
}
