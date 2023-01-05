import React, { useEffect } from 'react'
import { BiEdit } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
import { Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../features/product/producSlice'
import { Link } from 'react-router-dom'

const columns = [
  {
    title: 'SNo',
    dataIndex: 'key'
  },
  {
    title: 'Title',
    dataIndex: 'title',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.title.length - b.title.length
  },
  {
    title: 'Description',
    dataIndex: 'description',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.description.length - b.description.length
  },
  {
    title: 'Brand',
    dataIndex: 'brand',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.brand.length - b.brand.length
  },
  {
    title: 'Category',
    dataIndex: 'category',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.category.length - b.category.length
  },
  {
    title: 'Color',
    dataIndex: 'color',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.color.length - b.color.length
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.quantity.length - b.quantity.length
  },
  {
    title: 'Price',
    dataIndex: 'price',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.price.length - b.price.length
  },

  {
    title: 'Action',
    dataIndex: 'action'
  }
]

const ProductLits = () => {
  const productsState = useSelector(state => state.product.products)

  const dispatch = useDispatch()

  const data1 = []

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  for (let i = 0; i < productsState.length; i++) {
    data1.push({
      key: i + 1,
      title: productsState[i].title,
      description: productsState[i].description,
      brand: productsState[i].brand,
      category: productsState[i].category,
      quantity: productsState[i].quantity,
      color: productsState[i].color,
      price: `$ ${productsState[i].price}`,
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
      <h3 className='mb-4 title'>Producto</h3>
      <div className=''>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  )
}

export default ProductLits
