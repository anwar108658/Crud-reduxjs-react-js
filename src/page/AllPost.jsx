import { useEffect } from 'react'
import {getUsers} from '../store/slices/UserSlice'
import {useDispatch,useSelector} from "react-redux";
import loading from "../image/load.gif"
import CardUI from "../components/CardUI"
const AllPost = () => {
  const  dispatch = useDispatch();
  const {isloading,userData} = useSelector(state => state.UserSlice)
  useEffect(() => {
  dispatch(getUsers())
  },[])

  if (isloading) {
    return <div className='w-full h-screen flex items-center justify-center'>
      <img className='w-20 h-20' src={loading} alt="" />
    </div>
  }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-3'>
      {
        userData.map((items,index) => (
          <CardUI key={index} item={items}/>
        ))
      }
    </div>
  )
}

export default AllPost