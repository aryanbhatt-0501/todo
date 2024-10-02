import React from 'react';
import './index.css';
import AllTasks from '../components/allTasks';
import CreateTask from '../components/createTask';

function TodoContent(props) {
  return (
    <div className='todoContentContainer'>
      <div className="paper">
        {props.allTasks ? <AllTasks /> : null}
        {props.createTask ? <CreateTask /> : null}
      </div>
    </div>
  )
}

export default TodoContent