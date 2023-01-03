import React from 'react'
import CustomInput from '../components/CustomInput'

const AddBlogCat = () => {
  return (
    <div>
      <h3 className='mb-4 title'>Agregar categoría de blog</h3>
      <div className=''>
        <form action=''>
          <CustomInput type='text' label='Enter Blog Category' />
          <button type='submit' className='btn btn-success border-0 rounded-3 my-5'>
            Añadir Blog Category
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddBlogCat
