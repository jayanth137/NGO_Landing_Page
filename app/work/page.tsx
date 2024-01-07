import React from 'react';
import Navbar from '../components/Navbar';
import HeroPage from '../components/HeroPage';
import MapCtxt from '../components/MapCtxt';
import Card from '../components/Card';
import VolunteerForm from '../components/VolunteerForm';
import WorkCard from '../components/WorkCard';
import Footer from '../components/Footer';
import { dummyData } from '../data';
import Link from 'next/link';

const page = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div className="flex align-center justify-between   w-4/5 m-auto my-8">
          <h1 className="text-purple text-4xl font-extrabold border-b-4 border-yellow">
            {' '}
            EXPlORE YOUR WORK
          </h1>
          <Link
            href="/"
            className="btn text-white bg-purple sm:btn-sm md:btn-md lg:btn-lg lg:w-40"
          >
            Back
          </Link>
        </div>
        <div className="bg-purple h-180 w-4/5 m-auto my-8 py-16 h-7/12 overflow-y-auto rounded-3xl">
          {dummyData.map((data, index) => (
            <div key={index} className="w-10/12 mx-auto">
              <WorkCard data={data} />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default page;
