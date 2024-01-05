import React from 'react';
import cardDesign from '../images/cardDesign.svg';
import Image from 'next/image';
import one from '../images/card1.svg';
import two from '../images/2card.svg';
import three from '../images/3card.svg';

const Card = () => {
  return (
    <main
      style={{
        backgroundImage: `url("${cardDesign.src}")`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
      }}
      className="w-full h-dvh  "
    >
      <div className="flex flex-col gap-y-3 md:gap-y-6 py-4 md:py-20  ">
        <h5 className="text-center test-lg  md:text-2xl font-semibold  ">
          A Help To Those Who Need It
        </h5>
        <h1 className="text-center text-3xl md:text-6xl font-bold text-purple">
          What We're Doing
        </h1>
        <p className="text-center text-xs md:text-base  mx-32">
          Smile Foundation Society in Panipat ignites positive change through
          cultural events and impactful initiatives, fostering community
          well-being, and joy through various celebrations.
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8  md:gap-x-20 ">
        <div className="card card-compact w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-base-100 p-4 shadow-2xl ring-purple md:hover:ring-2">
          <figure>
            <Image src={one} alt="Shoes" width={60} height={60} />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card card-compact w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-base-100 p-4 shadow-2xl ring-purple md:hover:ring-2">
          <figure>
            <Image src={two} alt="Shoes" width={60} height={60} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card card-compact w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-base-100 p-4 shadow-2xl ring-purple md:hover:ring-2">
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
