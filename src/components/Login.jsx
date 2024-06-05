import React, { useState } from 'react'
import { checkLoginApi } from '../apis/loginApi'

export const Login = ({ setPage, setAttendee }) => {
  const [message, setMessage] = useState("")

  const checkLogin = async (lastname, registrationCode) => {
    const data = await checkLoginApi(lastname, registrationCode)
    return data
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const lastname = form.get("lastname")
    const registrationCode = form.get("registrationCode")

    const data = await checkLogin(lastname, registrationCode)
    setAttendee(data)
    if (data === false) return
    if (data.token) {
      setPage({ section: "eventList", data: {} })
    } else if (data.message) {
      setMessage(data.message)
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form className='mt-4' onSubmit={handleSubmit}>
        <div className='input-group mb-3'>
          <label className='input-group-text'>Lastname</label>
          <input type="text" className='form-control' name='lastname' />
        </div>
        <div className='input-group mb-3'>
          <label className='input-group-text'>registration Code</label>
          <input type="text" className='form-control' name='registrationCode' />
        </div>
        <div style={{ color: "red" }}>{message}</div>
        <button type="submit" className='btn btn-primary'>Login</button>
      </form>
    </div>
  )
}
