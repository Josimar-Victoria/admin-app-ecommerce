import React from 'react'
import { BiEdit } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
import { Table } from 'antd'

const ProductLits = () => {
  const columns = [
    {
      title: 'SNo',
      dataIndex: 'key'
    },
    {
      title: 'Nombre',
      dataIndex: 'name'
    },
    {
      title: 'productos',
      dataIndex: 'productos'
    },
    {
      title: 'Estado',
      dataIndex: 'Status'
    }
  ]

  const data1 = []

  for (let i = 0; i < 46; i++) {
    data1.push({
      key: i,
      name: `Edward King ${i}`,
      productos: `London, Park Lane no. ${i}`,
      Status: `enviao. ${i}`
    })
  }

  return (
    <div>
      <h3 className='mb-4 title'>Producto</h3>
      <div className=''>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  )
}

export default ProductLits
