import './sass/extra.scss';

export default function main() {
  return 'fffhhfh';
}

class Point {
  constructor(x, y) {
      this.x = x;
      this.y = y;
  }
  toString() {
      return `(${this.x}, ${this.y})`;
  }
}

const arr = ['lei', 'feng'];
const isHas = arr.includes('a');