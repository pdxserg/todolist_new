import {v1} from "uuid";
import {TodolistType} from "../App";



// type removeTodoListType={
// 	type: string
// 	payload:{
// 		id:string
// 	}
// }
// type ActionsType =removeTodoListType
type ActionsType = {
	type: string
	payload: any
}

let todolistID1 = v1()
let todolistID2 = v1()

const initialState: TodolistType[] = [
	{ id: todolistID1, title: 'What to learn', filter: 'ALL' },
	{ id: todolistID2, title: 'What to buy', filter: 'ALL' },
]
export const todolistsReducer=(state:TodolistType[]=initialState, action:ActionsType):TodolistType[]=>{
	switch (action.type){
		case "REMOVE-TODOLIST":{
			return state.filter(i=>i.id !== action.payload.id )
		}

		 case "ADD-TODOLIST":{
			 const newtodolist:TodolistType={ id: todolistID2, title: action.payload.title, filter: 'ALL' }
			 return [ newtodolist, ...state, ]




		 }

		 default:
			return state

	}
}

// const removeTodoListAC=(id: string):removeTodoListType=>{
// 	return {
// 		type:"REMOVE-TODOLIsT",
// 		payload:{
// 			id
// 		}
//
// 	} as const
// }