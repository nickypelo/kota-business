import React, { useState} from 'react';
import { Link } from 'react-router-dom';

const Login = ({useRegister, setL, flip, us}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const logs = (e) =>{
        e.preventDefault();
        console.log('Logged_In')
        flip();
      }
  

  return (
    <article className="login">
        <h2>Login</h2>
        <form action="POST" className='login-form' onSubmit={logs}>
            <label htmlFor="username">
                Username: <input  
                            type="text" 
                            name='username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            />
            </label>

            <label htmlFor="password">
                Password: <input
                            type="password" 
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
            </label>

            <div className="form-options">
                <input type="submit" name='submit' className='form-submit' />
                <Link to='/reset'>Forgot Password</Link>
            </div>
            <p>No account? <button onClick={useRegister}>Register</button></p>
        </form>
    </article>
  )
}

export default Login
