import React from 'react'
import {connect} from 'react-redux'
import Item from './item'
import {FILTERS} from '../constants'
import {toggleComplete, deleteItem} from '../actions'

const List = ({items, activeFilter, dispatch}) => {
  const toggleCompleteHandler = (id, isComplete) => {
    dispatch(toggleComplete({id, isComplete}))
  }

  const deleteItemHandler = id => {
    dispatch(deleteItem({id}))
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
      {getFilteredItems().map(item => <Item toggleComplete={toggleCompleteHandler} deleteItem={deleteItemHandler} {...item}/>)}
    </ul>
  ) : null
}

export default connect(({items, activeFilter}) => ({items, activeFilter}))(List)