import Model from './model'

test('new works', () => {
  expect(new Model).toBeInstanceOf(Model)
})

test('model structure', () => {
  expect(new Model).toEqual(expect.objectContaining({
    $collection: expect.any(Array),
    record: expect.any(Function),
    all: expect.any(Function),
    find: expect.any(Function),
    update: expect.any(Function),
  }))
})
