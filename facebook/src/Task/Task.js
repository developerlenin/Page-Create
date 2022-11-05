import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const Task = () => {
  const [tasks,addTask] =useState([]);
  return (
    <>
        <input/>
        <button>Add</button>
    </>
  );
}
 
export default Task;