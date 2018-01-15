var recipes = new Object();

function updateObjectWithKeyAndValue(obj, key, value) {
  var newObj = Object.assign({},obj,{[key]:value});
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromObjectByKey(obj,keyForRemove) {
  var newObj = Object.assign({},obj);
  delete newObj[keyForRemove];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(obj,keyForRemove) {
  delete obj[keyForRemove];
  return obj;
}