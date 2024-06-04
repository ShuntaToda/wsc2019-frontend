import { useState } from "react"

export const useLocalStorage = (key, init) => {
  const [value, setValue] = useState(() => {
    if (localStorage.getItem(key)) return JSON.parse(localStorage.getItem(key))
    localStorage.setItem(key, init)
    return init
  })

  const setStorage = (item) => {
    localStorage.setItem(key, JSON.stringify(item))
    setValue(item)
    return
  }

  const removeStorage = () => {
    localStorage.removeItem(key)
    setValue(null)
    return
  }
  return [value, setStorage, removeStorage]
}