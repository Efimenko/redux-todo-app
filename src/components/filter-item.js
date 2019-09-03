import React from 'react'
import {connect} from 'react-redux'

const FilterItem = ({filter, children, activeFilter, dispatch}) => {
  const onChange = ({target: {checked}}) => {
    if (checked) {
      dispatch({type: 'CHANGE_FILTER', payload: filter})
    }
  }
  return (
    <React.Fragment>
      <label htmlFor={filter}>{children}</label>
      <input type="radio" name="filter" id={filter} onChange={onChange} checked={filter === activeFilter}/>
    </React.Fragment>
  )
}

export default connect(({activeFilter}) => ({activeFilter}))(FilterItem)