import React from 'react'
import { Select } from 'antd'
import './Selector.css'

export const Selector = ({
  selectors,
  onChange
}) => {
  const options = Object.keys(selectors).map(selector => {
    const opt = selectors[selector]
    return (
      <Select.Option key={opt.id} value={opt.id}>{opt.display}</Select.Option>
    )
  })
  return (
    <div className={'App_selector'}>
      <h3 className={'App_selectorLabel'}>Top selling</h3>
      <Select
        className={'App_selectorSelect'}
        showSearch
        placeholder='Please select'
        optionFilterProp='children'
        onChange={onChange}
        filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        {options}
      </Select>
    </div>
  )
}

Selector.propTypes = {
  selectors: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired
}

export default Selector
