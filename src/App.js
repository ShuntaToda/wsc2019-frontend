import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { LoginBtn } from "./components/LoginBtn";
import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Login } from "./components/Login";


function App() {
  const [attendee, setAttendee, removeAttendee] = useLocalStorage("attendee", null)
  const isLogin = attendee !== null
  const [page, setPage] = useState("none")

  return (
    <div className="container">
      <div className="mt-5 d-flex justify-content-between align-items-center">
        <h1 className="">Event Booking Platform</h1>
        <div>
          <LoginBtn isLogin={isLogin} setPage={setPage} removeAttendee={removeAttendee} />
        </div>
      </div>
      <div className="mt-4 border p-4">

        {page === "login" && <Login setPage={setPage} setAttendee={setAttendee} />}


      </div>
    </div>
  );
}

export default App;
