// @flow
import * as React from 'react';

type ButtonPropsType = {
title: string
	onClick:()=>void
};
export const Button = ({onClick, title}: ButtonPropsType) => {
	return (
		<div>
			<button onClick={onClick}>{title}</button>

		</div>
	);
};