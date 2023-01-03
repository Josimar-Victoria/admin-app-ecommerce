import React from 'react'
import { BsArrowDownRight, BsArrowUpLeft } from 'react-icons/bs'
import { Column } from '@ant-design/plots'
import { Table } from 'antd'

const Dashboard = () => {
  const data = [
    {
      type: 'Ene',
      sales: 38
    },
    {
      type: 'Feb',
      sales: 52
    },
    {
      type: 'Mar',
      sales: 61
    },
    {
      type: 'Abr',
      sales: 145
    },
    {
      type: 'May',
      sales: 48
    },
    {
      type: 'Jun',
      sales: 38
    },
    {
      type: 'Jul',
      sales: 38
    },
    {
      type: 'Ago',
      sales: 38
    },
    {
      type: 'Sept',
      sales: 38
    },
    {
      type: 'Oct',
      sales: 38
    },
    {
      type: 'Nov',
      sales: 38
    },
    {
      type: 'Dec',
      sales: 38
    }
  ]

  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    color: ({ type }) => {
      return '#ffd333'
    },
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 1
      }
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false
      }
    },
    meta: {
      type: {
        alias: 'Mes'
      },
      sales: {
        alias: 'Ingresos'
      }
    }
  }

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
      <h3 className='mb-4 title'>Dashboard</h3>
      <div className='d-flex justify-content-between aling-items gap-3'>
        <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3'>
          <div className=''>
            <p>Total</p> <h4 className='mb-0 sub-title'>1100</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6 className='green'>
              <BsArrowUpLeft />
              32%
            </h6>
            <p className='mb-0 desc'>Compared To April 2021</p>
          </div>
        </div>

        <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3'>
          <div className=''>
            <p>Total</p> <h4 className='mb-0 sub-title'>1100</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6 className='red'>
              <BsArrowDownRight />
              32%
            </h6>
            <p className='mb-0 desc'>Compared To April 2021</p>
          </div>
        </div>

        <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3'>
          <div className=''>
            <p>Total</p> <h4 className='mb-0 sub-title'>1100</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6 className='red'>
              <BsArrowDownRight />
              32%
            </h6>
            <p className='mb-0 desc'>Compared To April 2021</p>
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <h3 className='mb-4 title'>Estadísticas de ingresos</h3>
        <div className=''>
          <Column {...config} />;
        </div>
      </div>
      <div className='mt-4'>
        <h3 className='mb-4 title'>órdenes recientes</h3>
        <div className=''>
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
