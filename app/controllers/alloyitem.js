var args = arguments[0] || {};
var model = args.model;

$.vw.backgroundColor  = model.get('backgroundColor');
$.lb.text = model.get('text');

model.on('change:backgroundColor',function(){
	$.vw.backgroundColor  = model.get('backgroundColor');	
});
