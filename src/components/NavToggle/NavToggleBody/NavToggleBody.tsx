import React from 'react';
import styles from './NavToggleBody.module.css';
import NavMenu from './NavMenu/NavMenu';

type AccordionBodyType = {
	collapsed: boolean
	onChange: (data: boolean) => void
}

const NavToggleBody = (props: AccordionBodyType) => {

	return (
			<div
					className={props.collapsed
							? `${styles.accordionBody}`
							: `${styles.accordionBody} ${styles.accordionBodyOpen}`}>

				<NavMenu
						collapsed={props.collapsed}
						onChange={() => props.onChange(props.collapsed)}/>
			</div>
	)
}

export default NavToggleBody;