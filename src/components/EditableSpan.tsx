import React, {ChangeEvent, useState} from 'react';
import * as timers from "timers";
type EditableSpanPropsType={
	title: string
	callBack:(title: string)=>void
}

export const EditableSpan = ({title, callBack}:EditableSpanPropsType) => {
	const[editMode, setEditMode] = useState(false)
	const [newTitle, setNewTitle] =useState(title)

	const editModeHandler=()=>{
		setEditMode(true)
	}
	const onBlurHandler=()=>{
		callBack(newTitle)
		setEditMode(false)
	}
	const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
		setNewTitle(e.currentTarget.value)


	}
	return (
		<>
			{editMode
				? <input type="text"
				         value={newTitle}
				         autoFocus={true}
				         onChange={onChangeHandler}
				         onBlur={onBlurHandler}/>
				: <span onDoubleClick={editModeHandler}>{title}</span>
			}

		</>
	);
};

