var chocolateBars = ['snickers','hundred grand','kitkat','skittles']
function addElementToBeginningOfArray(array,element){
  return array.unshift(element)
}
function destructivelyAddElementToBeginningOfArray(array,element){
  array = array.unshift(element)
}
function addelementToEndOfArray(array,element){
  return array.push(element)
}
function destructivelyAddElementToEndOfArray(array,element){
  array = array.push(element)
}