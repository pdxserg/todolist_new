// @flow
import * as React from 'react';

type ButtonPropsType = {
title: string
	onClick:()=>void
	className?: any
};
export const Button = ({onClick, className, title}: ButtonPropsType) => {
	return (
			<button  className={className} onClick={onClick}>{title}</button>
	);
};