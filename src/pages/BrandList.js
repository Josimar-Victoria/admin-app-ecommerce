import React, { useEffect } from 'react'
import { Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getBrands } from '../features/brand/brandSlice'
import { BiEdit } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const columns = [
  {
    title: 'SNo',
    dataIndex: 'key'
  },
  {
    title: 'Brand',
    dataIndex: 'brand',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.brand.length - b.brand.length
  },
  {
    title: 'Action',
    dataIndex: 'action'
  }
]

const BrandList = () => {
  const brandsState = useSelector(state => state.brand.brands)

  const dispatch = useDispatch()

  const data1 = []

  useEffect(() => {
    dispatch(getBrands())
  }, [dispatch])

  for (let i = 0; i < brandsState.length; i++) {
    data1.push({
      key: i + 1,
      brand: brandsState[i].title,
      action: (
        <div className=''>
          <Link className='fs-3' to='/'>
            <BiEdit />
          </Link>
          <Link className='fs-3 ms-3 text-danger' to='/'>
            <AiFillDelete />
          </Link>
        </div>
      )
    })
  }

  return (
    <div>
      <h3 className='mb-4 title'>Marcas</h3>
      <div className=''>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  )
}

export default BrandList
