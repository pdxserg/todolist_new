import {v1} from "uuid";
import {TodolistType} from "../App";
import {
	addTodoListAC, changeFilterTodoListAC,
	changeTitleTodoListAC,
	removeTodolistAC,
	todolistsReducer
} from "./todolists-reducer";


let todolistID1 = v1()
let todolistID2 = v1()

const initialState: TodolistType[] = [
	{id: todolistID1, title: 'What to learn', filter: 'ALL'},
	{id: todolistID2, title: 'What to buy', filter: 'ALL'}
]
test("Sum", () => {
	expect(2 + 2).toBe(4)
})
test("Remove todolist", () => {

	const endstate = todolistsReducer(initialState, removeTodolistAC(todolistID1))

	expect(endstate.length).toBe(1)
	expect(endstate[0].title).toBe("What to buy")
})
test("Add todolist", () => {
const newId = "ssss"
	const endstate = todolistsReducer(initialState, addTodoListAC("Ben"))

	expect(endstate.length).toBe(3)
	expect(endstate[0].title).toBe("Ben")
	expect(endstate[0].id).toBe("ssss")
})
test("Chage title todolist", () => {

	const endstate = todolistsReducer(initialState, changeTitleTodoListAC( todolistID2,"Ben"))

	expect(endstate.length).toBe(2)
	expect(endstate[1].title).toBe("Ben")
})
test("Chage Filter todolist", () => {
	const endstate: TodolistType[] = todolistsReducer(initialState, changeFilterTodoListAC(todolistID2, "ACTIVE"))

	expect(endstate.length).toBe(2)
	expect(endstate[1].filter).toBe("ACTIVE")
})