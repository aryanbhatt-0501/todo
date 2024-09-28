import React from 'react';
import './index.css';
import Sidebar from './sidebar';
import TodoContent from './todoContent';

function dashboard() {
  return (
    <div className='dashboardContainer'>
        <Sidebar />
        <TodoContent />
    </div>
  );
};

export default dashboard