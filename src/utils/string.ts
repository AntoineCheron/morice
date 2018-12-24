export function separateWordsWithSpaces(s: string) {
  return s.split('')
    .map(char => (char == char.toUpperCase() ? ' ' : '') + char )
    .join('')
}