var recipes = {eggs : "3", flour : "1 cup", chocolate : "3 cups"}
var newObj

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign( object, {[key] : value})
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key] : value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign( object, object, {[key] : value})
}

function deleteFromObjectByKey(object, key) {
  newObj = Object.assign( {}, object)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return Object.assign(object, delete object[key])
}
