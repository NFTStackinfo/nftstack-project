export const regex = {
  email: /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/,
  phone: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im,
  digits: /^[0-9]+$/,
  collectionName: /^(?![0-9])/
}
