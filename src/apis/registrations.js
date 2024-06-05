import { appPath } from "./path"

export const getRegistrationsApi = async (attendee) => {
  const path = appPath + "registrations"

  try {
    const res = await fetch(path, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer " + attendee.token
      }
    })

    const data = await res.json()
    console.log(data)
    return data
  } catch (e) {
    console.error(e)
    return false
  }
}


export const registerEventApi = async (attendee, event, body) => {

  const path = appPath + `organizers/${event.organizer.slug}/events/${event.slug}/registration`

  try {
    const res = await fetch(path, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer " + attendee.token
      },
      body: JSON.stringify(body)
    })

    const data = await res.json()
    console.log(data)
    return data
  } catch (e) {
    console.error(e)
    return false
  }
}