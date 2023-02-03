import React, { useState, useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

const AddNote = ({ setAlert }) => {
  // addNote function for adding note on cloud
  const { addNote } = useContext(NoteContext);

  //given 3 state for collecting data from from and collected data parse in addNote function
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");

  //set value in title input tag
  let changeTitle = (e) => {
    setTitle(e.target.value);
  };

  //set value in description textarea tag
  let changeDescription = (e) => {
    setDescription(e.target.value);
  };

  //set value in tag input
  let changeTag = (e) => {
    setTag(e.target.value);
  };

  //onsubmit handler
  let handleSubmit = (e) => {
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

    // submit data by calling addNote method
    addNote(title, description, tag);

    // after submit data reset all states
    setTitle("");
    setDescription("");
    setTag("");

    setAlert("Success! New Note Added.");
  };
  return (
    <>
      <div>
        <form className="mt-28 mx-[10%] md:mx-[20%]" onSubmit={handleSubmit}>
          <h1 className="m-4 text-white text-2xl md:text-3xl font-semibold text-center">
            Add New Note
          </h1>
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter Note Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Morning Note"
              value={title}
              onChange={changeTitle}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter Note Description
            </label>
            <textarea
              placeholder="wake up at early morning"
              id="description"
              name="description"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              value={description}
              onChange={changeDescription}
              required
            ></textarea>
          </div>
          <div className="mb-6">
            <label
              htmlFor="tag"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter Note Tag
            </label>
            <input
              type="text"
              id="tag"
              name="tag"
              placeholder="genral office school college"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              value={tag}
              onChange={changeTag}
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Save Note
          </button>
        </form>
      </div>
    </>
  );
};

export default AddNote;
