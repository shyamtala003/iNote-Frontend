import React from "react";

const Alert = ({ message }) => {
  return (
    <>
      <div
        id="alert-border-3"
        className="w-full flex p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800"
        role="alert"
      >
        <ion-icon name="checkmark-done-outline"></ion-icon>
        <div className="ml-3 text-sm font-medium">{message}</div>
      </div>
    </>
  );
};

export default Alert;
