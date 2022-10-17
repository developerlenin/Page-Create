import React from 'react'
import Header from './header'
import Main1 from './main1'
import Main2 from './main2'
import Main3 from './main3'
const home = () => {
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

export default home