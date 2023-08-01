'use client'
import jwtDecode from 'jwt-decode'

function isTokenExpired(token) {
  const decodedToken = jwtDecode(token)
  const currentTime = Date.now() / 1000
  return decodedToken.exp < currentTime
}


export const setToken = async(token) => {
    localStorage.setItem("token", token);
}

export const getToken = () => {
    const validToken = localStorage.getItem("token");
    if(validToken === null){
        return null;
    }
    if(isTokenExpired(validToken)){
        localStorage.removeItem("token");
        return null;
    } 
    
    return validToken;

}

export const logoutSession = async() => {
    localStorage.removeItem("token");
}
