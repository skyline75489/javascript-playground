if (typeof Object.create !== 'function') {
  Object.create = function (o) {
    var F = function () {};
    F.prototype = o;
    return new F();
  };
}

Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
  return this;
};

Object.method('superior', function (name) {
    var that = this,
    method = that[name];
  return function() {
    return method.apply(that, arguments);
  };
});

var myObject = function() {
  var value = 0;

  return {
    increment: function(inc) {
      value += typeof inc === 'number' ? inc : 1;
    },
    getValue: function() {
      return value;
    }
  };
}();

var mammal = function (spec) {
  var that = {};

  that.get_name = function () {
    return spec.name;
  };
  that.says = function () {
    return spec.saying || '';
  };

  return that;
};

var cat = function (spec) {
  spec.saying = spec.saying || 'meow';
  var that = mammal(spec);
  that.purr = function (n) {
    var i, s = '';
    for (i = 0; i < n; i += 1) {
      if (s) {
        s += '-';
      }
      s += 'r';
    }
    return s;
  };
  that.get_name = function () {
    return that.says() + ' ' + spec.name + ' ' + that.says();
  };
  return that;
};

var coolcat = function (spec) {
  var that = cat(spec),
    super_get_name = that.superior('get_name');
  that.get_name = function (n) {
    return 'like ' + super_get_name() + ' baby';
  };
  return that;
};

var myMammal = mammal({name: 'Herb', saying: 'what'});
var myCat = cat({name: 'Henrietta'});
var myCoolCat = coolcat({name: 'Bix'});

console.log(myMammal.get_name());
console.log(myMammal.says());
// console.log(myMammal.saying);
// saying is undefined, like private property
console.log(myCat.get_name());
console.log(myCoolCat.get_name());
