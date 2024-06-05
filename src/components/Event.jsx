import React, { useEffect, useState } from 'react'
import { getEventDetailApi } from '../apis/events'
import { ChannelList } from './ChannelList'

export const Event = ({ page, setPage, attendee }) => {
  const [eventDetail, setEventDetail] = useState({})
  const channels = eventDetail.channels ?? []

  const getEventDetail = async () => {
    const data = await getEventDetailApi(page.data.event);
    if (data) setEventDetail(data)
  }
  useEffect(() => {
    if (page.data.event === undefined) return setPage({ section: "eventList" })
    getEventDetail()
  }, [])
  return (
    <div>
      <h2>{page.data.event.name}</h2>
      <div className='mt-3'>
        {channels.map((channel) => <ChannelList key={channel.id} channel={channel} />)}
      </div>
    </div>
  )
}
