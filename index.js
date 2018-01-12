var recipes = new Object({});

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({recipes}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  delete object.key;
}

function deleteFromObjectByKey(object, key) {

  var newObj = Object.assign({}, object)

  newObj // {foo: 'bar'}

  delete newObj[key] // true

  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
