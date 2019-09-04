var recipes = {prop: 1, prop2: 2};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value });
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value; 
 return recipes;
}
function deleteFromObjectByKey(object, key){
  var newRecipes = Object.assign({}, Object );
return delete newRecipes.key;
}
function destructivelyDeleteFromObjectByKey(object, key){
  
  return delete object[key];
}
