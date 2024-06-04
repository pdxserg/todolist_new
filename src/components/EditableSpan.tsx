import React from 'react';
type EditableSpanPropsType={
	title: string
}

export const EditableSpan = ({title}:EditableSpanPropsType) => {
	return (
		<div>
			<span>{title}</span>
		</div>
	);
};

