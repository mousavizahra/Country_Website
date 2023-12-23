import { useEffect, useState } from 'react'
 import  request from '../../tools/request'
import Cards from './CardForm'

export default function Card () {

  const [countreis, setCountreis] = useState([])

 
  useEffect(() => {
    request().then(({ data }) =>
      setCountreis(data)
    )
  }, [])

  
  
  return (
    <div className='cards'>
      {countreis.map(country => (
        <Cards key={country.id} country={country} />
      ))}
    </div>
  )
}
