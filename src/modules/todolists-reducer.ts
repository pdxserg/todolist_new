import {v1} from "uuid";
import {FilterValue, TodolistType} from "../App";


 export type removeTodoListAction ={
	type:"REMOVE-TODOLIST"
	payload:{
		id: string
	}
}
// export type addTodoListType={
// 	type:"ADD-TODOLIST"
// 	payload:{
// 		id:string
// 		title:string
// 	}
// }
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
	 | addTodoListType
	 | ChangeTitleTodolistType
	 | ChangeFilterTodolistType



export const todolistsReducer=(state:TodolistType[], action:ActionsType ):TodolistType[]=>{
	switch (action.type){
		case "REMOVE-TODOLIST":{
			return state.filter(i=>i.id !== action.payload.id )
		}
		 case "ADD-TODOLIST":{
			 const newtodolist:TodolistType={ id: action.payload.id, title: action.payload.title, filter: 'ALL' }
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
type addTodoListType = ReturnType<typeof addTodoListAC>
export const addTodoListAC =(newId:string, title:string) =>{
	 return{
		 type: "ADD-TODOLIST",
		 payload:{
			 id:newId,
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