var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  var obj = Object.assign({}, object, {[key] : value});
  return obj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, {[key]:value});
}

function deleteFromObjectByKey(object, key){
  var x = Object.assign({}, object);
  delete x[key];
  return x;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
