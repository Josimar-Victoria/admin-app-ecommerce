import React from 'react'
import { Table } from 'antd'

const BlogCatList = () => {
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
      <h3 className='mb-4 title'>Lista de categorías de blogs</h3>
      <div className=''>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  )
}

export default BlogCatList
