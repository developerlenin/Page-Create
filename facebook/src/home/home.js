import React, { useState } from 'react'
import Header from '../head/Header';
import Main1 from '../sections/main1';
import './index.scss';
import Main2 from '../sections/main2';
import Main3 from '../sections/main3';

const Home = () => {
  const [todos,setTodos] = useState([]);

  const fetcDoTos = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const json = await res.json();
    console.log(json);
    setTodos(json);
  
  };
  return (
<div>
   <div>
   <Header/>
   </div>
   <div className='section'>
         <Main1/>
         <Main2/>
         <Main3/>
      </div>
      <button onClick={() =>fetcDoTos() }>Hi</button>
      {todos?.map((item,index)=><p  key={index}>{item?.title}</p>)}
  
</div>
  );
};

export default Home