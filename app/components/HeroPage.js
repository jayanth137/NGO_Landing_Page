import React from 'react';
import Image from 'next/image';
import YellowBg from '../images/YellowHeroPage.svg';
import kids from '../images/kids.svg';
import PatternStrip from '../images/pattern-strip.svg';

const HeroPage = () => {
  return (
    <main>
      <div className="flex flex-col md:flex-row  md:pl-28  p-8  md:pt-28">
        <div>
          {' '}
          <h1 className=" text-3xl  md:text-5xl lg:text-7xl text-purple font-bold  max-w-screen-5xl    ">
            SPREADING <span>Smiles</span> ON EVERY FACE{' '}
          </h1>
          <h4 className="text-xl md:text-3xl lg:text-4xl my-4">
            We never miss a smile
          </h4>
          <div className="flex  justify-start ">
            <button className="btn my-2  md:mx-0 md:my-12 bg-yellow sm:btn-sm md:btn-md lg:btn-lg lg:w-40">
              Donate
            </button>{' '}
          </div>
        </div>
        <div className="relative bottom-0 left-100 ">
          <Image
            src={YellowBg}
            alt="yellow background"
            height={2200}
            width={1500}
          />
          <div className="absolute bottom-0 left-100">
            <Image src={kids} alt="kids" width={900} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroPage;
