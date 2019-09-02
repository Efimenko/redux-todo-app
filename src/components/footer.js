import React from 'react'

const Footer = () => {
  return (
    <form>
      <fieldset>
        <legend>Filter</legend>
        <label htmlFor="filter-all">All</label>
        <input type="radio" name="name" id="filter-all" che/>
        <label htmlFor="filter-completed">Completed</label>
        <input type="radio" name="name" id="filter-completed"/>
        <label htmlFor="filter-uncompleted">Uncompleted</label>
        <input type="radio" name="name" id="filter-uncompleted"/>
      </fieldset>
    </form>
  )
}

export default Footer