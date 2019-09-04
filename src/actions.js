import {CHANGE_FILTER, ADD_ITEM, TOGGLE_ITEM, DELETE_ITEM} from './constants'

export const changeFilter = ({filter}) => ({type: CHANGE_FILTER, payload: filter})
export const addItem = ({id, value}) => ({type: ADD_ITEM, payload: {id, value, isComplete: false}})
export const toggleComplete = ({id, isComplete}) => ({type: TOGGLE_ITEM, payload: {id, isComplete}})
export const deleteItem = ({id}) => ({type: DELETE_ITEM, payload: id})