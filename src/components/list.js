import React from 'react'
import {connect} from 'react-redux'

const List = ({items, dispatch}) => {
  const toggleComplete = (id, isComplete) => {
    dispatch({type: 'TOGGLE_ITEM', payload: {id, isComplete}})
  }

  return items ? (
    <ul>
      {items.map(item => <li key={item.id}>
        <input id={item.id} type="checkbox" checked={item.isComplete} onChange={event => toggleComplete(item.id, event.target.checked)} />
        <label htmlFor={item.id}>
          {item.value}
        </label>
      </li>)}
    </ul>
  ) : null
}

export default connect(({items}) => ({items}))(List)