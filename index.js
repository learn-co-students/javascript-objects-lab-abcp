var recipes = { 
  cake: 'chocolate',
  pancakes: 'flour'
}

function updateObjectWithKeyAndValue(obj, key, val){
  
  var newObj = Object.assign({}, obj)
  newObj[key] = val
  
  return newObj 
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, val){
  
   obj[key] = val;
   
   return obj
}

function deleteFromObjectByKey(obj, key){
  
  var newObj = Object.assign({}, {obj});
  
  delete newObj.key; 
  
  return newObj;
  
}

function destructivelyDeleteFromObjectByKey(object, key){
  
  delete object[key];
  
  return object
}