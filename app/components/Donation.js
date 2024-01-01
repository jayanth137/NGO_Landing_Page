import Image from 'next/image';
import React from 'react';
import Donate from '../images/Donate.svg';

const Donation = () => {
  return (
    <main className="flex">
      <div className="w-1/2  ">
        <h1 className="text-4xl  italic text-purple font-extrabold ">
          Thanks for Donating
        </h1>
        <Image src={Donate} alt="donate" />
      </div>
      <div className="bg-purple py-60 px-2 mx-20 w-1/2">
        <div>Giving Option:</div>
        <div className='"grid grid-cols-2 gap-4 '>
          <button className="bg-white m-8"> One Time</button>
          <button className="bg-white"> Monthly</button>
        </div>
        <div>I Would Like To Give</div>
        <div className="grid grid-cols-3 gap-4 ">
          <button className="bg-white"> 100 Rs</button>
          <button className="bg-white"> 100 Rs</button>
          <button className="bg-white"> 100 Rs</button>

          <button className="bg-white"> 100 Rs</button>
          <button className="bg-white"> 100 Rs</button>
          <button className="bg-white"> 100 Rs</button>
        </div>

        <div>
          <button>Donate</button>
        </div>
      </div>
    </main>
  );
};

export default Donation;
