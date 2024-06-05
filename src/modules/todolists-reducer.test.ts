import {v1} from "uuid";
import {FilterValue} from "../App";
import {todolistsReducer} from "./todolists-reducer";

export{}


test ("Sum",()=>{

	function sum (a:number,b:number){
		return a+b
	}

	expect(sum(2,2)).toBe(4)
})
test ("Remove todolist",()=>{

	type TodolistType = {
		id: string
		title: string
		filter: FilterValue
	}
	let todolistID1 = v1()
	let todolistID2 = v1()

	const initialState:TodolistType[]= [
		{ id: todolistID1, title: 'What to learn', filter: 'ALL' },
		{ id: todolistID2, title: 'What to buy', filter: 'ALL' }
		]

 const action ={
	type:"REMOVE-TODOLIST",
	payload:{
		id:todolistID1
	}
}

const endstate =todolistsReducer(initialState, action)
	// 	function sum (a:number,b:number){
	// 	return a+b
	// }

	expect(endstate.length).toBe(1)
	expect(endstate[0].title).toBe("What to buy")
})
test ("Add todolist",()=>{

	type TodolistType = {
		id: string
		title: string
		filter: FilterValue
	}
	let todolistID1 = v1()
	let todolistID2 = v1()

	const initialState:TodolistType[]= [
		{ id: todolistID1, title: 'What to learn', filter: 'ALL' },
		{ id: todolistID2, title: 'What to buy', filter: 'ALL' }
	]

	const action ={
		type:"ADD-TODOLIST",
		payload:{
			title: "Ben"
		}
	}

	const endstate =todolistsReducer(initialState, action)
	// 	function sum (a:number,b:number){
	// 	return a+b
	// }

	expect(endstate.length).toBe(3)
	expect(endstate[0].title).toBe("Ben")
})