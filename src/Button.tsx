import React, {MouseEvent} from "react";
type ButtonPropsType={
	title:string
onClick:(event:MouseEvent<HTMLButtonElement>)=>void
	className?: string
}
 export const Button = ({onClick,title, className}:ButtonPropsType) => {
	const onClickHandler=(event:MouseEvent<HTMLButtonElement>)=>{
		onClick(event)
	 }
	return (
		<button onClick={onClickHandler}
				className={className}
		>{title}</button>
	)
}