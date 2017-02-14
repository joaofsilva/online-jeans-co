import React, { Component } from 'react'
import { Breadcrumb, Layout, Menu } from 'antd';
import data from '../data'
import selectors from '../data/selectors'
import utils from '../src/utils'
import Selector from '../src/components/Selector'
import Filters from '../src/components/Filters'
import Results from '../src/components/Results'
import logo from './logo.svg'
import './App.css'
const { Header, Content, Footer } = Layout

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      selector: null,
      selectedFilters: {},
      enabledFilters: {},
      results: []
    }
    this.onSelectorChange = this.onSelectorChange.bind(this)
    this.onFilterChange = this.onFilterChange.bind(this)
  }

  onSelectorChange (value) {
    const results = utils.query(data, value, {})
    const filters = utils.deepmerge({}, selectors)
    delete filters[value]

    this.setState({
      selector: value,
      selectedFilters: {},
      enabledFilters: filters,
      results
    })
  }

  onFilterChange (id, value) {
    const filter = {}
    filter[id] = value
    const selectedFilters = utils.deepmerge(this.state.selectedFilters, filter)
    const results = utils.query(data, this.state.selector, selectedFilters)

    this.setState({
      selectedFilters,
      results
    })
  }

  render () {
    return (
      <div className="App">
        <Layout className="layout">

          <Header className={'App_header'}>
            <div className="logo">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">Sales Statistics</Menu.Item>
            </Menu>
          </Header>

          <Content className={'App_content'}>
            <Breadcrumb className={'App_breadcrumbs'}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Sales Statistics</Breadcrumb.Item>
            </Breadcrumb>
            <div className={'App_main'}>
              <Selector selectors={selectors} onChange={this.onSelectorChange} />
              { this.state.selector ?
                <Filters filters={this.state.enabledFilters} onChange={this.onFilterChange}/>
                : null
              }
              { this.state.selector ?
                <Results type={this.state.selector} results={this.state.results}/>
                : null
              }
            </div>
          </Content>

          <Footer className={'App_footer'}>
            Credit Suisse Test &bull; Online Jeans Retailer Test &bull; 2017 &bull; Created by <a href={'https://www.linkedin.com/in/joão-silva-9745a826'} target='_blank'>João Silva</a>
          </Footer>

        </Layout>

      </div>
    )
  }
}

export default App;
