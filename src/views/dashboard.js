import React, { useState } from 'react';
import './index.css';
import Sidebar from './sidebar';
import TodoContent from './todoContent';

function Dashboard() {
  const [allTasks, setAllTasks] = useState(false);
  const handleAllTasks = () => setAllTasks(!allTasks);
  return (
    <div className='dashboardContainer'>
        <Sidebar handleAllTasks={handleAllTasks} />
        <TodoContent allTasks={allTasks} />
    </div>
  );
};

export default Dashboard