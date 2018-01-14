//1
var recipes = {pizza:"farina"};

//2
function updateObjectWithKeyAndValue(recipes,key,value) {
  return Object.assign({}, recipes, {[key]: value})
};

//3
function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value
  return recipes
}
//4
function deleteFromObjectByKey(recipes, key) {
  var newRecipes = Object.assign({},recipes);
  delete newRecipes[key];
  return newRecipes
}

//5
function destructivelyDeleteFromObjectByKey(recipes, key){
  delete recipes[key]
  return recipes
}
