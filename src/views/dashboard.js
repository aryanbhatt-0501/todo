import React, { useState } from 'react';
import './index.css';
import Sidebar from './sidebar';
import TodoContent from './todoContent';

function Dashboard() {
  const [allTasks, setAllTasks] = useState(false);
  const handleAllTasks = () => setAllTasks(!allTasks);

  const [createTask, setCreateTask] = useState(false);
  const handleCreateTask = () => setCreateTask(!createTask);
  return (
    <div className='dashboardContainer'>
        <Sidebar handleAllTasks={handleAllTasks} handleCreateTask={handleCreateTask} />
        <TodoContent allTasks={allTasks} createTask={createTask} />
    </div>
  );
};

export default Dashboard