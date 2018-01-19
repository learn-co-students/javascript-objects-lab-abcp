var recipes = new Object()


function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  var object_two = Object.assign({}, object)

  return object_two
}

function updateObjectWithKeyAndValue(object, key, value){
  var object_two = Object.assign({}, object)
  object_two[key] = value
  return object_two
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var object_two =  Object.assign({}, object)
  object_two[key] = undefined
  return object_two
}

function destructivelyDeleteFromObjectByKey(object, key) {
  object[key] = undefined
  return object
}
