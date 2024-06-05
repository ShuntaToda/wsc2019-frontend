import React, { useEffect, useState } from 'react'
import { RegisterTicket } from './RegisterTicket'
import { RegisterWorkshop } from './RegisterWorkshop'
import { RegisterCounter } from './RegisterCounter'
import { PurchaseBtn } from './PurchaseBtn'

export const RegisterEvent = ({ page, setPage, attendee }) => {
  const event = page.data
  const [tickets, setTickets] = useState(event.tickets.map(ticket => { return { ...ticket, selected: false } }))
  const [workshops, setWorkshops] = useState([])


  const getInitWorkshops = () => {
    return event.channels.flatMap(channel => {
      return channel.rooms.flatMap(room => {
        return room.programs.filter(program => {
          if (program.type === "workshop") {
            program.selected = false
            return true
          }
        })
      })
    })
  }

  useEffect(() => {
    setWorkshops(getInitWorkshops())
  }, [])
  return (
    <div>
      <h2>{event.name}</h2>
      <div className='row row-cols-3'>
        {tickets.map(ticket => (<RegisterTicket key={ticket.id} ticket={ticket} setTickets={setTickets} />))}
      </div>
      <div className='mt-4'>
        <h3>Select additional workshops you want to book:</h3>
        <div className='mt-2 ps-3'>
          {workshops.map(workshop => <RegisterWorkshop key={workshop.id} workshop={workshop} setWorkshops={setWorkshops} />)}
        </div>
      </div>
      <div className='mt-3 d-flex justify-content-end'>
        <div>
          <RegisterCounter tickets={tickets} workshops={workshops} />
          <PurchaseBtn workshops={workshops} tickets={tickets} event={event} attendee={attendee} />
        </div>
      </div>
    </div>
  )
}
