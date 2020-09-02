import React from 'react';
import styles from './NavMenu.module.css';
import {NavLink} from 'react-router-dom';

export type NavType = {
	collapsed: boolean
	onChange: (data: boolean) => void
}

const NavMenu = (props: NavType) => {

	const onClick = () => props.onChange(props.collapsed)
	return (
			<nav className={styles.nav}>
				<p>
					<NavLink to="/prejunior" className={styles.link} activeClassName={styles.active}
									 onClick={onClick}>PreJunior</NavLink></p>
				<p><NavLink to="/junior" className={styles.link} activeClassName={styles.active}
										onClick={onClick}>Junior</NavLink></p>
				<p><NavLink to="/junior-advanced" className={styles.link} activeClassName={styles.active}
										onClick={onClick}>Junior+</NavLink></p>
			</nav>
	)
}

export default NavMenu;