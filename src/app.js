export default class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  kind() {
    if (this.invalid()) throw "invalid triangle";
    if (this.a === this.b && this.b === this.c) { return 'equilateral'; }
    if (this.a === this.b || this.b === this.c || this.c === this.a) { return 'isosceles'; }
    if (this.a !== this.b && this.b !== this.c && this.c !== this.a) { return 'scalene'; }
  }

  invalid() {
    return !(this.a + this.b > this.c &&
             this.b + this.c > this.a &&
             this.c + this.a > this.b);
  }

  equilateral(sides) {
    this.a === this.b
  }
}
