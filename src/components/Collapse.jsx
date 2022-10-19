import React, { useState } from "react";

const Collapse = (props) => {
  // Setting collapse not open
  const [open, setOpen] = useState(false);

  // Setting the opposite state of the collapse (toggle)
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="collapse_container">
      {/* On click, toggle collapse */}
      <div className="button_container" onClick={toggle}>
        <div className="collapse_button">
          {" "}
          <p>{props.label}</p>{" "}
        </div>
        {/* if the collapse is open, display this */}
        {open ? (
          <i className="fa-solid fa-chevron-up"></i>
        ) : (
          // Otherwise, display this
          <i className="fa-solid fa-chevron-down"></i>
        )}
      </div>
      {/* if the collapse is open, display this */}
      {open && <div className="collapse_content"> {props.content} </div>}
    </div>
  );
};

export default Collapse;
