var args = arguments[0] || {};
var nano = tirequire("nano");

var $model = {
  person: {
    first: "David",
    last: "Bankier"
  },
  field:"asdf"
};

nano($,$model);