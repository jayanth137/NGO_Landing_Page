import React from 'react';
import cardDesign from '../images/cardDesign.svg';
import Image from 'next/image';
import one from '../images/card1.svg';
import two from '../images/2card.svg';
import three from '../images/3card.svg';

const Card = () => {
  return (
    <main className="w-full bg-yellow max-h-content	md:p-20 p-8 ">
      <div className="flex flex-col  md:gap-y-6   ">
        <h5 className="text-center test-lg  md:text-2xl font-semibold  ">
          A Help To Those Who Need It
        </h5>
        <h1 className="text-center text-3xl md:text-6xl font-bold text-purple">
          What We're Doing
        </h1>
        <p className="text-center  text-xs md:text-base  md:mx-24  mx-4 my-2">
          Smile Foundation Society in Panipat ignites positive change through
          cultural events and impactful initiatives, fostering community
          well-being, and joy through various celebrations.
        </p>
      </div>
      <div className="grid  md:grid-flow-col  gap-y-4 gap-x-20 mx-20 md:my-20 min-w-fit">
        <div className="card card-compact w-full  bg-base-100 p-4 shadow-2xl ring-purple md:hover:ring-2">
          <figure>
            <Image src={one} alt="Shoes" width={60} height={60} />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card card-compact w-full  bg-base-100 p-4 shadow-2xl ring-purple md:hover:ring-2">
          <figure>
            <Image src={two} alt="Shoes" width={60} height={60} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card card-compact w-full  bg-base-100 p-4 shadow-2xl ring-purple md:hover:ring-2">
          <figure>
            <Image src={three} alt="Shoes" width={60} height={60} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Card;
