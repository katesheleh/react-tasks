import React, {useState} from 'react';
import './App.css';
import UserMessage from './components/UserMessage/UserMessage';
import Todo, {PriorityType, TasksType} from './components/Todo/Todo';
import Input from './components/Input/Input';

function App() {

	const [tasks, setTasks] = useState<Array<TasksType>>([
		{id: 1, name: 'Paddle Surf', priority: 'middle'},
		{id: 2, name: 'Learn JS', priority: 'high'},
		{id: 3, name: 'Learn React', priority: 'high'},
		{id: 4, name: 'Swim', priority: 'middle'},
		{id: 5, name: 'Sleep', priority: 'low'},
		{id: 6, name: 'Buy bread', priority: 'low'},
		{id: 7, name: 'Do something', priority: 'low'}
	])

	let [filter, setFilter] = useState<PriorityType>('all')

	// Task2: remove task
	function removeTask(id: number) {
		let newTasks = tasks.filter(task => task.id !== id)
		setTasks([...newTasks])
	}

	// Task 2: filter tasks by priority
	let filteredTasks = tasks;
	if (filter === 'high') {
		filteredTasks = tasks.filter(task => task.priority === filter)
	}
	if (filter === 'middle') {
		filteredTasks = tasks.filter(task => task.priority === filter)
	}
	if (filter === 'low') {
		filteredTasks = tasks.filter(task => task.priority === filter)
	}

	function changeFilter(value: PriorityType) {
		setFilter(value)
	}


	// Task 3: Input State
	const [inputValue, setInputValue] = useState<string>('')

	function changeInputValue(newValue: string) {
		setInputValue(newValue)
	}

	return (
			<div className="App">
				<h2>Task 1</h2>
				<UserMessage
						name={'Katia'}
						message={'How are you?'}/>

				<br/>
				<br/>
				<br/>

				<h2>Task 2</h2>
				<Todo
						tasks={filteredTasks}
						filterTasks={changeFilter}
						removeTask={removeTask}
				/>

				<br/>
				<br/>
				<br/>

				<h2>Task 3</h2>
				<Input
						value={inputValue}
						onChange={changeInputValue}/>

				<br/>
				<br/>
				<br/>

			</div>
	)
}

export default App;
