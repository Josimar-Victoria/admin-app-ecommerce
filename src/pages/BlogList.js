import React, { useEffect } from 'react'
import { Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogs } from '../features/blog/blogSlice'
import { BiEdit } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const columns = [
  {
    title: 'SNo',
    dataIndex: 'key'
  },
  {
    title: 'Title',
    dataIndex: 'title',
    sorter: (a, b) => a.title.length - b.title.length
  },
  {
    title: 'Description',
    dataIndex: 'description',
    sorter: (a, b) => a.description.length - b.description.length
  },
  {
    title: 'Category',
    dataIndex: 'category',
    sorter: (a, b) => a.category.length - b.category.length
  },
  {
    title: 'Action',
    dataIndex: 'action'
  }
]

const BlogList = () => {
  const blogState = useSelector(state => state.blog.blogs)

  const dispatch = useDispatch()

  const data1 = []

  useEffect(() => {
    dispatch(getBlogs())
  }, [dispatch])

  for (let i = 0; i < blogState.length; i++) {
    data1.push({
      key: i + 1,
      title: blogState[i].title,
      description: blogState[i].description,
      category: blogState[i].category,

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
      <h3 className='mb-4 title'>Lista de blogs</h3>
      <div className=''>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  )
}

export default BlogList
