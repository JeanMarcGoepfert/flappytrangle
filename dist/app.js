'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
  value: true
});

var Triangle = (function () {
  function Triangle(a, b, c) {
    _classCallCheck(this, Triangle);

    this.a = a;
    this.b = b;
    this.c = c;
  }

  _createClass(Triangle, [{
    key: 'kind',
    value: function kind() {
      if (this.invalid()) throw 'invalid triangle';
      if (this.a === this.b && this.b === this.c) {
        return 'equilateral';
      }
      if (this.a === this.b || this.b === this.c || this.c === this.a) {
        return 'isosceles';
      }
      if (this.a !== this.b && this.b !== this.c && this.c !== this.a) {
        return 'scalene';
      }
    }
  }, {
    key: 'invalid',
    value: function invalid() {
      return !(this.a + this.b > this.c && this.b + this.c > this.a && this.c + this.a > this.b);
    }
  }, {
    key: 'equilateral',
    value: function equilateral(sides) {
      this.a === this.b;
    }
  }]);

  return Triangle;
})();

exports['default'] = Triangle;
module.exports = exports['default'];