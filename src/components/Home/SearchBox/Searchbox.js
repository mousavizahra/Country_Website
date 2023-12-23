import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import { useEffect, useState } from 'react'
import request from '../../tools/request'

export default function Searchbox() {

    const [countries, setCountries] = useState([])
    const  [name,setName] = useState('')


    useEffect(()=>{
         request().then(({data}) =>
         setCountries(data)
         )
    },[])

    const handleChange = (e) => setCountries(handleChangeInput(countries ,e))

    const handleChangeInput = (countreis , e) => {
        const name = e.target.value;
        var newCountries = countreis.filter((country)=>(
          country.name.official.toLowerCase().includes(name.toLowerCase())
        ))
        return newCountries
    }

     
  return (
    <div> 
        <div className='search' 
        >
    <Input placeholder='search for a country...' 
    prefix={<SearchOutlined/>}
    onChange={handleChange}
    />
    </div>
    </div>
  )
}
