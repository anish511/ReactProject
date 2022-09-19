import React from 'react'
import Card from './shared/Card'
import { useContext, useState } from 'react'
import userContext from '../context/userContext'
import "../style/registerform.css"
import Button from './shared/Button'

function Form() {
  const { nameRef, handleUserName } = useContext(userContext);
  const { emailRef, handleEmail } = useContext(userContext);
  const { passRef, handlePassword } = useContext(userContext);

  return (
    <div className='d-flex justify-content-center align-item-center'>
      <Card>
        <form className='register-form'>
          <div className='d-flex justify-content-center'>
            <div className='container'>
              <input ref={nameRef} type='text' name='username'
                placeholder='Name' />

              <input ref={emailRef} type='email' name='useremail'
                placeholder='Email'
              />

              <input ref={passRef} type='password' name='userpassword'
                placeholder='Password' />

              <div className='d-flex justify-content-between'>
                <Button btnType="button" btnColorStyle="texted" btnSize="small" >Login</Button>

                <input className="primary small" type="submit" value="Submit" onClick={(e) => handleUserName(e)} />
              </div>
            </div>
          </div>
        </form>
      </Card>
    </div>

  )
}

export default Form