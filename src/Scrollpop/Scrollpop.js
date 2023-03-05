import React from 'react';
import styles from "./Scrollpop.module.css";
import axiosInstance from '../axiosInstance';

const Scrollpop = () => {
   const sos = ()=>{
    alert("hello")
    const errorCallback = (error) => {
      console.log(error);
    };

   const successCallback = (position) => {
    axiosInstance.post("/sos/",{data:{
      name: JSON.parse(sessionStorage.getItem('user_data')).name||"Alankrit",
      location:position
    }}).then(res=>console.log(res))
    .catch(err=>console.log(err))
  };
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
   }
  return (
      <div
        className={(styles.scrollpop)} onDoubleClick={sos}>
        <div style={{userSelect:'none'}} className='fw-bold p-4 text-white rounded-circle'>
          SOS
        </div>
      </div>
  )
}

export default Scrollpop