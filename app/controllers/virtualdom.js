var args = arguments[0] || {};


var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');
var count = 0;
// We need some app data. Here we just store a count.

// 1: Create a function that declares what the DOM should look like

var colors = ['aqua', 'black', 'blue', 'brown', 'cyan', 'darkgray', 'fuchsia', 'gray', 'green', 'lightgray', 'lime', 'magenta', 'maroon', 'navy', 'olive', 'orange', 'pink', 'purple', 'red', 'silver', 'teal', 'white', 'yellow'];
var cnt = 0;
function render(count) {
	var cntLabel = h('Label', {
		namespace : 'UI',
		style : {
			text : cnt,
			width : Ti.UI.FILL,
			height : 30
		}
	}, []);
	var cells = _.map(_.range(100), function(idx) {
		return h('View', {
			namespace : 'UI',
			style : {
				backgroundColor : colors[_.random(0, 4)], //colors[(idx + count) % colors.length],
				width : 32,
				height : 32,
				// top : parseInt(idx / 10) * 32,
				// left : (idx % 10) * 32
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
	}, [cntLabel].concat(cells));
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
var start = new Date();
var itvId = setInterval(function() {
	if(++cnt>100) {
		clearInterval(itvId);
		console.log(new Date() - start);
	}else{
		var newTree = render(count);
		var patches = diff(tree, newTree);
		rootNode = patch(rootNode, patches);
		tree = newTree;
	}
}, 10);
