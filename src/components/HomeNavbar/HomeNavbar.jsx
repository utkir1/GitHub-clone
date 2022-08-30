import React,{useContext} from "react";
import "./HomeNavbar.css";
import { NavLink } from "react-router-dom";
import { context } from "../../Context/context";

const HomeNavbar = () => {
  const {values} = useContext(context);

  return (
    <div className="w-100 border-bottom border-1 mt-4 d-none d-md-block position-sticky top-0 bg-white homenavbar">
      <div className="container-xl  px-md-4 px-lg-5 homenavbar__container">
        <div className="homenavbar__layout row">
          <div className="d-none d-md-block  col-md-4 col-lg-3 px-3 "></div>
          <div className="col-12 col-md-8 col-lg-9 navbar__layout-main ">
            <nav className="home__nav">
              <ul className="list-unstyled d-flex m-0">
                <li className="nav-item navbar-item me-3">
                  <NavLink  active
                    className={ ({isActive})=>isActive ? "navbar__active fw-semibold link-dark text-decoration-none navbar__link" : "link-dark text-decoration-none navbar__link "}
                    to={"/"}
                  >
                    <i className="bi bi-book me-2 fs-6"></i>Overview
                  </NavLink>
                </li>
                <li className="nav-item navbar-item me-3">
                  <NavLink
                    className={ ({isActive})=>isActive ? "navbar__active link-dark fw-semibold text-decoration-none navbar__link" : "link-dark text-decoration-none navbar__link "}
                    to={"/repositories"}
                  >
                    <i class="bi bi-journal-bookmark-fill fs-6 me-2"></i>Repositories
                    <span className="rounded-2 bg-black bg-opacity-10 ms-2 px-1 fw-semibold">
                      {values.userInfo.public_repos}
                    </span>
                  </NavLink>
                </li>
                <li className="nav-item navbar-item me-3">
                  <NavLink
                    className={ ({isActive})=>isActive ? "navbar__active fw-semibold link-dark text-decoration-none navbar__link" : "link-dark text-decoration-none navbar__link "}
                    to={"/projects"}
                  >
                    <i className="bi bi-file-ruled fs-6 me-2"></i>Projects
                  </NavLink>
                </li>
                <li className="nav-item navbar-item me-3">
                  <NavLink
                    className={ ({isActive})=>isActive ? "navbar__active fw-semibold link-dark text-decoration-none navbar__link" : "link-dark text-decoration-none navbar__link "}
                    to={"/packages"}
                  >
                    <i className="bi bi-box fs-6 me-2"></i>Packages
                  </NavLink>
                </li>

                <li className="nav-item navbar-item ">
                  <NavLink
                    className={ ({isActive})=>isActive ? "navbar__active fw-semibold link-dark text-decoration-none navbar__link" : "link-dark text-decoration-none navbar__link "}
                    to={"/stars"}
                  >
                    <i class="bi bi-star fs-6 me-2"></i>Stars
                    <span className="rounded-2 bg-black bg-opacity-10 ms-2 px-1 fw-semibold">
                        10
                    </span>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
