import React from 'react'
import CustomInput from '../components/CustomInput'

const AddCat = () => {
  return (
    <div>
      <h3 className='mb-4 title'>Agregar categoría</h3>
      <div className=''>
        <form action=''>
          <CustomInput type='text' label='Enter Category' />
          <button type='submit' className='btn btn-success my-4'>
            Añadir Category
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddCat
