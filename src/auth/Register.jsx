import axios from 'axios';
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

  const redirect = useNavigate();

  const URL = 'http://localhost:8000/users/registration/engage/'

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async (e) =>{
    e.preventDefault();
    console.log('Registered')

    const formData = {
      first_name : firstname,
      last_name : lastname,
      email: email,
      username: username,
      password: password
    }

    try{
      const response = await axios.post(URL, formData);
      console.log(response.data)
      redirect('/login');
    }
    catch(error){
      console.log('Cant')
    }


    
  }

  

  return (
    <article className="register" >
      <h2>Register</h2>


      <form action="" className="register-form" onSubmit={registerUser}>
        <label htmlFor="firstname">First Name: 
            <input 
              type="text" 
              name='firstname'
              value={firstname}
              onChange={(e)=> setFirstname(e.target.value)}
            />
        </label>

        <label htmlFor="lastname">Last Name: 
              <input 
                type="text"
                name='lastname'
                value={lastname}
                onChange={(e)=> setLastname(e.target.value)}
              />
        </label>

        <label htmlFor="email">Email: 
              <input 
                type="email" 
                name='email'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />
        </label>

        <label htmlFor="username">Username: 
              <input 
                type="text" 
                name='username'
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
                />
        </label>

        <label htmlFor="password">Password: 
              <input 
                type="password" 
                name='password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
        </label>
{/* 
        <label htmlFor="password">Enter Password again: 
              <input 
                type="password" 
                name='password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
        </label> */}
        
        <label htmlFor="submit-form" ><button type="submit" className='submit-form'>Register</button></label>
        <p>Already have an Account?
          <Link to='/login'><button>Log in</button></Link>
        </p>

      </form>
    </article>
  )
}

export default Register
