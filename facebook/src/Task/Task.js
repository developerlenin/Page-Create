import React, { useState } from "react";



const Task = () => {
  const [detail,setdetail]=useState({input:"",textarea:""});


  const handlesubmit= (e)=>{
    console.log(e.target.value)
  }
 
  return (
    <div>
      <from>
        <input name="input" onChange={handlesubmit}></input>
        <input name="textarea" onChange={handlesubmit}></input>
        <button type="submit">submit</button>
      </from>
    </div>
  )
}

export default Task