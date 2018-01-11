var recipes = {}

function updateObjectWithKeyAndValue(recipes, key, value){
  var newObj = Object.assign({}, recipes)
  newObj[key] = value
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes[key]=value
  return recipes
}

function deleteFromObjectByKey(recipes, key){
  var newObj = Object.assign({}, recipes)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(recipes, key){
  delete recipes[key]
  return recipes
}