import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../store/userSlice'


function ProfilePage() {

  const user = useSelector((state) => state.user.user)
  const dispatch = useDispatch()

  return (
    <div>Profile page
      <button
          onClick={() => dispatch(login())}
        >
          login
        </button>
      <div>{user}</div>
      <button
          onClick={() => dispatch(logout())}
        >
          logout
        </button>
        
    </div>

  )
}

export default ProfilePage