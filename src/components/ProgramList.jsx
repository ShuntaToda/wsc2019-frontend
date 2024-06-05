import React from 'react'

export const ProgramList = ({ program }) => {
  return (
    <div className='d-flex'>
      <div>{program.start}</div>
      <div className='ps-4'>
        {program.title}
      </div>
    </div>
  )
}
