import { appPath } from "./path"

export const checkLoginApi = async (lastname, registrationCode) => {
  const path = appPath + "login"

  try {
    const res = await fetch(path, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        lastname,
        "registration_code": registrationCode
      }),
    })

    const data = await res.json()
    return data
  } catch (e) {
    console.error(e)
    return false
  }
}

export const logoutApi = async (attendee) => {
  const path = appPath + "logout"

  try {
    const res = await fetch(path, {
      method: "post",
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