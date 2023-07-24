const { Triangle, Circle, Square } = require('./shapes.js');

describe('Shapes', () => {
  test('Triangle should render correctly', () => {
    const triangle = new Triangle(0, 0, 100, 'blue');
    const expected = '<polygon points="150, 18 244, 182 56, 182" fill="blue"/>';
    expect(triangle.render()).toBe(expected);
  });

  test('Circle should render correctly', () => {
    const circle = new Circle(0, 0, 50, 'green');
    const expected = '<circle cx=\"25\" cy=\"25\" r=\"25\" fill=\"green\"/>';
    expect(circle.render()).toBe(expected);
  });

  test('Square should render correctly', () => {
    const square = new Square(0, 0, 100, 'red');
    const expected = '<rect x=\"50\" y=\"50\" width=\"200\" height=\"200\" fill=\"red\"/>';
    expect(square.render()).toBe(expected);
  });
});
