import React, { useState } from 'react'
const Api = () => {
    const [todos,setTodos] = useState([]);

  const fetcDoTos = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const json = await res.json();
    console.log(json);
    setTodos(json);
    
  };
  return (
    <div style={{textAlign:"center"}}>
      <button className='btn btn-secondary' onClick={() =>fetcDoTos() } >Click For Api Call</button>
      {todos?.map((item,index)=><p  key={index}>{item?.title}</p>)}
    </div>
  )
};
export default Api