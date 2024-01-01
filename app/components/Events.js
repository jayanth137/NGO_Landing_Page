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
          className="md:w-1/2"
        >
          <div className="flex">
            <div>
              <div>
                <Image src={image1} alt="donation" />
                <h1>Blood Donation Camp</h1>
              </div>
              <div>
                <Image src={image2} alt="donation" className="h-300 w-150" />
                <h1>Lets Invest Plants</h1>
              </div>
            </div>
            <div>
              <div>
                <Image src={image1} alt="donation" height={300} width={150} />
                <h1>Blood Donation Camp</h1>
              </div>
              <div>
                <Image src={image1} alt="donation" height={300} width={150} />
                <h1>Blood Donation Camp</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <h5 className="text-2xl"> Current Events</h5>
          <h1 className="text-5xl">Here what we did recently</h1>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
            tristique enim. Phasellus convallis at risus eget finibus. Mauris
            non arcu eu sem ornare aliquet. Mauris et enim pulvinar, pulvinar
            magna quis, molestie enim. Vestibulum lobortis sem sed dolor
            elementum tristique. Fusce efficitur, leo ac posuere vehicula,
            turpis elit placerat tortor, vel lobortis{' '}
          </p>
          <button className="btn my-2  md:mx-0 md:my-12 bg-yellow sm:btn-sm md:btn-md lg:btn-lg lg:w-40">
            Donate
          </button>{' '}
        </div>
      </main>

      <main
        style={{
          backgroundImage: `url("${group.src}")`,
          height: '80vh',
          backgroundRepeat: 'repeat',
          backgroundSize: 'cover', // Adjust this value to maintain the aspect ratio
          position: 'relative',
          bottom: '200px',
        }}
        className="relative"
      >
        <div className=" flex flex-col md:flex-row absolute inset-x-0 top-40 md:top-80 mx-40 gap-y-8  ">
          <div className=" md:w-1/2  ">
            <h1 className="text-4xl mb-8 text-purple font-semibold ">
              WE ARE BRINGING SMILE TO PEOPLE’S FACES SINCE 2017
            </h1>
            <button className="btn    bg-purple text-white sm:btn-sm md:btn-md lg:btn-lg ">
              BE PART OF OUR TEAM
            </button>{' '}
          </div>
          <div className="flex gap-x-20 md:w-1/2">
            <div>
              <h1 className="text-purple mb-2 text-5xl font-extrabold">250+</h1>
              <h2 className="text-purple text-5xl font-semibold">Events</h2>
            </div>
            <div>
              <h1 className="text-purple mb-2 text-5xl font-extrabold">
                1000+
              </h1>
              <h2 className="text-purple text-5xl font-semibold">Smiles</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Events;
