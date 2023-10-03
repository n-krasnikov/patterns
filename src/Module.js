const Module = (() => {
  const PI = 3.14

  const length = (radius) => 2*PI*radius;
  const square = (radius) => PI*(radius**2);

  return {
    length: (radius) => length(radius),
    square: (radius) => square(radius),
  };
})();

export default Module;
