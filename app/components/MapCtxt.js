import Image from 'next/image';
import React from 'react';
import Haryana from '../images/Haryana.svg';
import PurpleLogo from '../images/logo-purple.svg';

const MapCtxt = () => {
  return (
    <main className="flex flex-col md:flex-row p-20	 md:mx-40  gap-x-20">
      <div>
        <Image src={Haryana} alt="Haryana" width={300} height={300} />
      </div>
      <div className=" m-auto   ">
        <h3 className="text-lg md:text-2xl my-2 text-center	 ">
          “Never miss a chance to make a difference”
        </h3>
        <h1 className=" text-2xl font-bold md:text-4xl text-center	 md:text-left">
          Help us Create Smiles in every parts of Haryana{' '}
        </h1>
        <div className="flex justify-center items-center md:justify-start  ">
          <button className="btn m-4 md:my-12 bg-yellow sm:btn-sm md:btn-md lg:btn-lg lg:w-40">
            Volunteer
          </button>{' '}
        </div>
        <Image src={PurpleLogo} alt="Haryana" width={400} height={400} />
      </div>
    </main>
  );
};

export default MapCtxt;
