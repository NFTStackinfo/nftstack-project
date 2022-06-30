export const dateFormat = (date) => {
  const months = [
    'January', 'February',
    'March', 'April', 'May',
    'June', 'July', 'August',
    'September', 'October', 'November',
    'December'
  ]

  const days = [
    'Sun', 'Mon', 'Tue', 'Wed',
    'Thu', 'Fri', 'Sat'
  ]

  const monthName = months[date.getMonth()]

  return `${monthName} ${date.getDate()}, ${date.getFullYear()}`
}
