import React, { useState } from 'react'
import "./Login.scss"
import Home from '../home/home';
import Lenin from "./user.json"
import { useNavigate } from 'react-router-dom';
import{ FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook} from '@fortawesome/free-brands-svg-icons';

const Login= () => { 
    const [name,setName]=useState("")
    const [password,setpassword]=useState("")
    const [err,setErr]=useState()
    const Navigate=useNavigate()

    const userSubmit=(a)=>{ a.preventDefault();

    if(name==="" && password===""){
        setErr("Enter Username and Password")

    }else if(name===""){
        setErr("Invaild Username")

    }else{
        setErr("Invaild Password")
    }

    Lenin.find((item)=>{

        if(item.name===name && item.password===password){ 
        
        Navigate("Home")}})} 

        const username=(usename)=>{setName(usename.target.value) }
        const userpassword=(usepwd)=>{setpassword(usepwd.target.value) }   
  return (
   <>
        <h4>Login Page</h4> 
        <div className='icon-div'><FontAwesomeIcon icon={faFacebook} className="facebook-iconn" /></div>
        <form className='form'>
        <input className='input-one'onChange={username}type={"text"} placeholder={"Username"} /><br />
        <input className='input-two' onChange={userpassword} type={"password"} placeholder={"Password"} /><br />
        <button className='btn' onClick={(a)=>{userSubmit(a)}}>Submit</button>
        </form>
        <p style={{color:'red'}}>{err}</p>
    </>)}
export default Login