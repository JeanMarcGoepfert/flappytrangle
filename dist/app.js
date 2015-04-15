'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
  value: true
});

var Triangle = (function () {
  function Triangle(a, b, c) {
    _classCallCheck(this, Triangle);

    this.sorted = [a, b, c].sort(function (a, b) {
      return a - b;
    });
  }

  _createClass(Triangle, [{
    key: 'kind',
    value: function kind() {
      if (this.sorted[0] + this.sorted[1] <= this.sorted[2]) throw 'nope';
      return ['equilateral', 'isosceles', 'scalene'][new Set(this.sorted).size - 1];
    }
  }]);

  return Triangle;
})();

exports['default'] = Triangle;
module.exports = exports['default'];