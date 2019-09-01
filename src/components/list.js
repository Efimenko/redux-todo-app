import React from 'react'
import {connect} from 'react-redux'

const List = ({items}) => {
  return items ? (
    <ul>
      {items.map(item => <li key={item.id}>{item.value}</li>)}
    </ul>
  ) : null
}

export default connect(({items}) => ({items}))(List)