import React, { useContext, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context.jsx/AuthContext';
import axios from 'axios';

const Login = ({useRegister, flip}) => {

    const redirect = useNavigate();
    const {setUser} = useContext(AuthContext)

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const URL = 'http://localhost:8000/users/login/engage/'

    const logs = async (e) =>{
        e.preventDefault();

        const formData = {
            username, password
        }

        try{
            const response = await axios.post(URL, formData)
            setUser(response.data)
            redirect('/profile')

        }
        catch(error){
            console.log(error.message)
        }

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
                <button type="submit" className='form-submit'>Submit</button>
                <Link to='/reset'>Forgot Password</Link>
            </div>
            <p>No account? <Link to='/register'><button>Register</button></Link></p>
        </form>
    </article>
  )
}

export default Login
