import React from 'react'

export const RegisterWorkshop = ({ workshop, setWorkshops }) => {
  const changeSelected = () => {
    setWorkshops(prevWorkshops => prevWorkshops.map((prevWorkshop) => {
      if (prevWorkshop.id === workshop.id) prevWorkshop.selected = !workshop.selected
      return prevWorkshop
    })
    )
  }
  return (
    <div className='d-flex align-items-center py-3' onClick={changeSelected}>
      <div className={`border rounded ${workshop.selected ? "bg-primary" : ""}`} style={{ width: "1rem", height: "1rem" }}></div>
      <div className='ps-3'>{workshop.title}</div>
    </div>)
}
