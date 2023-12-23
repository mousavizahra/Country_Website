
import Filter from './Filter/Filter'
import Card from './Cards/CardApi'
import SearchBox from './SearchBox/Searchbox'
import '../../assets/scss/style.scss'
 import { Link} from 'react-router-dom'

export default function index () {
  return (
    <div className='index'>
     
      <SearchBox/>
      <Filter />
      <Link to='/full'> 
       <Card />
       </Link>
    </div>
  )
}
