import React from 'react';
import styles from './UserMessage.module.css';

export type UserMessageType = {
	name: string
	message: string
}

const UserMessage = (props: UserMessageType) => {
	return (
			<div className={styles.wrap}>
				<div className={styles.colLeft}>
					<div className={styles.imgWrap}>
						<img src='https://placeimg.com/50/50/tech' alt={props.name}/>
					</div>
				</div>
				<div className={styles.colRight}>
					<h3>{props.name}</h3>
					<p>{props.message}</p>
				</div>
			</div>
	)
}

export default UserMessage;