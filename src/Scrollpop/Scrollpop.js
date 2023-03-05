import React from 'react';
import styles from "./Scrollpop.module.css";

const Scrollpop = () => {
  return (
    <div>
      <div
        className={(styles.scrollpop)} onClick={() => { }}>
        <div className='fw-bold p-4 text-white rounded-circle'>
          SOS
        </div>
      </div>
    </div>
  )
}

export default Scrollpop