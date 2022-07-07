export const dateFormat = (date) => {
  const months = [
    'January', 'February',
    'March', 'April', 'May',
    'June', 'July', 'August',
    'September', 'October', 'November',
    'December'
  ]

  const monthName = months[date.getMonth()]

  return `${monthName} ${date.getDate()}, ${date.getFullYear()}`
}
