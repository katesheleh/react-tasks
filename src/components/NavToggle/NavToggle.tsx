import React from 'react';
import NavToggleTitle from './NavToggleTitle/NavToggleTitle';
import NavToggleBody from './NavToggleBody/NavToggleBody';

type AccordionType = {
	title: string;
	collapsed: boolean;
	onChange: (data: boolean) => void;
}

const NavToggle = (props: AccordionType) => {

	return (
			<>
				<NavToggleTitle
						title={props.title}
						onChange={() => props.onChange(props.collapsed)}
						collapsed={props.collapsed}
				/>

				<NavToggleBody
						collapsed={props.collapsed}
						onChange={() => props.onChange(props.collapsed)}/>
			</>
	)
}

export default NavToggle;