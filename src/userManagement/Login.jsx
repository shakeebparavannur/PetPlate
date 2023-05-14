import React from 'react'

const Login = () => {
  return (
    <div>
        <h1>Login</h1>
        <form>
            <input type="text" placeholder='enter the username' />
            <input type="password" placeholder='enter your password' />
            <button type='submit'>Login</button>
            
        </form>
    </div>
  )
}

export default Login