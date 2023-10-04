import React from "react";
import PropTypes from "prop-types";

export default function SuccessMessage({ isSubmitted, closeMessage }) {
  return (
    <div
      className={`popup bg-green-200 p-4 rounded-lg shadow-lg absolute bottom-0 right-0 flex justify-center align-center gap-[20px] ${
        isSubmitted ? "popup-enter" : "popup-exit"
      }`}
    >
      <p className="text-green-700 font-semibold block text-[18px]">
        Your data is successfully sent!
      </p>
      <button
        className={` mt-0 bg-green-500 text-white px-3 py-1 rounded-md`}
        onClick={closeMessage}
        type="button"
      >
        X
      </button>
    </div>
  );
}

SuccessMessage.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
  closeMessage: PropTypes.func.isRequired,
};
