import React from 'react'

export const Program = ({ page, setPage }) => {
  const program = page.data
  console.log(program)
  const startDate = new Date(program.start)
  const endDate = new Date(program.end)
  return (
    <div>
      <h2>{program.title}</h2>
      <div>{program.description}</div>
      <table className='table w-50 mt-3'>
        <tr>
          <td className='fw-bold'>Speaker:</td>
          <td>{program.speaker}</td>
        </tr>
        <tr>
          <td className='fw-bold'>Start:</td>
          <td>{startDate.getHours()}:{startDate.getMinutes()}</td>
        </tr>
        <tr>
          <td className='fw-bold'>End:</td>
          <td>{endDate.getHours()}:{endDate.getMinutes()}</td>
        </tr>
        <tr>
          <td className='fw-bold'>Cost:</td>
          <td>{program.cost}</td>
        </tr>
      </table>
    </div>
  )
}
