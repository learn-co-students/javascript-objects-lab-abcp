var recipe = { 
  title: 'Bootcamp Prep',
  description: 'Sophie'
};
recipe;

 var updateObjectWithKeyAndValue = {prop: 1};
 
var newObj = Object.assign({}, recipe, updateObjectWithKeyAndValue);
 
newObj;


 
delete newObj.foo // true
 
newObj // {}
 
obj // { foo: 'bar' }
