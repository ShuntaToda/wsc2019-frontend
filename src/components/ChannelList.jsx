import React from 'react'
import { RoomList } from './RoomList'

export const ChannelList = ({ channel, registrations }) => {
  const rooms = channel.rooms ?? []
  return (
    <div className='p-4 border my-3'>
      <div className='fs-4'>{channel.name}</div>
      <div className='mt-2'>
        {rooms.map(room => <RoomList key={room.id} room={room} registrations={registrations} />)}
      </div>
    </div>
  )
}
