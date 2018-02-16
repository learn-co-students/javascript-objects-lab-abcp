// 1 begins
var recipes = { peanut:'butter'}
// 2 begins
function updateObjectWithKeyAndValue(object, key, value){
  object = { prop: 1 }
  object[key]= value
  return object
}
// 3 begins
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
//  object = { prop: 1 }
  object[key]= value
  return object
}
// 4 begins
function deleteFromObjectByKey(object, key){
//console.log (object)
  var object = Object.assign({}, object)
  delete object[key]
//  var object = { prop: 1 }
  return object
}
// 5 begins
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
