import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import PreJunior from './components/PreJunior/PreJunior';
import Junior from './components/Junior/Junior';
import JuniorAdvanced from './components/JuniorAdvanced/JuniorAdvanced';
import Header from './components/Header/Header';
import {ThemeProvider} from 'styled-components';
import {dangerTheme, darkTheme, lightTheme} from './theme';
import {GlobalStyles} from './global';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './reducers/store';
import {themeColorAC, ThemeReducerStateType, ThemeStyleType} from './reducers/themeReducer';


function App() {
	// Task 12
	const theme = useSelector<AppRootStateType, ThemeReducerStateType>(state => state.theme)
	const dispatch = useDispatch()

	const onThemeModeChange = (newValue: ThemeStyleType) => {
		dispatch(themeColorAC(newValue))
	}

	console.log(theme.themeMode)

	return (
			<ThemeProvider
					theme={(theme.themeMode == 'dark' && darkTheme) || (theme.themeMode == 'light' && lightTheme) || (theme.themeMode == 'danger' && dangerTheme)}>
				<div className="App">
					<GlobalStyles/> {/*styles to switch Theme*/}
					<Header/>
					{/*to build nav menu route*/}
					<Route path='/prejunior' render={() => <PreJunior/>}/>
					<Route path='/junior' render={() => <Junior/>}/>
					<Route path='/junior-advanced'
								 render={() => <JuniorAdvanced theme={theme.themeMode} onChange={onThemeModeChange}/>}/>
				</div>
			</ThemeProvider>
	)
}

export default App;
