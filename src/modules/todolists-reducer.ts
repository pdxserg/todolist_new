import {v1} from "uuid";
import {FilterValue, TodolistType} from "../App";


 export type removeTodoListAction ={
	type:"REMOVE-TODOLIST"
	payload:{
		id: string
	}
}
export type addTodoListType={
	type:"ADD-TODOLIST"
	payload:{
		title:string
	}
}
export type ChangeTitleTodolistType={
	type:"CHANGE-TITLE",
	payload:{
		id: string,
		title: string
	}
}
export type ChangeFilterTodolistType={
	type: "CHANGE-FILTER"
	payload:{
		id: string,
		filter: FilterValue
	}
}

 type ActionsType = removeTodoListAction
	 |addTodoListType
	 | ChangeTitleTodolistType
	 |ChangeFilterTodolistType

let todolistID1 = v1()
let todolistID2 = v1()

const initialState: TodolistType[] = [
	{ id: todolistID1, title: 'What to learn', filter: 'ALL' },
	{ id: todolistID2, title: 'What to buy', filter: 'ALL' },
]
export const todolistsReducer=(state:TodolistType[]=initialState, action:ActionsType ):TodolistType[]=>{
	switch (action.type){
		case "REMOVE-TODOLIST":{
			return state.filter(i=>i.id !== action.payload.id )
		}

		 case "ADD-TODOLIST":{
			 const newtodolist:TodolistType={ id: todolistID2, title: action.payload.title, filter: 'ALL' }
			 return [ newtodolist, ...state, ]
		 }
		case "CHANGE-TITLE":{
			return state.map(s=>s.id === action.payload.id ?{...s, title:action.payload.title} : s)
		}
		case "CHANGE-FILTER":{
			return state.map(s=> s.id === action.payload.id?{...s, filter:action.payload.filter} :s)
		}

		 default:
			return state

	}
}

export const removeTodolistAC = (todolistId: string): removeTodoListAction => {
	return {
		type: 'REMOVE-TODOLIST',
		payload: {
			id: todolistId
		}
	} as const
}

export const addTodoListAC =(title:string):addTodoListType=>{
	 return{
		 type: "ADD-TODOLIST",
		 payload:{
			 title
		 }
	 }as const
}
export const changeTitleTodoListAC =(id: string, title:string):ChangeTitleTodolistType =>{
	return{
		type: "CHANGE-TITLE",
		payload: {
			id,
			title
		}
	}as const
}

export const changeFilterTodoListAC =(id: string, filter:FilterValue):ChangeFilterTodolistType =>{
	return{
		type: "CHANGE-FILTER",
		payload: {
			id,
			filter
		}
	}as const
}