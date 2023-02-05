import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  let host = "https://jittery-fish-slippers.cyclic.app";
  const token = localStorage.getItem("token");
  let notes = [];
  const [userNotes, setUserNotes] = useState(notes);
  const [loading, setLoading] = useState(false);

  // function:0 fetch all notes from database
  let fetchNote = async () => {
    let response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    });
    let jsonData = await response.json();
    setUserNotes(jsonData);
  };

  //fuction:1 adding notes into data base
  let addNote = async (title, description, tag) => {
    setLoading(true);
    await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      body: JSON.stringify({
        title: title,
        description: description,
        tag: tag,
      }),
    });
    fetchNote();
  };

  // function:2 delete notes from databse
  let deleteNote = async (id) => {
    await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "auth-token": token,
      },
    });
    fetchNote();
  };

  // function:3 update particular note
  let updateNote = async (id, title, description, tag) => {
    await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      body: JSON.stringify({
        title: title,
        description: description,
        tag: tag,
      }),
    });
    fetchNote();
  };

  return (
    <NoteContext.Provider
      value={{
        userNotes: userNotes,
        setUserNotes: setUserNotes,
        addNote: addNote,
        deleteNote: deleteNote,
        updateNote: updateNote,
        fetchNote: fetchNote,
        loading: loading,
        setLoading: setLoading,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
