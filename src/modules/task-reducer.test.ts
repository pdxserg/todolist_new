
import {v1} from "uuid";
import {TasksPropsType} from "../App";
import {addTaskAC, changeTaskStatusAC, removeTaskAC, tasksReducer} from "./task-reducer";



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


test('correct task should be added to correct array', () => {
	const startState: TasksPropsType = {
		'todolistId1': [
			{id: '1', title: 'CSS', isDone: false},
			{id: '2', title: 'JS', isDone: true},
			{id: '3', title: 'React', isDone: false}
		],
		'todolistId2': [
			{id: '1', title: 'bread', isDone: true},
			{id: '2', title: 'milk', isDone: true},
			{id: '3', title: 'tea', isDone: false}
		]
	}

	const action = addTaskAC('todolistId2', 'juce' )

	const endState = tasksReducer(startState, action)

	expect(endState['todolistId1'].length).toBe(3)
	  expect(endState['todolistId2'].length).toBe(4)
	expect(endState['todolistId2'][0].id).toBeDefined()
	expect(endState['todolistId2'][0].title).toBe('juce')
	expect(endState['todolistId2'][0].isDone).toBe(false)
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
