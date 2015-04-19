

$.index.open();


var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');

// 1: Create a function that declares what the DOM should look like

function render(count)  {
    return h('View', {
    	namespace : 'UI',
        style: {
            borderColor: 'blue',
            borderWidth : 1,
            width: (100 + count),
            height: (100 + count),
        }
    }, [
    	h('Label', {
	    	namespace : 'UI',
	        style: {
	            textAlign: 'center',
	            borderColor: 'red',
	            borderWidth : 1,
	            width: Ti.UI.SIZE,
	            height: Ti.UI.FILL,
	            text : count
	        }
	    }, [
	    	//String(count)
	    ])
    ]);
}



// 2: Initialise the document

var count = 0;      // We need some app data. Here we just store a count.

var tree = render(count);               // We need an initial tree
console.log(tree);

var rootNode = createElement(tree,{
	warn : console.log
});     // Create an initial root DOM node ...
console.log(rootNode);
$.index.add(rootNode);
//document.body.appendChild(rootNode);    // ... and it should be in the document

// 3: Wire up the update logic
setInterval(function () {
      // change Status
      count++;
	
	  // re-render
      var newTree = render(count);
      var patches = diff(tree, newTree);
      console.log(patches);
      rootNode = patch(rootNode, patches);
      tree = newTree;
}, 1000);
