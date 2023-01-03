import React, { useEffect } from 'react'
import CustomInput from '../components/CustomInput'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../features/auth/authSlice'

const Login = () => {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    state => state.auth
  )

  const dispatch = useDispatch()
  const navigate = useNavigate()

  let schema = Yup.object().shape({
    email: Yup.string()
      .email('Dirección de correo electrónico no válida')
      .required('El correo electrónico es un campo obligatorio'),
    password: Yup.string()
      .min(6, 'Tu contraseña debe tener mas de 6 caracteres')
      .required('La contraseña es un campo requerido ')
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: schema,
    onSubmit: values => {
      dispatch(login(values))
    }
  })

  useEffect(() => {
    if (!user == null || isSuccess) {
      navigate('admin')
    } else {
      alert('Tu contraseña y correo eletronico son incorrecto')
    }
  }, [user, isSuccess, navigate])

  return (
    <div className='py-5' style={{ background: '#ffd333', minHeight: '100vh' }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='my-5 w-25 bg-white rounded-3 mx-auto p-3'>
        <h3 className='text-center title'>Login</h3>
        <p className='text-center'>Login to your account to continue.</p>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor='firstName'>Email</label>
          <CustomInput
            name='email'
            type='text'
            placeholder='Email Adress'
            id='email'
            onChng={formik.handleChange('email')}
            onBlr={formik.handleChange('email')}
            val={formik.values.email}
          />
          <div className='error'>
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>

          <label htmlFor='password'>Password</label>
          <CustomInput
            name='password'
            type='password'
            placeholder='Password'
            id='pass'
            onChng={formik.handleChange('password')}
            onBlr={formik.handleChange('password')}
            val={formik.values.password}
          />
          <div className='error'>
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          <div className='mb-3 text-end'>
            <Link to='forgot-password'>Forgot Password</Link>
          </div>

          <button
            className='border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none'
            style={{ background: '#ffd333' }}
            type='submit'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
