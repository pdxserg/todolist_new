import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Button} from "../Button";


type AddItemFormPropsType = {
	addItem:(title: string)=>void

}

export function AddItemForm({addItem,  }: AddItemFormPropsType) {
	const [error, setError] = useState<string | null>(null)
	const [title, setTitle] = useState("")
	const onchangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setTitle(event.currentTarget.value)

	}
	const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		setError(null)
		if (e.key === "Enter") {
			addItemHandler()
		}

	}
	const addItemHandler = () => {
		if (title.trim() !== "") {
			addItem( title.trim())
			setTitle("")
		} else {
			setError('Title is requred')
		}
	}


	return (
		<div className={'add-item-form'}>
			<input
				className={error ? "error" : ""}
				type="text"
				value={title}
				onChange={onchangeHandler}
				onKeyDown={onKeyDownHandler}
			/>
			<Button title={"+"} onClick={addItemHandler}/>
			{/*<button onClick={addItemHandler}>+</button>*/}
			{error && <div className={'error-message'}>{error}</div>}
		</div>
	);
}


