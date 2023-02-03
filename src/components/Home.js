import React, { useContext, useState, useEffect } from "react";
import Alert from "./Alert";
import NoteContext from "../context/notes/NoteContext";
import Notes from "./Notes";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/login");
      console.log("not found");
    }
  }, []);

  let { userNotes, fetchNote } = useContext(NoteContext);
  const [alertMSG, setAlertMSG] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  let setAlert = (msg) => {
    setShowAlert(true);
    setAlertMSG(msg);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  useEffect(() => {
    fetchNote();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="fixed top-[4.7rem] w-full">
        {showAlert && <Alert message={alertMSG} />}
      </div>
      <AddNote setAlert={setAlert} />
      <Notes notes={userNotes} setAlert={setAlert} />
    </>
  );
}

export default Home;
