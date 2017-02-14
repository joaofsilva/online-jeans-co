import React from 'react'
import renderer from 'react-test-renderer'
import Results from './Results'

test('Results render correctly', () => {
  const component = renderer.create(
    <Results
      type='manufacturer'
      results={[]} />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
