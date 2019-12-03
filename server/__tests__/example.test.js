function soma(a, b) {
  return a + b;
}

test('a soma de 4 mais 5 =e igual a 9', () => {
  const result = soma(5, 4);
  expect(result).toBe(9);
});
