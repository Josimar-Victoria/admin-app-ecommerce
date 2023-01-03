import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { Stepper } from 'react-form-stepper'

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

const AddBlog = () => {
  const [desc, setDesc] = useState('')

  const handleDesc = e => {
    setDesc(e)
  }

  return (
    <div>
      <h3 className='mb-4 title'>Añadir Blog</h3>

      <Stepper
        steps={[
          { label: 'Agregar detalles del blog' },
          { label: 'Subir imágenes' },
          { label: 'Finalizar' }
        ]}
        activeStep={0}
      />
      <div className=''>
        <form action=''>
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
          <div className='mt-3'>
            <CustomInput type='text' label='Enter Blog Title' />
          </div>
          <select className='form-control py-3 my-2' name='' id=''>
            <option value=''>Seleccionar categoría de blog</option>
          </select>
          <ReactQuill
            theme='snow'
            value={desc}
            onChange={e => {
              handleDesc(e)
            }}
          />

          <button type='submit' className='btn btn-success my-4'>
            Añadir Blog
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddBlog
