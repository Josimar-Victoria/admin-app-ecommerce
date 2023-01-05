import React, { useEffect } from 'react'
import { Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogCategory } from '../features/blogCategory/bCategorySlice'
import { BiEdit } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const columns = [
  {
    title: 'SNo',
    dataIndex: 'key'
  },
  {
    title: 'Blog Category',
    dataIndex: 'category',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.category.length - b.category.length
  },
  {
    title: 'Action',
    dataIndex: 'action'
  }
]

const BlogCatList = () => {
  const bCategoriesState = useSelector(state => state.blogCategorie.bCategories)

  const dispatch = useDispatch()

  const data1 = []

  useEffect(() => {
    dispatch(getBlogCategory())
  }, [dispatch])

  for (let i = 0; i < bCategoriesState.length; i++) {
    data1.push({
      key: i + 1,
      category: bCategoriesState[i].title,
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
      <h3 className='mb-4 title'>Lista de categorías de blogs</h3>
      <div className=''>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  )
}

export default BlogCatList
