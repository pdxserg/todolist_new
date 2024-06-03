import React, {MouseEvent} from "react";
type ButtonPropsType={
	title:string
onClick:(event:MouseEvent<HTMLButtonElement>)=>void
}
 export const Button = ({onClick,title}:ButtonPropsType) => {
	const onClickHandler=(event:MouseEvent<HTMLButtonElement>)=>{
		onClick(event)
	 }
	return (
		<button onClick={onClickHandler}>{title}</button>
	)
}