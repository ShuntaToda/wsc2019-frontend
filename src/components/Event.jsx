import React from 'react'

export const Event = ({ event }) => {
  const date = new Date(event.date)
  const selectEvent = () => {
    console.log()
  }
  return (
    <div className='p-3 border my-3' onClick={selectEvent}>
      <div className='fw-bold fs-5'>{event.name}</div>
      <div>Organizer {event.organizer.name}, {date.toLocaleString("en-US", { month: "long" })} {date.getDate()}, {date.getFullYear()}</div>
    </div>
  )
}
