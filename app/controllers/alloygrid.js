var args = arguments[0] || {};

var col = Alloy.createCollection('box');
var children = [];

var colors = ['aqua', 'black', 'blue', 'brown', 'cyan', 'darkgray', 'fuchsia', 'gray', 'green', 'lightgray', 'lime', 'magenta', 'maroon', 'navy', 'olive', 'orange', 'pink', 'purple', 'red', 'silver', 'teal', 'white', 'yellow'];

for(var i=0;i<100;i++){
	col.add({
		backgroundColor : colors[_.random(0, 4)],
		text : i
	});
	children.push(Alloy.createController('alloyitem',{
		model : col.at(i)
	}).getView());
}

setInterval(function(){
	for(var i=0;i<100;i++){
		col.at(i).set('backgroundColor' , colors[_.random(0, 4)]);
	}	
},50);

$.alloygrid.add(children);
