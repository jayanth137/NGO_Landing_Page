import React from 'react';
import Image from 'next/image';
import Hero from '../images/hero.svg';
import Link from 'next/link';

const HeroPage = () => {
  return (
    <main>
      <div className="flex flex-col md:flex-row  md:pl-28  p-8  md:pt-28 border--double border-b-4 border-dotted  border-yellow">
        <div>
          {' '}
          <h1 className=" text-3xl  md:text-5xl lg:text-7xl text-purple font-bold  max-w-screen-5xl    ">
            SPREADING <span>Smiles</span> ON EVERY FACE{' '}
          </h1>
          <h4 className="text-xl md:text-3xl lg:text-4xl my-4">
            We never miss a smile
          </h4>
          <Link
            href="/donation"
            className="btn bg-yellow text-white px-20 py-4"
          >
            Donate
          </Link>
        </div>
        <div className="relative bottom-0 left-100 ">
          <Image
            src={Hero}
            alt="yellow background"
            height={2200}
            width={1500}
          />
        </div>
      </div>
    </main>
  );
};

export default HeroPage;
