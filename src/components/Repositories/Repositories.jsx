import React, { useContext } from "react";
import { context } from "../../Context/context";
import "./Repositories.css";

const Repos = () => {
  const { values } = useContext(context);

  const repos = values.repos;

  return (
    <>

        <div class="repos-top w-100 d-flex justify-content-between align-items-center  pb-3 border-bottom">
          <div className="repo-filter w-100 d-flex flex-wrap align-items-center flex-lg-nowrap gap-1">
            <input
              type="text"
              className="search-repo form-control d-block "
              placeholder="Find a repository..."
            ></input>

            <select className="repos-select form-select bg-light">
              <option disabled readOnly selected>
                Type
              </option>
              <option value="all">All</option>
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="sources">Sources</option>
              <option value="forks">Forks</option>
              <option value="archived">Archived</option>
              <option value="mirrors">Mirrors</option>
              <option value="templates">Templates</option>
            </select>

            <select className="form-select-2 repos-select form-select bg-light">
              <option disabled readOnly selected>
                Language
              </option>
              <option value="all">All</option>
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="javascript">Javascript</option>
            </select>

            <select className="repos-select form-select bg-light">
              <option disabled readOnly selected>
                Sort
              </option>
              <option value="time">Last Updated</option>
              <option value="name">Name</option>
              <option value="stars">Stars</option>
            </select>

          </div>
          <button className="create-repo btn btn-success d-flex align-items-center h-100 gap-1">
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="octicon octicon-repo UnderlineNav-octicon hide-sm"
                fill="white"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                ></path>
              </svg>
              New
            </button>
        </div>
        <ul className="repo-list list-unstyled d-flex flex-column gap-2 p-0 m-0 my-3">
          {repos.map((item) => {
            return (
              <li className="repo-item border-bottom w-100 p-4" key={item.id}>
                <div className="item-top w-100 d-flex justify-content-between align-items-center">
                  <div className="item-top-info w-100">
                    <a className="repo-title text-decoration-none fs-5 me-2" href={item.html_url}>
                      {item.name}
                    </a>
                    <p className="repo-type btn border rounded-pill py-0 px-2 m-0">
                      {item.visibility}
                    </p>
                  </div>
                  <div className="input-group d-flex justify-content-end">
                    <button
                      type="button"
                      className="star-btn btn bg-light border text-dark fw-normal"
                    >
                      <i class="bi bi-star"></i> Star
                    </button>

                    <button
                      type="button"
                      className="btn bg-light border dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>

                      <li>
                        <hr className="dropdown-divider"></hr>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Separated link
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item-bottom d-flex align-items-center justify-content-start mt-3 gap-3">
                  <p
                    className={`repo-language m-0 ${
                      item.language === "JavaScript"
                        ? "yellow"
                        : item.language === "HTML"
                        ? "red"
                        : item.language === "CSS"
                        ? "purple"
                        : ""
                    }`}
                  >
                    {item.language}
                  </p>
                  <p className="updated m-0">{`Updated at ${item.updated_at.split("T")[0]}`}</p>
                </div>
              </li>
            );
          })}
        </ul>
    </>
  );
};

export default Repos;
