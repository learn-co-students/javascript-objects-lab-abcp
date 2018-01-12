var recipes = {
  flour: '2 cups',
  eggs: '4',
  sugar: '1 cup'
};

function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign({}, object);
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key, value) {
  delete object[key];
  return object;
}