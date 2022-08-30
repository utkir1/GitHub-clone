import React from 'react';
import errorImg from "../../assets/images/errorimg.jpg";

const Error = () => {
  return (
    <div>
        <img src={errorImg} alt="img" className='w-100' height={550} />
    </div>
  );
};

export default Error;