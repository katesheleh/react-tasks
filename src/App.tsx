import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import PreJunior from './components/PreJunior/PreJunior';
import Junior from './components/Junior/Junior';
import JuniorAdvanced from './components/JuniorAdvanced/JuniorAdvanced';
import Header from './components/Header/Header';


function App() {

	return (
			<div className="App">
				<Header/>
				{/*to build nav menu route*/}
				<Route path='/prejunior' render={() => <PreJunior/>}/>
				<Route path='/junior' render={() => <Junior/>}/>
				<Route path='/junior-advanced' render={() => <JuniorAdvanced/>}/>
			</div>
	)
}

export default App;
