export default (array) => {
  return array.filter(item => !!item.length)[0]
}
