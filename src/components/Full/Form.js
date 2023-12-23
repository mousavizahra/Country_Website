import { useEffect, useState } from 'react'
import { Image } from 'antd';
import request from '../tools/request';

export default function Form() {

    const [country, setCountry] = useState([])

    useEffect(()=>{
        request('/alpha/170').then(({data}) =>
        setCountry(data)
        )},[])
    console.log(country)
  return (
    <div> 
        {/* <Image
    width={200}
    src={countreis.flags}
  /> */}
    </div>
  )
}
