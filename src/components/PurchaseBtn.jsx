import React from 'react'
import { registerEventApi } from '../apis/registrations'

export const PurchaseBtn = ({ workshops, tickets, event, attendee }) => {

  const registerEvent = async (ticket) => {
    const programIds = workshops.filter(workshop => workshop.selected)
    const body = { ticket_id: ticket.id, session_ids: programIds }
    const data = await registerEventApi(attendee, event, body)
  }

  const clickPurchaseBtn = () => {
    tickets.forEach(ticket => {
      if (ticket.selected === false) return
      registerEvent(ticket)
    });
  }
  return (
    <div className='btn btn-primary mt-3' onClick={clickPurchaseBtn}>RegisterPurchaseBtn</div>
  )
}
