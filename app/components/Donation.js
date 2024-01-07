import Image from 'next/image';
import React from 'react';
import Donate from '../images/Donate.svg';

const Donation = () => {
  return (
    <main className="flex md:flex-row flex-col bg-[#D9D9D926] m-20 rounded-3xl p-8">
      <div className="md:w-1/2 w-auto flex flex-col  justify-center items-center ">
        <h1 className="text-4xl  italic text-purple font-extrabold ">
          Thanks for Donating
        </h1>
        <Image src={Donate} alt="donate" />
      </div>
      <div className="bg-purple py-50 p-8  md:w-1/2 w-auto rounded-3xl">
        <div className="text-xl font-bold  text-white">Giving Option:</div>
        <div className='"flex lg:m-8     '>
          <button className="bg-white btn px-8 py-2 rounded-xl">
            {' '}
            One Time
          </button>
          <button className="bg-white btn px-8 py-2 rounded-xl">
            {' '}
            Monthly
          </button>
        </div>
        <div className="text-xl font-bold text-white ">
          I Would Like To Give:{' '}
        </div>
        <div className="grid grid-cols-3 gap-2 md:m-8 m-4 ">
          <button className="bg-white px-3 py-2 rounded-xl"> 100 Rs</button>
          <button className="bg-white px-3 py-2 rounded-xl"> 100 Rs</button>
          <button className="bg-white px-3 py-2 rounded-xl"> 100 Rs</button>

          <button className="bg-white px-3 py-2 rounded-xl"> 100 Rs</button>
          <button className="bg-white px-3 py-2 rounded-xl"> 100 Rs</button>
          <button className="bg-white px-3 py-2 rounded-xl"> 100 Rs</button>
        </div>
        <div className="flex flex-col gap-y-4 justify-center lg:ml-8">
          <input
            type="text"
            placeholder="Enter Amount"
            className="bg-white px-12 py-2 w-4/6  rounded-xl"
          />

          <button className="btn bg-yellow px-20 py-4 w-36  text-white">
            Donate
          </button>
        </div>
      </div>
    </main>
  );
};

export default Donation;
