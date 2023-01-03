import React from 'react'
import CustomInput from '../components/CustomInput'
import { Link } from 'react-router-dom'

const Forgotpassword = () => {
  return (
    <div className='py-5' style={{ background: '#ffd333', minHeight: '100vh' }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='my-5 w-25 bg-white rounded-3 mx-auto p-3'>
        <h3 className='text-center'>Forgot Password</h3>
        <p className='text-center'>
          Please enter your register email to get reset password email.
        </p>
        <form action=''>
          <CustomInput type='email' label='Email Adress' id='email' />

          <Link to='/admin'
            className='border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none'
            style={{ background: '#ffd333' }}
            type='submit'
          >
            Sent Link
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Forgotpassword
