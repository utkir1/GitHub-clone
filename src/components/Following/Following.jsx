import React, {useContext} from 'react';
import {NavLink} from "react-router-dom"
import { context } from '../../Context/context'
import "./Following.css"

const Following = () => {
  const {values} = useContext(context)

  const following = values.following
  return (
    <>

        <ul className="followers-list list-unstyled p-0 m-0">
          {following.map((item)=>{
            return <li className="border-bottom py-4 d-flex justify-content-between align-items-start" key={item.id}>
              <div className="item-left d-flex align-items-center gap-3">
                <img className="rounded-circle" src={item.avatar_url} width="50" height="50"></img>
                <div className="item-info">
                  <NavLink className="item-link text-decoration-none text-dark" onClick={(e)=>{values.setUser(item.login)}} to="/">{item.login}</NavLink>
                </div>
              </div>
              <button className="follow-btn btn btn-outline-light bg-light text-dark border rounded-3">Unfollow</button>
            </li>
          })}

        </ul>

    </>
  );
};
export default Following;