import React,{useContext} from "react";
import {NavLink} from 'react-router-dom';
import { context } from "../../Context/context";
import "./Sidebar.css";

const Sidebar = () => {

  const {values} = useContext(context);

  const userInfo = values.userInfo;

  return (
    <div className="sidebar__wrapper position-relative ">
      <div className="sidebar__img-wrapper position-absolute">
        <img
          src={userInfo.avatar_url}
          alt="img"
          className="sidebar__img rounded-circle "
        />

      </div>

      <div className="sidebar__datas">
        <div className="sidebar__names py-3">
          <h1 className="sidebar__name">{userInfo.name}</h1>
          <p className="sidebar__username">{userInfo.login}</p>
        </div>
        <p className="sidebar__bio">{userInfo.bio}</p>
        <button className="btn border border-1  w-100 mb-3 sidebar__btn">
          {userInfo.login==="utkir1" ? "Edit profile": "Follow"  }
        </button>
        <div className="d-flex justify-content-start align-items-center mb-3">
          <NavLink
            className="sidebar__foll-link d-flex me-3 justify-content-between align-items-center  text-decoration-none"
            to="/followers"
          >
            <i className="bi bi-people me-1"></i>
            <strong className=" sidebar__followers me-1">{userInfo.followers}</strong>
            <p className="m-0 sidebar__foldesc">followers</p>
          </NavLink>
          <NavLink
            className="sidebar__foll-link d-flex align-items-center  text-decoration-none"
            to="/following"
          >
            <strong className=" sidebar__followers me-1">{userInfo.following}</strong>
            <p className="m-0 sidebar__foldesc">following</p>
          </NavLink>
        </div>
        <span className="sidebar__location w-100 d-block pt-1"><i className="bi bi-geo-alt me-2"></i>{userInfo.location}</span>
        <span className=" w-100 d-block pt-1"><i className="bi bi-twitter me-2"></i><a className="sidebar__twitter" target={"_blank"} href="https://twitter.com/UtkirSoatboyev">{userInfo.twitter_username}</a></span>
        <hr />
      </div>
    </div>
  );
};

export default Sidebar;
