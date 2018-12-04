describe('expectations', () => {
  // Use .toBe for simple comparisons
  expect('Some String').toBe('Some String')
  expect(13).toBe(13)
  expect(1+2).toBe(3)

  // Use .toEqual when comparing complex types
  expect({ type: 'array' }).toEqual({ type: 'array'})
  expect([13]).toEqual([13])
  expect([...[1,2,3]]).toEqual([1,2,3])

  // Use property Matchers if the final value is unknown
  const result = {
    value: Date.now() // A random Number
  }

  expect(result).toEqual({
    value: expect.any(Number)
  })
})
