import React from 'react'
import renderer from 'react-test-renderer'
import Filter from './Filter'

test('Filter renders correctly', () => {
  const component = renderer.create(
    <Filter
      id='gender'
      name='Gender'
      placeholder='Please select'
      options={['male', 'female']}
      onChange={console.log}/>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
