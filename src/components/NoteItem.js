import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
  let note = props.note;
  let { deleteNote } = useContext(NoteContext);
  return (
    <div className="relative w-[20rem] max-w-xs mbf-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mt-4 mb-2 capitalize text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {note.title}
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {note.description}
      </p>

      <div
        data-modal-toggle="authentication-modal"
        className="absolute top-[.5rem] right-[.5rem] flex gap-2 items-center justify-center"
      >
        <button
          className=" flex items-center justify-center bg-green-600  hover:bg-green-800  rounded-full p-2 text-sm text-center text-white"
          onClick={() => {
            props.updateNotes(note);
          }}
        >
          <ion-icon name="create"></ion-icon>
        </button>

        <button
          className="flex items-center justify-center bg-red-600 hover:bg-red-800 rounded-full p-2 text-sm text-center text-white"
          onClick={() => {
            deleteNote(note._id);
            props.setAlert(`Success! Note deleted with id:${note._id}`);
          }}
        >
          <ion-icon name="trash"></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
