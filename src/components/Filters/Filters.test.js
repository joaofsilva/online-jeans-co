import React from 'react'
import renderer from 'react-test-renderer'
import Filters from './Filters'
import selectors from '../../../data/selectors'

test('Filters container renders correctly', () => {
  const component = renderer.create(
    <Filters
      filters={selectors}
      onChange={console.log}/>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
