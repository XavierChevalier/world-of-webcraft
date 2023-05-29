import { hello } from './hello'

describe(hello.name, () => {
  it('should display "Hello John!"', () => {
    expect(hello('John')).toBe('Hello John!')
  })
})
