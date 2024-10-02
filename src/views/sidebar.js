import React from 'react';
import './index.css';

function Sidebar(props) {
  return (
    <div className='sidebarContainer'>
      <h1>My Todo</h1>
      <button className='btn btn-primary' onClick={props.handleAllTasks}>All tasks</button>
      <button className='btn btn-primary' onClick={props.handleCreateTask}>Create a task</button>
      <button className='btn btn-primary'>Delete a task</button>
      <button className='btn btn-primary'>Create a new team</button>
      <button className='btn btn-primary'>My teams</button>
    </div>
  )
}

export default Sidebar