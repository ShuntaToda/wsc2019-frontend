import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { LoginBtn } from "./components/LoginBtn";
import { useEffect, useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Login } from "./components/Login";
import { EventList } from "./components/EventList";


function App() {
  const [attendee, setAttendee, removeAttendee] = useLocalStorage("attendee", null)
  const [page, setPage] = useState("none")
  const isLogin = attendee !== null

  useEffect(() => {
    if (isLogin) setPage("eventList")
  }, [])

  return (
    <div className="container">
      <div className="mt-5 d-flex justify-content-between align-items-center">
        <h1 className="">Event Booking Platform</h1>
        <div>
          <LoginBtn isLogin={isLogin} setPage={setPage} removeAttendee={removeAttendee} attendee={attendee} />
        </div>
      </div>
      <div className="mt-4 border p-4">

        {page === "login" && <Login setPage={setPage} setAttendee={setAttendee} />}
        {page === "eventList" && <EventList />}

      </div>
    </div>
  );
}

export default App;
