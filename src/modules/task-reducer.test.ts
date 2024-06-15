
import {TasksPropsType} from "../App";
import {addTaskAC, changeTaskStatusAC, removeTaskAC, tasksReducer} from "./task-reducer";
import {addTodoListAC, removeTodolistAC} from "./todolists-reducer";



let startState:TasksPropsType

beforeEach(()=>{
	startState = {
		'todolistId1': [
			{id: "1", title: 'HTML&CSS', isDone: true},
			{id: "2", title: 'JS', isDone: true},
			{id: "3", title: 'ReactJS', isDone: false},
		],
		'todolistId2': [
			{id: "1", title: 'Rest API', isDone: true},
			{id: "2", title: 'GraphQL', isDone: false},
		],
	}
})



test("remove task", () => {




	const endState = tasksReducer(startState, removeTaskAC('todolistId1',"1" ))

	expect(endState['todolistId1'].length).toBe(2)
	expect(endState['todolistId2'][0].title).toBe('Rest API')
	expect(endState['todolistId1'][0].title).toBe('JS')

})

test('correct task should be added to correct array', () => {
	// const startState: TasksPropsType = {
	// 	'todolistId1': [
	// 		{id: '1', title: 'CSS', isDone: false},
	// 		{id: '2', title: 'JS', isDone: true},
	// 		{id: '3', title: 'React', isDone: false}
	// 	],
	// 	'todolistId2': [
	// 		{id: '1', title: 'bread', isDone: true},
	// 		{id: '2', title: 'milk', isDone: true},
	// 		{id: '3', title: 'tea', isDone: false}
	// 	]
	// }

	const action = addTaskAC('todolistId2', 'juce' )

	const endState = tasksReducer(startState, action)

	expect(endState['todolistId1'].length).toBe(3)
	  expect(endState['todolistId2'].length).toBe(3)
	expect(endState['todolistId2'][0].id).toBeDefined()
	expect(endState['todolistId2'][0].title).toBe('juce')
	expect(endState['todolistId2'][0].isDone).toBe(false)
})

test("CHANGE-STATUS-TASK", () => {
	// let todolistID1 = v1()
	// let todolistID2 = v1()
	//
	//
	// let initial:TasksPropsType = ({
	// 	[todolistID1]: [
	// 		{id: "1", title: 'HTML&CSS', isDone: true},
	// 		{id: "2", title: 'JS', isDone: true},
	// 		{id: "3", title: 'ReactJS', isDone: false},
	// 	],
	// 	[todolistID2]: [
	// 		{id: v1(), title: 'Rest API', isDone: true},
	// 		{id: v1(), title: 'GraphQL', isDone: false},
	// 	],
	// })

	const endState = tasksReducer(startState, changeTaskStatusAC('todolistId1',"2", false))

	expect(endState['todolistId1'].length).toBe(3)
	expect(endState['todolistId1'][1].isDone).toBe(false)
	expect(endState['todolistId1'][2].isDone).toBe(false)

})
test('new array should be added when new todolist is added', () => {
	// const startState: TasksPropsType = {
	// 	'todolistId1': [
	// 		{id: '1', title: 'CSS', isDone: false},
	// 		{id: '2', title: 'JS', isDone: true},
	// 		{id: '3', title: 'React', isDone: false}
	// 	],
	// 	'todolistId2': [
	// 		{id: '1', title: 'bread', isDone: false},
	// 		{id: '2', title: 'milk', isDone: true},
	// 		{id: '3', title: 'tea', isDone: false}
	// 	]
	// }

	const action = addTodoListAC('new todolist')

	const endState = tasksReducer(startState, action)


	const keys = Object.keys(endState)
	const newKey = keys.find(k => k != 'todolistId1' && k != 'todolistId2')
	if (!newKey) {
		throw Error('new key should be added')
	}

	expect(keys.length).toBe(3)
	expect(endState[newKey]).toEqual([])
})
test('property with todolistId should be deleted', () => {
	// const startState: TasksPropsType = {
	// 	'todolistId1': [
	// 		{id: '1', title: 'CSS', isDone: false},
	// 		{id: '2', title: 'JS', isDone: true},
	// 		{id: '3', title: 'React', isDone: false}
	// 	],
	// 	'todolistId2': [
	// 		{id: '1', title: 'bread', isDone: false},
	// 		{id: '2', title: 'milk', isDone: true},
	// 		{id: '3', title: 'tea', isDone: false}
	// 	]
	// }


	const action = removeTodolistAC('todolistId2')

	const endState = tasksReducer(startState, action)


	const keys = Object.keys(endState)

	expect(keys.length).toBe(1)
	expect(endState['todolistId2']).not.toBeDefined()
	expect(endState['todolistId1'][2].title).toBe("ReactJS")

})
