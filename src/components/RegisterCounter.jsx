import React from 'react'

export const RegisterCounter = ({ tickets, workshops }) => {
  const ticketCostCount = tickets.reduce((sum, ticket) => {
    const ticketCost = ticket.selected ? parseInt(ticket.cost) : 0
    return sum + ticketCost
  }, 0)
  const workshopCostCount = workshops.reduce((sum, workshop) => {
    const workshopCost = workshop.selected ? parseInt(workshop.cost) : 0
    return sum + workshopCost
  }, 0)
  return (
    <table>
      <tbody>
        <tr>
          <td>Event ticket:</td>
          <td className='ps-3'>{ticketCostCount}.-</td>
        </tr>
        <tr>
          <td>Additional workshops:</td>
          <td className='ps-3'>{workshopCostCount}.-</td>
        </tr>
      </tbody>
      <tfoot className='border-top fw-bold'>
        <tr>
          <td>Total:</td>
          <td className='ps-3'>{ticketCostCount + workshopCostCount}.-</td>
        </tr>
      </tfoot>
    </table>
  )
}
