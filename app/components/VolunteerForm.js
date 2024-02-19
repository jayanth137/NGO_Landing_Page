import Image from 'next/image';
import React from 'react';
import volunteer from '../images/Volunteer.svg';
import Link from 'next/link';

const VolunteerForm = () => {
  return (
    <main className="flex m-8 flex-col md:flex-row justify-center items-center">
      <div className="w-1/2 ">
        <div>
          <Image src={volunteer} alt="volunteer" />
        </div>
      </div>
      <div className="w-1/2 grid  gap-2 content-center">
        <h1 className="text-yellow text-6xl font-bold my-4">Volunteer Form</h1>
        <p className="font-medium  ">
          Never miss a chance to make a difference
        </p>
        <Link
          href="https://forms.gle/yhqhbX56F9nhNbuR8"
          target="_blank"
          className="btn bg-purple text-white w-40 py-2 rounded-lg my-4"
        >
          Join Us
        </Link>
      </div>
    </main>
  );
};

export default VolunteerForm;
