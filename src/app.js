export default class Triangle {
  constructor(a, b, c) {
    this.sides = [a, b, c];
  }

  kind() {
    let sides = this.sides.sort((a, b) => a - b);
    if ((sides[0] + sides[1] <= sides[2])) throw 'nope';
    return ['equilateral', 'isosceles', 'scalene'][new Set(sides).size - 1];
  }
}
