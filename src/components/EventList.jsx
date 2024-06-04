import React, { useEffect, useState } from 'react'
import { getEventsApi } from '../apis/events'
import { Event } from './Event'

export const EventList = ({ attendee }) => {

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
      <h2>EventList</h2>
      <div className='mt-4'>
        {events.map(event => <Event key={event.id} event={event} />)}
      </div>
    </div>
  )
}
