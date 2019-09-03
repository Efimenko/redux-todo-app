import React from 'react'
import FilterItem from './filter-item'
import {FILTERS} from '../constants'

const Footer = () => (
  <form>
    <fieldset>
      <legend>Filter</legend>
      <FilterItem filter={FILTERS.filterAll}>All</FilterItem>
      <FilterItem filter={FILTERS.filterCompleted}>Completed</FilterItem>
      <FilterItem filter={FILTERS.filterUncompleted}>Uncompleted</FilterItem>
    </fieldset>
  </form>
)

export default Footer