var recipes = {sandwich: "bread", sushi: "crab"}

function updateObjectWithKeyAndValue(object, key, value){
var newObject =  Object.assign({}, object, {[key]: value})
return newObject;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
return Object.assign(object, {[key]: value})
}

function deleteFromObjectByKey(object, key){
var newObj = Object.assign({}, object)
return delete newObj.key;
}

function destructivelyDeleteFromObjectByKey(object, key){
return delete object[key];
    }
    
