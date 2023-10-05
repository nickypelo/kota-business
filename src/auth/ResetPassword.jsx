import React from 'react';

const ResetPassword = () => {

  const sendRequest = (e) =>{
    e.preventDefault();
    console.log('Reset')
  }

  return (
    <article className="reset-pwd">
        <h2>Reset Password</h2>
        <form action="" className="reset-form" onSubmit={sendRequest}>
            <label htmlFor="">
                Enter email: <input type="email" name='email'/>
            </label>
            <label htmlFor=""><input type="submit" className='reset-submit'/></label>
        </form>
        

    </article>
  )
}

export default ResetPassword
