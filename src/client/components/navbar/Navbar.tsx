import * as React from 'react';

export const Navbar: React.FC = () => {
  return (
		<nav className="blue-grey">
      <div className="nav-wrapper blue-grey container">
        <a href="#" className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="#">Login</a></li>
        </ul>
      </div>
    </nav>
  );
};
