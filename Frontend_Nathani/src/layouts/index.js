import React from 'react'
import { Outlet } from 'react-router-dom';

// Components
import Header from './Header/Header';

function Layout(props) {
  return (
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
  )
}

export default Layout;