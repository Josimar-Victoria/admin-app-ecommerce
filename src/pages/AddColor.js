import React from 'react'
import CustomInput from '../components/CustomInput'

const AddColor = () => {
  return (
    <div>
      <h3 className='mb-4 title'>Agregar Color</h3>
      <div className=''>
        <form action=''>
          <CustomInput type='color' label='Enter Color' />
          <button type='submit' className='btn btn-success my-4'>
            Añadir Color
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddColor
