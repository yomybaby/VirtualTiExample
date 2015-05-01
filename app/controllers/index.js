$.index.open();

function onItemClick(e){
	var ctrl = Alloy.createController(e.itemId);
	$.index.openWindow(ctrl.getView());
}

var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');
