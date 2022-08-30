import React,{useState, useEffect, useCallback} from 'react';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import { Api } from './API/API';
import { context } from './Context/context';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';
import Overview from './components/Overview/Overview';
import Repositories from './components/Repositories/Repositories';
import Projects from './components/Projects/Projects';
import Packages from './components/Packages/Packages';
import Stars from './components/Stars/Stars';
import Followers from './components/Followers/Followers';
import Following from './components/Following/Following';



const App = () => {

  const { getUser, getRepo, getFollowers, getUsers, getFollowing } = Api;

  const [user, setUser] = useState("utkir1");

  const [userInfo, setUserInfo] = useState([]);
  const [repos, setRepos] = useState([]);
  const [overRepos, setoverRepos] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [foundUsers, setFoundUsers] = useState([]);

  const [searchRepo, setSearchRepo] = useState("");
  const [searchUser, setSearchUser] = useState("");

  useEffect(()=>{
    getUser(user).then(res => setUserInfo(res.data))
    getRepo(user).then(res => {return (setRepos(res.data), setoverRepos(res.data))})
    getFollowers(user).then(res => setFollowers(res.data))
    getFollowing(user).then(res => setFollowing(res.data))
  },[user])


  const getInfo = useCallback(()=>{
    searchUser ? getUsers(searchUser).then(res => setFoundUsers(res.data.items)) : setFoundUsers([])
  }, [searchUser])

  useEffect(()=>{
    const regex = new RegExp(searchRepo, "gi");
    searchRepo ? setRepos(staticRepos.filter((item)=>{
      return item.name.match(regex)
    }))
    :
    setRepos(overRepos)
  },[searchRepo])



  const values = {
    userInfo,
    repos,
    followers,
    following,
    foundUsers,
    searchRepo,
    searchUser,
    setSearchUser,
    setSearchRepo,
    setFoundUsers,
    setUser,
    getInfo
  };


  return (
    <>
      <context.Provider value={{values}}>
      <BrowserRouter>

      <Header/>
      <main>
        <Routes>

          <Route path='/' element={<Home/>}>
            <Route index path='/'element={<Overview/>}/>
            <Route path='/repositories'element={<Repositories/>}/>
            <Route path='/projects'element={<Projects/>}/>
            <Route path='/packages'element={<Packages/>}/>
            <Route path='/stars'element={<Stars/>}/>
            <Route path='/followers'element={<Followers/>}/>
            <Route path='/following'element={<Following/>}/>
          </Route>

          <Route path='/*' element={<Error/>}/>
        </Routes>
      </main>
      <Footer/>

      </BrowserRouter>
      </context.Provider>
    </>
  );
};
export default App;