import React from 'react';
import styles from './NavToggleTitle.module.css';

type AccordionTitleType = {
	title: string
	onChange: (data: boolean) => void
	collapsed: boolean
}

const NavToggleTitle = (props: AccordionTitleType) => {
	return (
			<div onClick={() => props.onChange(props.collapsed)}
					 className={props.collapsed ? `${styles.accordionTitle}` : `${styles.accordionTitle} ${styles.accordionTitleOpen}`}
			>
				<div className={styles.mtInner}>
					<div className={styles.menuStr}>
						<span className={styles.str1}></span>
						<span className={styles.str2}></span>
						<span className={styles.str3}></span>
					</div>
				</div>
				<div className={styles.title}>{props.title}</div>
			</div>
	)
}

export default NavToggleTitle;