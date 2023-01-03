import React from 'react'
import CustomInput from '../components/CustomInput'

const AddBrand = () => {
  return (
    <div>
      <h3 className='mb-4 title'>Agregar Marca</h3>
      <div className=''>
        <form action=''>
          <CustomInput type='text' label='Enter Brand' />
          <button type='submit' className='btn btn-success my-4'>
            Añadir Marca
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddBrand
