import React, { useState, useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

const AddNote = ({ setAlert }) => {
  // addNote function for adding note on cloud
  const { addNote, loading, setLoading } = useContext(NoteContext);

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
    setLoading(true);
    if (title.length < 5) {
      setLoading(false);
      return alert("Title length must be atleast 5 charecter needed");
    }
    if (description.length < 8) {
      setLoading(false);
      return alert("Description length must be atleast 8 charecter needed");
    }
    if (tag.length < 3) {
      setLoading(false);
      return alert("tag length must be atleast 3 charecter needed");
    }

    // submit data by calling addNote method

    addNote(title, description, tag);

    // after submit data reset all states
    setTitle("");
    setDescription("");
    setTag("");
    setAlert("Success! New Note Added.");
    setLoading(false);
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
          {loading ? (
            <button
              disabled
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
            >
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 mr-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              Loading...
            </button>
          ) : (
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Save Note
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default AddNote;
