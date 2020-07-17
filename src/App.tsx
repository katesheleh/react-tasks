import React from 'react';
import './App.css';
import UserMessage from './components/UserMessage/UserMessage';

function App() {
	return (
			<div className="App">
				<UserMessage name={'Katia'} message={'How are you?'}/>
			</div>
	)
}

export default App;
