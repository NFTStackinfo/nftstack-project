export const dateFormat = (date) => {
  const dateObj = new Date(date);

  const months = [
    'January', 'February',
    'March', 'April', 'May',
    'June', 'July', 'August',
    'September', 'October', 'November',
    'December'
  ]

  const monthName = months[dateObj.getMonth()]

  return `${monthName} ${dateObj.getDate()}, ${dateObj.getFullYear()}`
}
