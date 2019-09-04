import React from 'react'
import FilterItem from './filter-item'
import {FILTERS} from '../constants'

const Footer = () => (
  <form>
    <fieldset>
      <legend>Filter</legend>
      <FilterItem filter={FILTERS.all}>All</FilterItem>
      <FilterItem filter={FILTERS.completed}>Completed</FilterItem>
      <FilterItem filter={FILTERS.uncompleted}>Uncompleted</FilterItem>
    </fieldset>
  </form>
)

export default Footer