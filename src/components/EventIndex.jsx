import React, { useEffect, useState } from 'react'
import { getEventsApi } from '../apis/events'
import { EventList } from './EventList'

export const EventIndex = ({ attendee, setPage }) => {

  const [events, setEvents] = useState([])

  const getEvents = async () => {
    const data = await getEventsApi(attendee)
    setEvents(data)
  }

  useEffect(() => {
    getEvents()
  }, [])
  return (
    <div>
      <h2>EventIndex</h2>
      <div className='mt-4'>
        {events.map(event => <EventList setPage={setPage} key={event.id} event={event} />)}
      </div>
    </div>
  )
}
