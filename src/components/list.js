import React from 'react'
import {connect} from 'react-redux'

const List = ({items, dispatch}) => {
  const toggleComplete = (id, isComplete) => {
    dispatch({type: 'TOGGLE_ITEM', payload: {id, isComplete}})
  }

  const deleteItem = id => {
    dispatch({type: 'DELETE_ITEM', payload: id})
  }

  return items ? (
    <ul>
      {items.map(item => <li key={item.id}>
        <input id={item.id} type="checkbox" checked={item.isComplete} onChange={event => toggleComplete(item.id, event.target.checked)} />
        <label htmlFor={item.id} style={{textDecoration: item.isComplete ? 'line-through' : 'none'}}>
          {item.value}
        </label>
        <button type="button" title="Remove item" onClick={() => deleteItem(item.id)}>X</button>
      </li>)}
    </ul>
  ) : null
}

export default connect(({items}) => ({items}))(List)