import React from 'react';
import './Footer.css'

const Footer = () => {
  return (

  <footer className="d-flex flex-wrap justify-content-start  align-items-center  border-top footer container-xl">

  <div className='d-flex justify-content-between align-items-center footer__left'>
    <a href="#" className="link-dark footer__icon-link">
      <i className="bi bi-github footer__icon"></i>
      </a>
      <p className=" mb-0 text-muted footer__desc">© {new Date().getFullYear()} GitHub, Inc</p>
  </div>

    <ul className="nav col-md-4 justify-content-between flex-wrap w-75">
      <li className="nav-item"><a href="#" className="nav-link p-0 footer__links">Terms</a></li>
      <li className="nav-item"><a href="#" className="nav-link p-0 footer__links">Privacy</a></li>
      <li className="nav-item"><a href="#" className="nav-link p-0 footer__links">Security</a></li>
      <li className="nav-item"><a href="#" className="nav-link p-0 footer__links">Status</a></li>
      <li className="nav-item"><a href="#" className="nav-link p-0 footer__links">Docs</a></li>
      <li className="nav-item"><a href="#" className="nav-link p-0 footer__links">Contact Github</a></li>
      <li className="nav-item"><a href="#" className="nav-link p-0 footer__links">Pricing</a></li>
      <li className="nav-item"><a href="#" className="nav-link p-0 footer__links">API</a></li>
      <li className="nav-item"><a href="#" className="nav-link p-0 footer__links">Training</a></li>
      <li className="nav-item"><a href="#" className="nav-link p-0 footer__links">Blog</a></li>
      <li className="nav-item"><a href="#" className="nav-link p-0 footer__links">About</a></li>
    </ul>

  </footer>

  );
};

export default Footer;