import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { LoginBtn } from "./components/LoginBtn";
import { useEffect, useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Login } from "./components/Login";
import { EventIndex } from "./components/EventIndex";
import { Event } from "./components/Event";
import { Program } from "./components/Program";


function App() {
  const [attendee, setAttendee, removeAttendee] = useLocalStorage("attendee", null)
  const [page, setPage] = useState({ section: "eventList", data: {} })
  const isLogin = attendee !== null

  useEffect(() => {
    if (isLogin) setPage({ section: "eventList", data: "" })
  }, [])

  const clickTitle = () => {
    setPage({ section: "eventList" })
  }
  return (
    <div className="container">
      <div className="mt-5 d-flex justify-content-between align-items-center">
        <h1 className="" style={{ cursor: "pointer" }} onClick={clickTitle}>Event Booking Platform</h1>
        <div>
          <LoginBtn isLogin={isLogin} setPage={setPage} removeAttendee={removeAttendee} attendee={attendee} />
        </div>
      </div>
      <div className="mt-4 border p-4">

        {page.section === "login" && <Login setPage={setPage} setAttendee={setAttendee} />}
        {page.section === "eventList" && <EventIndex setPage={setPage} attendee={attendee} />}
        {page.section === "eventDetail" && <Event page={page} setPage={setPage} attendee={attendee} />}
        {page.section === "programDetail" && <Program page={page} setPage={setPage} />}

      </div>
    </div>
  );
}

export default App;
