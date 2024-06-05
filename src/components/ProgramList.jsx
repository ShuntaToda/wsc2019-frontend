import React, { useState } from 'react'

export const ProgramList = ({ program, registrations, setPage }) => {

  const selectBorderColor = () => {
    if (program.type === "talk") return "green"
    const isRegistrated = registrations.some(registration => {
      return registration.session_ids.includes(program.id)
    })
    if (isRegistrated) return program.type === "talk" ? "green" : "gray"
    return false

  }

  const isSelectedBorderColor = selectBorderColor() ?? false

  const clickProgram = () => {

  }
  return (
    <div className={`d-flex gap-3 my-2 `} onClick={clickProgram} style={isSelectedBorderColor ? { border: `solid ${selectBorderColor()} 2px` } : {}} >
      <div>{program.start}</div>
      <div>{program.end}</div>
      <div className=''>
        {program.title}
      </div>
    </div>
  )
}
