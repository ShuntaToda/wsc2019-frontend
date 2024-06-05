import React from 'react'

export const RegisterTicket = ({ ticket, setTickets }) => {
  const clickTicket = () => {
    if (ticket.available === false) return
    setTickets(tickets => tickets.map(prevTicket => {
      if (prevTicket.id === ticket.id) prevTicket.selected = !ticket.selected
      return prevTicket
    })
    )
  }
  return (
    <div onClick={clickTicket} className='d-flex align-items-center border border-2 p-3' style={{ opacity: `${ticket.available ? "1" : "0.2"}` }}>
      <div className={`border rounded ${ticket.selected ? "bg-primary" : ""}`} style={{ width: "1rem", height: "1rem" }}></div>
      <div className='w-100 ps-3'>
        <div className='d-flex align-items-center justify-content-between' >
          <div className=''>{ticket.name}</div>
          <div>{Math.floor(ticket.cost)}.-</div>
        </div>
        <div>{ticket.description}</div>
      </div>
    </div>
  )
}
