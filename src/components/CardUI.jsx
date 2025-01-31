import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletUser } from '../store/slices/UserSlice';
import {Link} from "react-router-dom"

const CardUI = ({item}) => {
  const dispatch = useDispatch()
  return (
    <div className='grid grid-cols-3 gap-1 max-w-xs shadow-md shadow-gray-400 p-2'>
      <div>
        <b>Name</b>
        <p>{item.name}</p>
      </div>
      <div className='col-span-2'>
        <b>Email</b>
        <p>{item.email}</p>
      </div>
      <div>
        <b>Age</b>
        <p>{item.age}</p>
      </div>
      <div className='col-span-2'>
        <b>Gender</b>
        <p>{item.gender}</p>
      </div>
      <div className=''>
        <div className='flex gap-2'>
          <Link to={`/update/${item.id}`} className="px-2 cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Edit
          </Link>
          <button onClick={() => dispatch(deletUser(item.id))} className="px-2 cursor-pointer bg-red-700 text-white rounded-lg hover:bg-red-600 transition">
            Delete
          </button>
      </div>
      </div>
    </div>
  )
}

CardUI.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.string,
    gender: PropTypes.string,
    id:PropTypes.string,
  }).isRequired
}

export default CardUI;
