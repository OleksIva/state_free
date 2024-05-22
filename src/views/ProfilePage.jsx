import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../store/userSlice'

function ProfilePage() {
  const user = useSelector((state) => state.user.user)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Profile page</h1>
      <button onClick={() => dispatch(login("Lena"))}>login</button>
      <p>{user}</p>
      <button onClick={() => dispatch(logout())}>logout</button>
    </div>
  )
}

export default ProfilePage