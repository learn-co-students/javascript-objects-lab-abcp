var recipes = {}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function updateObjectWithKey(obj, key) {

}

function deleteFromObjectByKey(obj, key) {
  var newObj = Object.assign({}, obj)
  delete newObj.key
}