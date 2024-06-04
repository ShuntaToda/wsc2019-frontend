import React from 'react'

export const LoginBtn = ({ setPage, isLogin, removeAttendee }) => {
  const handleLogin = () => {
    setPage("login")
  }
  const handleLogout = () => {
    removeAttendee()
    setPage("none")
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
