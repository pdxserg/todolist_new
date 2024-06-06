
import {v1} from "uuid";
import {TasksPropsType} from "../App";
import {changeTaskStatusAC, removeTaskAC, tasksReducer} from "./task-reducer";



test("remove task", () => {
	let todolistID1 = v1()
	let todolistID2 = v1()


	let initial:TasksPropsType = ({
		[todolistID1]: [
			{id: "1", title: 'HTML&CSS', isDone: true},
			{id: "2", title: 'JS', isDone: true},
			{id: "3", title: 'ReactJS', isDone: false},
		],
		[todolistID2]: [
			{id: v1(), title: 'Rest API', isDone: true},
			{id: v1(), title: 'GraphQL', isDone: false},
		],
	})



	const endState = tasksReducer(initial, removeTaskAC(todolistID1,"1" ))
	expect(endState[todolistID1].length).toBe(2)
	expect(endState[todolistID1][0].title).toBe('JS')

})

test("CHANGE-STATUS-TASK", () => {
	let todolistID1 = v1()
	let todolistID2 = v1()


	let initial:TasksPropsType = ({
		[todolistID1]: [
			{id: "1", title: 'HTML&CSS', isDone: true},
			{id: "2", title: 'JS', isDone: true},
			{id: "3", title: 'ReactJS', isDone: false},
		],
		[todolistID2]: [
			{id: v1(), title: 'Rest API', isDone: true},
			{id: v1(), title: 'GraphQL', isDone: false},
		],
	})

	const endState = tasksReducer(initial, changeTaskStatusAC(todolistID1,"2", false))

	expect(endState[todolistID1].length).toBe(3)
	expect(endState[todolistID1][1].isDone).toBe(false)
	expect(endState[todolistID1][2].isDone).toBe(false)

})
