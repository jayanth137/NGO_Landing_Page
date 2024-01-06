import React from 'react';
import pt from '../images/pattern.svg';
import Image from 'next/image';
import image1 from '../work-images/image1.svg';
import image2 from '../work-images/image2.svg';
import group from '../images/group.svg';

const Events = () => {
  return (
    <div>
      <main className="flex flex-col md:flex-row ">
        <div
          style={{
            backgroundImage: `url("${pt.src}")`,
            height: '80vh',
            backgroundRepeat: 'repeat',
            backgroundSize: 'cover',
            position: 'relative',
            bottom: '120px',
          }}
          className="md:w-1/2 max-h-full"
        >
          <div className="flex flex-row md:gap-x-12 gap-x-4 md:p-28 p-16   ">
            <div className="flex flex-col gap-y-8 mt-20">
              <div>
                <Image src={image1} alt="donation" className="imageStyle" />
                <h1 className="bg-purple font-medium p-1 text-white">
                  Blood Donation Camp
                </h1>
              </div>
              <div>
                <Image src={image2} alt="donation" className="imageStyle" />
                <h1 className="bg-purple font-medium p-1 text-white">
                  Lets Invest Plants
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-y-8">
              <div>
                <Image src={image1} alt="donation" className="imageStyle" />
                <h1 className="bg-purple font-medium p-1 text-white">
                  Blood Donation Camp
                </h1>
              </div>
              <div>
                <Image src={image1} alt="donation" className="imageStyle" />
                <h1 className="bg-purple font-medium p-1 text-white">
                  Blood Donation Camp
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-y-2 md:w-1/2 px-8">
          <h5 className="text-2xl text-center"> Current Events</h5>
          <h1 className="text-5xl ">Here what we did recently</h1>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
            tristique enim. Phasellus convallis at risus eget finibus. Mauris
            non arcu eu sem ornare aliquet. Mauris et enim pulvinar, pulvinar
            magna quis, molestie enim. Vestibulum lobortis sem sed dolor
            elementum tristique. Fusce efficitur, leo ac posuere vehicula,
            turpis elit placerat tortor, vel lobortis{' '}
          </p>
          <button className="btn my-2 w-40  md:mx-0 md:my-12 bg-yellow sm:btn-sm md:btn-md lg:btn-lg lg:w-40">
            Donate
          </button>{' '}
        </div>
      </main>

      <main
        style={{
          backgroundImage: `url("${group.src}")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '75vh',
          position: 'relative',
        }}
      >
        ...
        <div className=" flex flex-col md:flex-row absolute inset-x-0 top-40  md:px-40 md:py-24 md:mx-8 m-4 px-20 justify-center items-center   gap-y-8 md:border-dashed border-4 border-purple  ">
          <div className=" md:w-1/2  ">
            <h1 className="lg:text-4xl md:text-2xl sm:text-3xl mb-8 text-xl text-purple font-semibold ">
              WE ARE BRINGING SMILE TO PEOPLE’S FACES SINCE 2017
            </h1>
            <button className="btn    bg-purple text-white sm:btn-sm md:btn-md lg:btn-lg ">
              BE PART OF OUR TEAM
            </button>{' '}
          </div>
          <div className="flex  gap-x-20 md:w-1/2">
            <div>
              <h1 className="text-purple mb-2 md:text-5xl text-2xl font-extrabold">
                250+
              </h1>
              <h2 className="text-purple  md:text-5xl text-2xl font-semibold">
                Events
              </h2>
            </div>
            <div>
              <h1 className="text-purple mb-2  md:text-5xl text-2xl font-extrabold">
                1000+
              </h1>
              <h2 className="text-purple  md:text-5xl text-2xl font-semibold">
                Smiles
              </h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Events;
