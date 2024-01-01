import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Donation from '../components/Donation';

const page = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div className="flex align-center justify-between mx-40 my-8">
          <h1 className="text-purple text-5xl font-extrabold border-b-4 border-yellow">
            {' '}
            Donation Page
          </h1>
          <button className="btn text-white bg-purple sm:btn-sm md:btn-md lg:btn-lg lg:w-40">
            Back
          </button>
        </div>

        <div>
          <Donation />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default page;
