import React from 'react';
import './index.css';

function Sidebar(props) {
  return (
    <div className='sidebarContainer'>
      <h1>My Dashboard</h1>
      <button onClick={props.handleAllTasks}>All tasks</button>
      <button>Create a task</button>
      <button>Delete a task</button>
    </div>
  )
}

export default Sidebar