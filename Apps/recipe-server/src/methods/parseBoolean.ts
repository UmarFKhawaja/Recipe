export function parseBoolean(key: string, defaultValue: boolean): boolean {
  if (`${process.env[key]}`.toLowerCase()  === 'false') {
    return false;
  } else if (`${process.env[key]}`.toLowerCase() === 'true') {
    return true;
  } else {
    return defaultValue;
  }
}
