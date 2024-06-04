import { appPath } from "./path"

export const getEventsApi = async (attendee) => {

  const path = appPath + "events"

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
