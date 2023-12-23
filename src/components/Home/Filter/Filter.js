import { DownOutlined } from '@ant-design/icons'
import { Dropdown,Button,Space } from 'antd'
import { useState,useEffect } from 'react';
import axios from 'axios'


export default function Filter() {



      const items = [
        {
          label: 'Africa',
          key: '1',
        },
        {
          label: 'America',
          key: '2',
        },
        {
          label: 'Asia',
          key: '3',
        },
        {
          label: 'Europ',
          key: '4',
        },
        {
            label: 'Oceania',
            key: '5',
          },
      ];

      const menuProps = {
       items,
      };

      // const [sort,setSort] =useState('')

      // useEffect(() => {
      //   axios('https://restcountries.com/v3.1/all').then(({ data }) =>
      //     setSort(data)
      //   )
      // }, [sort])

  return (
    <div className='dropdown'>
    <Dropdown menu={menuProps} 
    // onClick={(id)=> setSort(id)}
    >
      <Button>
        <Space>
           Filter by Region
          <DownOutlined />
        </Space>
      </Button>
      </Dropdown>
    </div>
  )
}
