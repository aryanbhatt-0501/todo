import React from 'react';
import './index.css';
import AllTasks from '../components/allTasks';

function TodoContent(props) {
  return (
    <div className='todoContentContainer'>
      <div className="paper">
        {props.allTasks ? <AllTasks /> : null}
      </div>
    </div>
  )
}

export default TodoContent