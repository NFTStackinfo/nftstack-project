export function truncate(fullStr, strLen, separator) {
  const realStrLength = strLen + separator.length

  if (fullStr.length <= realStrLength) return fullStr

  separator = separator || "..."

  const sepLen = separator.length,
    charsToShow = realStrLength - sepLen,
    frontChars = Math.ceil(charsToShow / 2),
    backChars = Math.floor(charsToShow / 2)

  return fullStr.substring(0, frontChars) +
    separator +
    fullStr.substring(fullStr.length - backChars)
}

export const addressFormat = address => (
  address?.substring(0, 6) + " ... " + address?.substring(address.length - 4, address.length)
)
