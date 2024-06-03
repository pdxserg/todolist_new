import React, {MouseEvent} from "react";
type ButtonPropsType={
onClick:(event:MouseEvent<HTMLButtonElement>)=>void
}
 export const Button = ({onClick}:ButtonPropsType) => {
	const onClickHandler=(event:MouseEvent<HTMLButtonElement>)=>{
		onClick(event)
	 }
	return (
		<button onClick={onClickHandler}></button>
	)
}