import React from 'react';
import '../styles/Layout.scss';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout__header"></div>
      <div className="layout__content">
        <div className="layout__sidebar"></div>
        <div className="layout__main">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
