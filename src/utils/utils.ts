export const currencyFormat = (value: number, fractionDigits = 2) => {
  return value.toLocaleString('en-US', { minimumFractionDigits: fractionDigits, maximumFractionDigits: fractionDigits })
}
