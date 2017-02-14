import React from 'react'
import Filter from '../../../src/components/Filter'
import './Filters.css'

export const Filters = ({
  filters,
  onChange
}) => {
  const children = Object.keys(filters).map((filterId) => {
    const filter = filters[filterId]
    return (
      <Filter
        className={'ojeans-filter'}
        key={filter.id}
        id={filter.id}
        name={filter.display}
        placeholder={'Please select'}
        options={filter.data}
        onChange={onChange}
      />
    )
  })
  return (
    <div className="App_filters">
      <h3>Filters</h3>
      <div className="App_filtersWrap">
        {children}
      </div>
    </div>
  )
}

Filters.propTypes = {
  filters: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired
}

export default Filters
