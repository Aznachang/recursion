// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  //Recursive Array result
  var result = []; 

  //ARRAY CASE
  if (Array.isArray(obj) ){

    for (var i = 0; i < obj.length; i++){
      //UNDEFINED OR FUNCTION CASE
      if (obj[i] === undefined || typeof obj[i] === 'function'){
        continue;
      }
      result.push( stringifyJSON(obj[i]) );
    }
    return '[' + result + ']';
  }

  //OBJECT CASE
  else if (typeof obj === 'object' && obj){

    for (var key in obj){
      //UNDEFINED OR FUNCTION CASE
      if (obj[key] === undefined || typeof obj[key] === 'function'){
        continue;
      }
      result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]) );
    }
    return '{' + result + '}';
  }

  //STRING CASE
  else if ( typeof obj === 'string'){
    return '"' + obj + '"';
  }

  return '' + obj;
};