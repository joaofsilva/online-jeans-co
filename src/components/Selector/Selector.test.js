import React from 'react'
import renderer from 'react-test-renderer'
import Selector from './Selector'
import selectors from '../../../data/selectors'

test('Selector renders correctly', () => {
  const component = renderer.create(
    <Selector
      selectors={selectors}
      onChange={console.log} />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
