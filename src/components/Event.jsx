import React, { useEffect } from 'react'

export const Event = ({ page, setPage, attendee }) => {
  useEffect(() => {
    if (page.data.event === undefined) setPage({ section: "eventList" })
  }, [])
  return (
    <div>
      <h2>{page.data.event.name}</h2>
    </div>
  )
}
