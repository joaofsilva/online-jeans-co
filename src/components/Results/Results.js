import React from 'react'
import { Table } from 'antd';
import './Results.css'

export const Results = ({
  type,
  results
}) => {
  if (type && results && results.length) {
    const columns = [
      {
        title: 'Rank',
        dataIndex: 'rank',
        key: 'rank'
      },
      {
        title: type.charAt(0).toUpperCase() + type.slice(1),
        dataIndex: 'key',
        key: 'key'
      },
      {
        title: 'Count',
        dataIndex: 'count',
        key: 'count',
      }
    ]
    return (
      <div className='App_results'>
        <h3 className='App_resultsHeading'>Results</h3>
        <Table dataSource={results} columns={columns} />
      </div>
    )
  }
  else {
    return (
      <p className='ojeans-noResults'>No results found! Try changing your criteria.</p>
    )
  }
}

Results.propTypes = {
  type: React.PropTypes.string,
  results: React.PropTypes.arrayOf(React.PropTypes.object)
}

export default Results
