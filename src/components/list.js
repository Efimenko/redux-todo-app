import React from 'react'
import {connect} from 'react-redux'
import Item from './item'
import {FILTERS, TOGGLE_ITEM, DELETE_ITEM} from '../constants'

const List = ({items, activeFilter, dispatch}) => {
  const toggleComplete = (id, isComplete) => {
    dispatch({type: TOGGLE_ITEM, payload: {id, isComplete}})
  }

  const deleteItem = id => {
    dispatch({type: DELETE_ITEM, payload: id})
  }

  const getFilteredItems = () => {
    switch (activeFilter) {
      case FILTERS.all:
        return items
      case FILTERS.completed:
        return items.filter(({isComplete}) => isComplete)
      case FILTERS.uncompleted:
        return items.filter(({isComplete}) => !isComplete)
      default:
        return items
    }
  }

  return items ? (
    <ul>
      {getFilteredItems().map(item => <Item toggleComplete={toggleComplete} deleteItem={deleteItem} {...item}/>)}
    </ul>
  ) : null
}

export default connect(({items, activeFilter}) => ({items, activeFilter}))(List)