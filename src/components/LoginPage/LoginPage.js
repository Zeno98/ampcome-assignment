import React from 'react'
import LoginImg from "./Login-img.JPG";
import "../LoginPage/Login.css";
import Home from '../Home/Home';
import {Link} from "react-router-dom";

const LoginPage = () => {

    const unitName=["Select Unit Name","unit-1","unit-2","unit-3","unit-4","unit-5","unit-6","unit-7","unit-8","unit-9","unit-10"];

    const [signIn,setSignIn]=React.useState(false);

    const handleSignIn=()=>{
        setSignIn(true);
    }
  return (
    <div>
        <span 
        className='Login-img' style={{display:"inline",position:"relative"}}><img src={LoginImg} alt="Login-Image" />
        </span>
        
        <div className='login'>
            <h2 style={{display:"inline-block"}}>Sign-in to your account</h2>
            <br />
            <input type="text" id="names" placeholder='Username' />
            <br />
            <input type="password" id="password" placeholder='Password' />
            <br />

            <select name="unitName" id="unitName-select" value={unitName} defaultValue={"Select Unit Name"}>
                {
                    unitName.map((items,index)=>(
                        <option value={items} key={index}>
                            {items}
                        </option>
                    ))
                }
            </select>
            <br />
            <Link to="/home"> <button id="sign" onClick={handleSignIn}>Sign In</button></Link>
        </div>
    </div>
  )
}

export default LoginPage