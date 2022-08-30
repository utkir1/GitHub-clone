import React from "react";
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";
import HomeNavbar from "../HomeNavbar/HomeNavbar";
import {Outlet} from 'react-router-dom';

const Home = () => {
  return (
    <>
      <HomeNavbar/>

      <div className="home__container container-xl px-md-4 ">
        <div className="row home__row ">

        <div className='col-12 col-md-4 col-lg-3 ps-3 p-0  layout__sidebar'>
          <Sidebar />
        </div>

        <div className="col-12 col-md-8 col-lg-9 mt-3 layout__main">

            <Outlet/>
        </div>

        </div>

      </div>
    </>
  );
};

export default Home;
