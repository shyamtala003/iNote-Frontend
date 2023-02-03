import React, { useRef, useState, useContext } from "react";
import NoteItem from "./NoteItem";
import NoteContext from "../context/notes/NoteContext";
// import { redirect } from "react-router-dom";

const Notes = (props) => {
  let { updateNote } = useContext(NoteContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [id, setId] = useState("");

  let modalOpener = useRef("null");
  let modalCloser = useRef("null");

  const updateNotes = (note) => {
    modalOpener.current.click();
    setTitle(note.title);
    setDescription(note.description);
    setTag(note.tag);
    setId(note._id);
  };

  let setInputTitle = (e) => {
    setTitle(e.target.value);
  };

  let setInputDescription = (e) => {
    setDescription(e.target.value);
  };

  let setInputTag = (e) => {
    setTag(e.target.value);
  };

  let updateSubmitHandler = (e) => {
    e.preventDefault();

    if (title.length < 5) {
      return alert("Title length must be atleast 5 charecter needed");
    }
    if (description.length < 8) {
      return alert("Description length must be atleast 8 charecter needed");
    }
    if (tag.length < 3) {
      return alert("tag length must be atleast 3 charecter needed");
    }

    // by calling theme function we update data on cloud
    updateNote(id, title, description, tag);

    modalCloser.current.click();
    props.setAlert("Success! Your old Note has been Updated");
  };

  return (
    <>
      <h1 className="mt-16 text-white text-2xl md:text-3xl font-semibold text-center">
        Your All Notes
      </h1>
      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-[0%] left-[0%] z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
      >
        <div className="relative w-full h-full max-w-md md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              ref={modalCloser}
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-hide="authentication-modal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Update Your Note
              </h3>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    value={title}
                    onChange={setInputTitle}
                  />
                </div>
                <div>
                  <label
                    htmlFor="desciption"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Desciption
                  </label>
                  <textarea
                    name="desciption"
                    id="desciption"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    value={description}
                    onChange={setInputDescription}
                  />
                </div>
                <div>
                  <label
                    htmlFor="tags"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Tags
                  </label>
                  <input
                    type="text"
                    name="tags"
                    id="tags"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    value={tag}
                    onChange={setInputTag}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={updateSubmitHandler}
                >
                  Save Updates
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <button
        ref={modalOpener}
        data-modal-target="authentication-modal"
        data-modal-toggle="authentication-modal"
        className="hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Toggle modal
      </button>
      <div className="mt-6 mx-[5%] flex flex-wrap  justify-center gap-5">
        {props.notes.length === 0 ? (
          <h1 className="text-xl text-green-700 font-semibold">
            <ion-icon name="alert"></ion-icon> Please add a New Note
          </h1>
        ) : (
          props.notes.map((note) => {
            return (
              <NoteItem
                note={note}
                updateNotes={updateNotes}
                setAlert={props.setAlert}
                key={note._id}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default Notes;
