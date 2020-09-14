import React, {useCallback} from 'react';
import styles from './Button.module.css';


const Button = React.memo((props: ButtonPropsType) => {

	const onClickHandler = useCallback(() => props.onClick(), [])

	return (
			<button
					onClick={onClickHandler}
					className={`${styles.button} ${props.style ? styles[props.style] : ''} `}>
				{props.text}</button>
	)
})

export default Button;


// TYPES
type ButtonPropsType = {
	text: string
	onClick: () => void
	style?: 'danger' | 'standard'
}