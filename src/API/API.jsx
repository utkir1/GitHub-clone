import axios from "axios"
export const Api = {

  getUser: (user)=>{
    return axios.get(`https://api.github.com/users/${user}`)
  },

  getUsers: (str)=>{
    return axios.get(`https://api.github.com/search/users?q=${str}`)
  },

  getRepo: (user)=>{
    return axios.get(`https://api.github.com/users/${user}/repos`)
  },

  getFollowers: (user)=>{
    return axios.get(`https://api.github.com/users/${user}/followers`)
  },
  getFollowing: (user)=>{
    return axios.get(`https://api.github.com/users/${user}/following`)
  },
}