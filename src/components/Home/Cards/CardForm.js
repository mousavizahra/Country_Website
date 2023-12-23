import { Card } from 'antd';

export default function CardForm({country}) {

    const {Meta}=Card
  return (
   <div className='cards'>
     <Card 
    className='card'
     key={country.id}
    hoverable
    style={{
      width: 240,
    }}
    cover={<img src={country.flags.png}/> }
  >
    <Meta
    title={country.name.official} />
      <br/>
      <b>Population:</b>{country.population}
      <br/>
      <b>Region:</b>{country.region}
      <br/>
      <b>Capital:</b>{country.Capital}
  </Card>
   </div>
  )
}
