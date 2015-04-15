export default class Triangle {
  constructor(a, b, c) {
    this.sorted = [a, b, c].sort((a, b) => a - b);
  }

  kind() {
    if (this.sorted[0] + this.sorted[1] <= this.sorted[2]) throw 'nope';
    return ['equilateral', 'isosceles', 'scalene'][new Set(this.sorted).size - 1];
  }
}
