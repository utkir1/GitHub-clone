import React, {useContext} from 'react';
import "./Overview.css";
import { context } from '../../Context/context';
import {NavLink} from 'react-router-dom';


const Overview = () => {

  const {values} = useContext(context);

  const {repos} = values;

  return (
    <div className="over">
      <div className="wrapper-pinned ">
        <div className="over__title d-flex justify-content-between align-items-center mb-2">
          <h2 className="h6 text-muted m-0">Popular repositories</h2>
          <p className="text-muted over__desc m-0">Customize your pins</p>
        </div>

        <ol className="d-flex flex-wrap justify-content-between  list-unstyled over__list">

          {
            repos.slice(0, 6).map((item)=>{
         return <li className="mb-3 px-1 col-12 col-md-6 col-lg-6 d-flex flex-column" key={item.id}>
                <div className="card p-3">

                  <div className="d-flex justify-content-between">
                    <a href={item.html_url} target={"_blank"} className="over__item-link">
                      {item.name}
                    </a>
                    <span className="over__item-span text-muted border border-2 rounded-5 fw-semibold px-1 ">
                      {item.visibility}
                    </span>
                  </div>
                  <p className="text-muted over__item-desc mt-2 mb-3">{item.desciption}</p>
                    <div className="d-flex align-items-center">
                        <span className="over__repo-dot rounded-circle me-1"></span>
                        <span className="over__repo-lang me-3">{item.language}</span>
                        <NavLink to="/stars" className="over__repo-star link-dark text-decoration-none"><i class="bi bi-star  me-1"></i> {item.stargazers_count}</NavLink>
                    </div>
                </div>
              </li>
            })
          }


        </ol>
      </div>
    </div>
  );
};

export default Overview;
