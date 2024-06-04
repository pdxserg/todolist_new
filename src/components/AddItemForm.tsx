import React, {ChangeEvent, KeyboardEvent, useState} from 'react';


type AddItemFormPropsType = {
	addItem:(todolId:string, title: string)=>void
		todolId?:any
}

export function AddItemForm({addItem, todolId }: AddItemFormPropsType) {
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
			addItem(todolId,newTask.trim())
			setNewtask("")
		} else {
			setError('Title is requred')
		}
	}


	return (
		<div className={'add-item-form'}>
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


