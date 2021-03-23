import React from 'react';
import './Footer.sass';

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-lg-start">
      <div className="text-light text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
        © 2020 Copyright:
        <a className="text-light" href="https://mdbootstrap.com/">utopia.com</a>
      </div>
    </footer>
  );
}

export default Footer;
