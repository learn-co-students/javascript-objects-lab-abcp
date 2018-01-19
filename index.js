var recipes = new Object ({});


var obj = { prop: 1, };

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object, {prop2: value});
  return newObj;
}
  
  updateObjectWithKeyAndValue (obj, prop2, 2);
  
  
  var obj = { prop: 1, };
  
  function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
  }
  
  destructivelyUpdateObjectWithKeyAndValue(obj, "prop2", 2);
  
  var obj = { prop: 1, };
  
  function deleteFromObjectByKey(object, key) {
    var newObj = Object.assign({}, obj)
    newObj
    delete newObj[key]
    return newObj
  }
  
  deleteFromObjectByKey(obj, "prop");
  
  
  
  var obj = { prop: 1, };
  
  function destructivelyDeleteFromObjectByKey (object, key) {
    delete object[key];
    return object;
  }
  
  destructivelyDeleteFromObjectByKey(obj, "prop");