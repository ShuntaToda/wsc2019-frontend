import React from 'react'
import { ProgramList } from './ProgramList'

export const RoomList = ({ room, registrations, setPage }) => {
  const programs = room.programs ?? []
  return (
    <div className='ps-3 mb-3'>
      <div className='fs-5'>{room.name}</div>
      <div className='ps-3'>
        {programs.map(program => (
          <ProgramList key={program.id} setPage={setPage} registrations={registrations} program={program} />
        ))}
      </div>
    </div>
  )
}
