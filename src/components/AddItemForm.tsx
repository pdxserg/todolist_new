import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type AddItemFormPropsType = {
	addTask:(todolId:string, title: string)=>void
	todolId:string
}

export function AddItemForm({addTask, todolId }: AddItemFormPropsType) {
	const [error, setError] = useState<string | null>(null)
	const [newTask, setNewtask] = useState("")
	const onchangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setNewtask(event.currentTarget.value)

	}
	const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		setError(null)
		if (e.key === "Enter") {
			addTaskHandler()
		}

	}
	const addTaskHandler = () => {
		if (newTask.trim() !== "") {
			addTask(todolId,newTask.trim())
			setNewtask("")
		} else {
			setError('Title is requred')
		}
	}


	return (
		<div>
			<input
				className={error ? "error" : ""}
				type="text"
				value={newTask}
				onChange={onchangeHandler}
				onKeyDown={onKeyDownHandler}
			/>
			<button onClick={addTaskHandler}>+</button>
			{error && <div className={'error-message'}>{error}</div>}
		</div>
	);
}


