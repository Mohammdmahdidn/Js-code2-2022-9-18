const a = [2, 3, 4, 9, 6, 8, -1, -48, -5, 15];
console.log(
  a.sort(function compareFn(a, b) {
    return a - b;
  })
);
