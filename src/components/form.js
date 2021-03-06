import React, { useState } from "react";
import {connect} from 'react-redux'
import {addItem} from '../actions'

const Form = ({dispatch}) => {
  const [value, setValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(addItem({id: Date.now(), value}))
    setValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        placeholder="Add your task"
        onChange={event => setValue(event.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default connect()(Form);
