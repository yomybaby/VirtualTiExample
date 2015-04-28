var args = arguments[0] || {};


var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');
var count = 0;
// We need some app data. Here we just store a count.

// 1: Create a function that declares what the DOM should look like

var colors = ['aqua', 'black', 'blue', 'brown', 'cyan', 'darkgray', 'fuchsia', 'gray', 'green', 'lightgray', 'lime', 'magenta', 'maroon', 'navy', 'olive', 'orange', 'pink', 'purple', 'red', 'silver', 'teal', 'white', 'yellow'];

function render(count) {
	var cells = _.map(_.range(100), function(idx) {
		return h('View', {
			namespace : 'UI',
			style : {
				backgroundColor : colors[_.random(0, 4)], //colors[(idx + count) % colors.length],
				width : 30,
				height : 30,
				// top : parseInt(idx / 10) * 30,
				// left : (idx % 10) * 30
			}
		}, [h('Label', {
			namespace : 'UI',
			style : {
				text : idx
			}
		}, [])]);
	});

	return h('View', {
		namespace : 'UI',
		style : {
			borderColor : 'blue',
			layout : 'horizontal'
		}
	}, cells);
}

// 2: Initialise the document
var tree = render(count);
// We need an initial tree
var rootNode = createElement(tree, {
	warn : console.log
});

// Create an initial root DOM node ...
$.getView().add(rootNode);

// 3: Wire up the update logic
setInterval(function() {
	var newTree = render(count);
	var patches = diff(tree, newTree);
	rootNode = patch(rootNode, patches);
	tree = newTree;
}, 50);
