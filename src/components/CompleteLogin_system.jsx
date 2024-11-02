import React, { useState } from 'react'
import '../components/CompleteLogin_system.css'

function CompleteLogin_system() {


const [userData,setUserData] = useState([])
const [username,setUsername] = useState('')
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [inputEmail,setInputEmail] = useState('')
const [inputPassword,setInputPassword] = useState('')

function SignUp (e){
  e.preventDefault()
  

  const userFound = userData.find((items)=> items.email === email );

  if(!userFound){
    // userData.push({username,email,password})
  setUserData([...userData,{username,email,password}])
  alert('User registered successfully!')

  }
  else{
    alert('User already exists!')
  }

  setUsername('');
  setEmail('');
  setPassword('');

}


function SignIn(e) {
  e.preventDefault();

  // Correct comparison
  const userFound = userData.find(
    (user) => user.email === inputEmail && user.password === inputPassword
  );

  if (userFound) {
    alert('Welcome!');
  } else {
    alert('Invalid Email or Password');
  }
  setInputEmail('');
  setInputPassword('');
}

  
  return (
    <div className="container">
    <div className="form-wrapper">
      

      {/* <!-- Sign Up Form --> */}
      <div className="form sign-up-form">
        <h2>Sign Up</h2>
        <div className="input-group">
          <input value={username} type="text" id="signup-username" required onChange={(e)=>{setUsername(e.target.value)}} />
          <label Forhtml="signup-username">Username</label>
        </div>
        <div className="input-group">
          <input value={email} type="email" id="signup-email" required onChange={(e)=>{setEmail(e.target.value)}} />
          <label Forhtml="signup-email">Email</label>
        </div>
        <div className="input-group">
          <input value={password} type="password" id="signup-password" required onChange={(e)=>{setPassword(e.target.value)}} />
          <label Forhtml="signup-password">Password</label>
        </div>
        <button onClick={SignUp} className="btn">Sign Up</button>
      </div>
      
      {/* <!-- Sign In Form --> */}
      <div className="form sign-in-form">
        <h2>Sign In</h2>
        <div className="input-group">
          <input value={inputEmail} type="inputEmail" id="signin-email" required onChange={(e)=>{setInputEmail(e.target.value)}} />
          <label Forhtml="signin-email">Email</label>
        </div>
        <div className="input-group">
          <input value={inputPassword} type="password" id="signin-password" required onChange={(e)=>{setInputPassword(e.target.value)}} />
          <label Forhtml="signin-password">Password</label>
        </div>
        <button onClick={SignIn} className="btn">Sign In</button>
      </div>


    </div>
    <div className="user-list">
        <h2>Registered Users:</h2>
        {userData.map((user, index) => (
          <div key={index} className="user-info">
            
            <p><strong>Username:</strong> {user.username}</p>
           <p><strong>Email:</strong> {user.email}</p>
           <p><strong>Password:</strong> {user.password}</p>
            <hr />
          </div>
        ))}
      </div>
  </div>
  )
}

export default CompleteLogin_system
