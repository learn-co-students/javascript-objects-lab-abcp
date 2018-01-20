//Omgosh, a gif from my generation on this lab page. It's *Darling*

var recipes = {
  milk: "one cup",
  chocolate: "two squares",
  vanilla: "1/2 teaspoon",
  flour: "two cups"
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
  //return Object.assign({}, object, {key:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]=value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObj =  Object.assign({}, object);
  delete newObj[key];
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object
}