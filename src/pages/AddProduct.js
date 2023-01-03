import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { InboxOutlined } from '@ant-design/icons'
import { message, Upload } from 'antd'
const { Dragger } = Upload

const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange (info) {
    const { status } = info.file
    if (status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`)
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  },
  onDrop (e) {
    console.log('Dropped files', e.dataTransfer.files)
  }
}

const AddProduct = () => {
  const [desc, setDesc] = useState('')

  const handleDesc = e => {
    setDesc(e)
  }

  return (
    <div>
      <h3 className='mb-4 title'>Agregar Productos</h3>
      <div className=''>
        <form action=''>
          <CustomInput type='text' label='Ingrese el título del producto' />

          <div className='mt-3'>
            <ReactQuill
              theme='snow'
              value={desc}
              onChange={e => {
                handleDesc(e)
              }}
            />
          </div>
          <CustomInput type='text' label='Ingrese el Precio del Producto' />
          <select className='form-control py-3 my-2' name='' id=''>
            <option value=''>Seleccionar Marca de Producto</option>
          </select>
          <select className='form-control py-3 my-2' name='' id=''>
            <option value=''>Seleccionar categoría de Producto</option>
          </select>
          <select className='form-control py-3 my-2' name='' id=''>
            <option value=''>Seleccionar Color</option>
          </select>

          <Dragger {...props}>
            <p className='ant-upload-drag-icon'>
              <InboxOutlined />
            </p>
            <p className='ant-upload-text'>
              Haga clic o arrastre el archivo a esta área para cargarlo
            </p>
            <p className='ant-upload-hint'>
              Soporte para una carga única o masiva. Prohibir estrictamente
              cargar datos de la empresa u otros archivos de bandas
            </p>
          </Dragger>

          <button
            className='btn btn-success border-0 rounded-3 my-5'
            type='submit'
          >
            Agreagar Producto
          </button>
        </form>
      </div>
      AddProduct
    </div>
  )
}

export default AddProduct
