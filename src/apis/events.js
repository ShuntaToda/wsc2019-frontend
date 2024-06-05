import { appPath } from "./path"

export const getEventsApi = async () => {

  const path = appPath + "events"

  try {
    const res = await fetch(path, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
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

export const getEventDetailApi = async (event) => {

  const path = appPath + `organizers/${event.organizer.slug}/events/${event.slug}`
  try {
    const res = await fetch(path, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
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