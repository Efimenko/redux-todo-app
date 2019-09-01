import React from 'react'
import {connect} from 'react-redux'
import Item from './item'

const List = ({items, dispatch}) => {
  const toggleComplete = (id, isComplete) => {
    dispatch({type: 'TOGGLE_ITEM', payload: {id, isComplete}})
  }

  const deleteItem = id => {
    dispatch({type: 'DELETE_ITEM', payload: id})
  }

  return items ? (
    <ul>
      {items.map(item => <Item toggleComplete={toggleComplete} deleteItem={deleteItem} {...item}/>)}
    </ul>
  ) : null
}

export default connect(({items}) => ({items}))(List)