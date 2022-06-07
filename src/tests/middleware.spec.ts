import resize from './../middleware';
it('tests resizing images', () => {
  expect(async () => {
    await resize(
      __dirname + '/images/full/encenadaport.jpg',
      300,
      150,
      'encenadaport.jpg',
      __dirname + `/images/thumb/encenadaport300_150`
    );
  }).not.toThrow();
});
