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
function accessElementInArray(array,index){
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop()
}
function removeElementFromEndOfArray(array){
  return array.slice(0,array.length-1)
}
