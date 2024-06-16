import React, { useEffect, useState } from 'react'
import Header from '../Header/Header';
import {Outlet} from "react-router-dom"

const Main = () => {
    const [loggedIn, setloggedIn] = useState(false);

    // Component did mount
    useEffect(() => {
      if (
        localStorage.getItem("Authorization") &&
        localStorage.getItem("userType")
      ) {
        setloggedIn(true);
      } else {
          setloggedIn(false);
      }
    }, []);
  
    return (
      <>
        {loggedIn === true ? (
          <div className="app-container app-theme-white fixed-header fixed-sidebar fixed-footer">
            <Header />
            <div className="app-main">
              <div className="app-main__outer">
                <div className="app-main__inner">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="app-main__outer">
            <div className="app-main__inner">
              <Outlet />
            </div>
          </div>
        )}
      </>
    );
}

export default Main
