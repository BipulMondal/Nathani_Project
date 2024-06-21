import React from "react";

const Modal = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload()
  }
  
  return (
    <div className="main_modal">
      <div className="inner">
        <div>
          <i class="fa-solid fa-user"></i>{" "}
          <span style={{ cursor: "pointer" }}>User</span>
        </div>
        <div>
          <i class="fa-solid fa-gear"></i>{" "}
          <span style={{ cursor: "pointer" }}>Settings</span>
        </div>
        <hr />
        <div>
          <i class="fa-solid fa-right-from-bracket"></i>{" "}
          <span style={{ cursor: "pointer" }} onClick={() => handleLogout()}>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
