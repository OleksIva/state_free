import React from 'react'
import './ProfilePage.css';
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../store/userSlice'

function ProfilePage() {
  // const user = useSelector(state => state.user.username)
  // const nationality = useSelector(state => state.user.nationality)
  // const age = useSelector(state => state.user.age)
  const { username, nationality, age } = useSelector(state => state.user)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Profile page</h1>
      <button onClick={() => dispatch(login("Lena"))}>login</button>
      <p>{username}</p>
      <p>{nationality}</p>
      <p>{age}</p>
      <button onClick={() => dispatch(logout())}>logout</button>
    </div>
  )
}

export default ProfilePage