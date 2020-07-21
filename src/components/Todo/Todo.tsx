import React from 'react';

export type PriorityType = 'all' | 'high' | 'middle' | 'low'

export type  TasksType = {
	id: number,
	name: string,
	priority: PriorityType
}

export type TodoPropsType = {
	tasks: Array<TasksType>
	filterTasks: (value: PriorityType) => void
	removeTask: (id: number) => void
}

const Todo = (props: TodoPropsType) => {
	return (
			<div>
				<div>
					<button onClick={() => props.filterTasks('all')}>All</button>
					<button onClick={() => props.filterTasks('high')}>High</button>
					<button onClick={() => props.filterTasks('middle')}>Middle</button>
					<button onClick={() => props.filterTasks('low')}>Low</button>
				</div>

				<ul>
					{props.tasks.map((task) =>
							<li key={task.id}>
								<b>{task.name}</b>
								<small><i> {task.priority} </i></small>
								<button onClick={() => props.removeTask(task.id)}>delete</button>
							</li>
					)}
				</ul>
			</div>
	)
}

export default Todo;