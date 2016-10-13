// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
	//USE document.body, element.childNodes, and element.classList
	var results = [];
  var element = document.body;

	var traverseDom = function(element){
    //check to see if current 'element' NODE contains a list of classes, 'classList'
    //if so,  ALSO see if it contains the className
    if(element.classList && element.classList.contains(className)){
        results.push(element);
      }

    //childnodes (contains elements + text)
    for(var i = 0; i < element.childNodes.length; i++){
      //recurse back to traverseDom() so we can then add each
      //'elementNode' or 'text' (whitespace) to [results]
    	traverseDom(element.childNodes[i]);
    }
  }	//end of traverseDom()

  	traverseDom(element); //1st time - traverseDom(document.body);
  	return results;
};
