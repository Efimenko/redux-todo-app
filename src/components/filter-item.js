import React from 'react'
import {connect} from 'react-redux'
import {changeFilter} from '../actions'

const FilterItem = ({filter, children, activeFilter, dispatch}) => {
  const onChange = ({target: {checked}}) => {
    if (checked) {
      dispatch(changeFilter({filter}))
    }
  }
  return (
    <React.Fragment>
      <input type="radio" name="filter" id={filter} onChange={onChange} checked={filter === activeFilter}/>
      <label htmlFor={filter}>{children}</label>
    </React.Fragment>
  )
}

export default connect(({activeFilter}) => ({activeFilter}))(FilterItem)