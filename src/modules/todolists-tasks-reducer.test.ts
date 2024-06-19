import {TasksPropsType, TodolistType} from "../App";
import {tasksReducer} from "./tasks-reducer";
import {addTodoListAC, todolistsReducer} from "./todolists-reducer";

test('ids should be equals', () => {
	const startTasksState: TasksPropsType = {}
	const startTodolistsState: Array<TodolistType> = []

	const action = addTodoListAC('new todolist')

	const endTasksState = tasksReducer(startTasksState, action)
	const endTodolistsState = todolistsReducer(startTodolistsState, action)

	const keys = Object.keys(endTasksState)
	const idFromTasks = keys[0]
	const idFromTodolists = endTodolistsState[0].id

	expect(idFromTasks).toBe(action.id)
	expect(idFromTodolists).toBe(action.id)
})


