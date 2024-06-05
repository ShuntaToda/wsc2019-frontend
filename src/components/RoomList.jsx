import React from 'react'
import { ProgramList } from './ProgramList'

export const RoomList = ({ room }) => {
  const programs = room.programs ?? []
  console.log(room.programs)
  return (
    <div className='ps-3 mb-3'>
      <div className='fs-5'>{room.name}</div>
      <div className='ps-3'>
        {programs.map(program => (
          <ProgramList key={program.id} program={program} />
        ))}
      </div>
    </div>
  )
}
