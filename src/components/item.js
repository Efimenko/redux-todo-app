import React from 'react'

const Item = ({id, isComplete, value, toggleComplete, deleteItem}) => (
  <li key={id}>
        <input id={id} type="checkbox" checked={isComplete} onChange={event => toggleComplete(id, event.target.checked)} />
        <label htmlFor={id} style={{textDecoration: isComplete ? 'line-through' : 'none'}}>
          {value}
        </label>
        <button type="button" title="Remove item" onClick={() => deleteItem(id)}>X</button>
      </li>
)

export default Item