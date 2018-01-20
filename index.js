var recipes={name:"cake",needs:"flour"};
function updateObjectWithKeyAndValue(object, key, value){
  object[key]=value;
  console.log(object);
  return object;
}
function updateObjectWithKeyAndValue(object, key, value){
  const object2 = Object.assign({}, object);
  object2[key]=value;
  return object2;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value;
  console.log(object);
  return object;
}

function deleteFromObjectByKey(object, key){
   const object2=Object.assign({},object);
   console.log(key+"Thisis the key");
  delete object2[key];
  console.log("deleted");
  console.log(object2);
  return object2;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}