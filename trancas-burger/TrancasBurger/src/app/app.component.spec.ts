describe('Prueba principal', () => {
  it("Checar si 1 + 1 = 2", () => {
    expect(1 + 1).toBe(2);
  });

  it("Checar si a es Truthy", () => {
    const a = {};
    expect(a).toBeTruthy();
  });
});
