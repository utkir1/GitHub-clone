import React,{ useContext} from "react";
import headLogo from "../../assets/images/github-logo.png";
import searchIcon from "../../assets/images/slash.svg";
import { context } from "../../Context/context";
import "./Header.css"


const Header = () => {
  const { values } = useContext(context);
  const { setUser, searchUser, foundUsers, setSearchUser, getInfo, setFoundUsers,userInfo } = values;
  return (
    <nav className="navbar navbar-expand-lg header">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon"></span>
        </button>

        <a className="navbar-brand header__link" href="#">
        <img
              className="header__logo"
              src={headLogo}
              alt="logo"
              width={33}
              height={33}
            />
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <div className="search-box position-relative">
              <label className="header__label">
                <input
                  className="header__input"
                  type="text"
                  placeholder="Search or jump to..."
                  autoComplete="true"
                  value={searchUser}
                  onChange={(e)=>{return setSearchUser(e.target.value), !searchUser ? setFoundUsers([]) : ""}}
                  onKeyPress={(e)=>{e.key.toLowerCase().trim() === "enter" ? getInfo() : ""}}
                  />
                <img src={searchIcon} alt="icon" />
              </label>

              <ul className="search-items position-absolute list-unstyled p-0 m-0 rounded-3">
              {searchUser ? foundUsers.map((item)=>{
                return <li className="search-item py-2 px-2  border-bottom" key={item.id} onClick={(e)=>{setUser(item.login), setSearchUser("")}}>
                  {item.login}
                </li>
              }): ""}

            </ul>
            </div>
          <ul className="navbar-nav me-auto header__list mb-lg-0">
            <li className="nav-item header__item">
              <a className=" header__nav-link"  href="#">
                Pull requests
              </a>
            </li>
            <li className="nav-item header__item">
              <a className=" header__nav-link" href="#">
                Issues
              </a>
            </li>
            <li className="nav-item header__item">
              <a className=" header__nav-link " href="#">Marketplace</a>
            </li>
            <li className="nav-item header__item">
              <a className=" header__nav-link " href="#">Explore</a>
            </li>
          </ul>


         <div className="header__wrapper-right">

                    {/* Notifications  */}

            <div>
              <a className="header__notification" href="#">
              <i className="bi bi-bell header__notification-icon"></i>
               </a>
            </div>


                  {/* PLUS DROPDOWN  */}

            <div className="dropdown text-end header__plusDropdown ">
            <a href="#" className="d-block link-light text-decoration-none dropdown-toggle show header__plusDropdown-link" data-bs-toggle="dropdown" aria-expanded="true">
            <i className="bi bi-plus header__plusDropdown-icon"></i>
            </a>

            <ul className="dropdown-menu  text-small p-0 header__dropdown-list " style={{"position": "absolute", "inset": "0px 0px auto auto" ,"margin": "0px" ,"transform": "translate3d(0px, 34.1818px, 0px)"}} data-popper-placement="bottom-start">
              <li><a className="dropdown-item header__dropdown-item" href="#">New repository</a></li>
              <li><a className="dropdown-item header__dropdown-item" href="#">Import repository</a></li>
              <li><a className="dropdown-item header__dropdown-item" href="#">New gist</a></li>
              <li><a className="dropdown-item header__dropdown-item" href="#">New organization</a></li>
              <li><a className="dropdown-item header__dropdown-item" href="#">New project</a></li>
            </ul>

          </div>

                  {/* PROFILE DROPDOWN  */}

            <div className="dropdown text-end">
            <a href="#" className="d-block link-light text-decoration-none dropdown-toggle show header__dropdown-link" data-bs-toggle="dropdown" aria-expanded="true">
              <img src={userInfo.avatar_url} alt="mdo" width="20" height="20" className="rounded-circle"/>
            </a>
            <ul className="dropdown-menu  text-small p-0 header__dropdown-list" style={{"position": "absolute", "inset": "0px 0px auto auto" ,"margin": "0px" ,"transform": "translate3d(0px, 34.1818px, 0px)"}} data-popper-placement="bottom-start">
              <p className="m-0 header__dropdown-text">Signed in as <strong>utkir1</strong></p>
              <li><hr className="dropdown-divider mt-0"/></li>
              <li><button className="btn header__dropdown-btn"><i className="bi bi-emoji-smile me-2 fs-6"></i> Set status</button></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item header__dropdown-item" href="#">Your profile</a></li>
              <li><a className="dropdown-item header__dropdown-item" href="#">Your repositories</a></li>
              <li><a className="dropdown-item header__dropdown-item" href="#">Your codespaces</a></li>
              <li><a className="dropdown-item header__dropdown-item" href="#">Your projects</a></li>
              <li><a className="dropdown-item header__dropdown-item" href="#">Your stars</a></li>
              <li><a className="dropdown-item header__dropdown-item" href="#">Your gists</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item header__dropdown-item" href="#">Upgrade</a></li>
              <li><a className="dropdown-item header__dropdown-item" href="#">Future preview</a></li>
              <li><a className="dropdown-item header__dropdown-item" href="#">Help</a></li>
              <li><a className="dropdown-item header__dropdown-item" href="#">Settings</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item header__dropdown-item" href="#">Sign out</a></li>
            </ul>
          </div>
</div>

        </div>
      </div>
    </nav>
  );
};

export default Header;
