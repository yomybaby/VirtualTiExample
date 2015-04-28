$.index.open();

function onItemClick(e){
	var ctrl = Alloy.createController(e.itemId);
	$.index.openWindow(ctrl.getView());
}
