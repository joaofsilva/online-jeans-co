import React from 'react'
import { Select } from 'antd';
import './Filter.css'

export const Filter = ({
  id,
  name,
  placeholder,
  options,
  onChange
}) => {
  const selectOptions = options.map((option, index) => (
    <Select.Option key={index} value={option}>{option}</Select.Option>
  ))
  const handleChange = (value) => {
    onChange(id, value)
  }
  return (
    <div className='App_filter'>
      <label className='App_filterLabel'>{name}</label>
      <Select
        className='App_filterSelect'
        multiple
        placeholder={placeholder}
        onChange={handleChange}
      >
        {selectOptions}
      </Select>
    </div>
  )
}

Filter.propTypes = {
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string.isRequired,
  options: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  onChange: React.PropTypes.func
}

export default Filter
