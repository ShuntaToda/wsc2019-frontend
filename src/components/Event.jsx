import React, { useEffect, useState } from 'react'
import { getEventDetailApi } from '../apis/events'
import { ChannelList } from './ChannelList'
import { getRegistrationsApi } from '../apis/registrations'

export const Event = ({ page, setPage, attendee }) => {
  const [eventDetail, setEventDetail] = useState({})
  const channels = eventDetail.channels ?? []

  const [registrations, setRegistrations] = useState([])

  const getEventDetail = async () => {
    const data = await getEventDetailApi(page.data.event);
    if (data) setEventDetail(data)
  }

  const getRegistrations = async () => {
    const data = await getRegistrationsApi(attendee)
    if (data) setRegistrations(data.registrations.filter(registration => registration.event.id === page.data.event.id))
  }

  useEffect(() => {
    if (page.data.event === undefined) return setPage({ section: "eventList" })
    console.log(attendee)
    if (attendee) getRegistrations()
    getEventDetail()
  }, [])

  const clickRegisterEventBtn = () => {
    setPage({ section: "registerEvent", data: eventDetail })
  }
  return (
    <div className='mt-3'>
      <div className='d-flex align-items-center justify-content-between'>
        <h2>{page.data.event.name}</h2>
        <div className='btn btn-outline-primary' onClick={clickRegisterEventBtn}>Register for this event</div>
      </div>
      <div className='mt-3'>
        {channels.map((channel) => <ChannelList key={channel.id} setPage={setPage} channel={channel} registrations={registrations} />)}
      </div>
    </div>
  )
}
