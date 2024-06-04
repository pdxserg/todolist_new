import {v1} from "uuid";


type todolistsReducerTyp={
	type:string
	payload:Object
}

class TodolistType {
}
type removeTodoListType={
	type: string
	payload:{
		id:string
	}
}
type ActionsType =removeTodoListType

let todolistID1 = v1()
let todolistID2 = v1()

const initialState: TodolistType[] = [
	{ id: todolistID1, title: 'What to learn', filter: 'all' },
	{ id: todolistID2, title: 'What to buy', filter: 'all' },
]
export const todolistsReducer=(state:TodolistType[]=initialState, action:ActionsType):TodolistType[]=>{
	switch (action.type){
		case "REMOVE-TODOLIT":
			return state
		 case "DDD":
			return state
		 default:
			return state

	}
}

const removeTodoListAC=(id: string):removeTodoListType=>{
	return {
		type:"REMOVE-TODOLIsT",
		payload:{
			id
		}

	} as const
}