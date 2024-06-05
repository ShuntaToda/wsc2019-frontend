import React from 'react'
import { logoutApi } from '../apis/loginApi'

export const LoginBtn = ({ setPage, isLogin, removeAttendee, attendee }) => {
  const handleLogin = () => {
    setPage({ section: "login", data: {} })
  }
  const handleLogout = async () => {
    setPage({ section: "eventList", data: {} })
    const result = await logoutApi(attendee)
    if (result.message !== "Logout success") console.error("logout error")
    removeAttendee()

  }
  return (
    <div>
      {isLogin ? (
        <div className="btn btn-primary" onClick={handleLogout}>logout</div>
      ) : (
        <div className="btn btn-primary" onClick={handleLogin}>login</div>
      )}
    </div>
  )
}
