import React from 'react'
import Header from '../head/Header';
import Main1 from '../sections/main1';
import './index.css';
import Main2 from '../sections/main2';
import Main3 from '../sections/main3';
const Home = () => {
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
  
</div>
  )
}

export default Home