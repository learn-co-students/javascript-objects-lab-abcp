var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  //Make a copy of the object 
  var newObject = Object.assign({},object);
  //Delete the key from the object copy
  delete newObject[key];
  //Return the new object with key removed
  return newObject;
}

function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key];
  return object;
}