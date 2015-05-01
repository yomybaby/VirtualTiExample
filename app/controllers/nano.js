var args = arguments[0] || {};
var nano = tirequire("nano");

var colors = ['aqua', 'black', 'blue', 'brown', 'cyan', 'darkgray', 'fuchsia', 'gray', 'green', 'lightgray', 'lime', 'magenta', 'maroon', 'navy', 'olive', 'orange', 'pink', 'purple', 'red', 'silver', 'teal', 'white', 'yellow'];

var colors100 = [];
function update100Color(){
  for(var i=0;i<100;i++){
    colors100['idx'+i]=colors[_.random(0, 4)];
  }
}
function update2Color(){
  for(var i=0;i<2;i++){
    colors100['idx'+i]=colors[_.random(0, 4)];
  }
}
update100Color();

var $model = {
  person : {
    first : 'jong',
    last : 'lee'
  },
  colors : colors100
};

var cnt=0;
var start = new Date();
var itvId = setInterval(function() {
	if(++cnt>100) {
		clearInterval(itvId);
		console.log(new Date() - start);
	}
	update100Color();
  // update2Color();
  nano.apply();
	$.cntLabel.text = cnt;
},10);

nano($,$model);
