import React from 'react'

export const EventList = ({ event, setPage }) => {
  const date = new Date(event.date)
  const selectEvent = () => {
    console.log({
      section: "eventDetail", data: {
        event
      }
    })

    setPage({
      section: "eventDetail", data: {
        event
      }
    })
  }
  return (
    <div className='p-3 border my-3' onClick={selectEvent}>
      <div className='fw-bold fs-5'>{event.name}</div>
      <div>Organizer {event.organizer.name}, {date.toLocaleString("en-US", { month: "long" })} {date.getDate()}, {date.getFullYear()}</div>
    </div>
  )
}
