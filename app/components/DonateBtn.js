import Link from 'next/link';
import React from 'react';

const DonateBtn = () => {
  return (
    <div class="fixed top-1/2 -left-10 transform -translate-y-1/2 rotate-90 z-10">
      <Link
        href="donation"
        class="bg-purple  text-white font-bold py-2 px-4 rounded-xl"
      >
        Donate <span className="text-white">&#9829;</span>
      </Link>
    </div>
  );
};

export default DonateBtn;
