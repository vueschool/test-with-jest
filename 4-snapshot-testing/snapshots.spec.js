const user = {
  name: 'Tony Tinkertons',
  age: 42,
  job: 'inventor'
}

test('without snapshots', () => {
  // Let's add the string version of the user Object
  const userString = "{\"name\":\"Tony Tinkerton\",\"age\":42,\"job\":\"inventor\"}"

  // and compare it accordingly
  expect(JSON.stringify(user)).toBe(userString)
})

test('user matches with snapshot', () => {
  expect(user).toMatchSnapshot()
})
