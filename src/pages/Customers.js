import React, { useEffect } from 'react'
import { Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../features/customers/customerSlice'

const columns = [
  {
    title: 'SNo',
    dataIndex: 'key'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.name.length - b.name.length
  },
  {
    title: 'Email',
    dataIndex: 'email',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.email.length - b.email.length
  },
  {
    title: 'Mobile',
    dataIndex: 'mobile',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.mobile.length - b.mobile.length
  }
]

const Customers = () => {
  const customerState = useSelector(state => state.customer.customers)

  const dispatch = useDispatch()

  const data1 = []

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  for (let i = 0; i < customerState.length; i++) {
    if (customerState[i].role !== 'admin') {
      data1.push({
        key: i + 1,
        name: customerState[i].firstname + ' ' + customerState[i].lastname,
        email: customerState[i].email,
        mobile: customerState[i].mobile
      })
    }
  }

  return (
    <div>
      <h3 className='mb-4 title'>Clientes</h3>
      <div className=''>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  )
}

export default Customers
