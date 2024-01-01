import React from 'react';
import Image from 'next/image';

const WorkCard = ({ data }) => {
  const { image, title, date, passage } = data;
  return (
    <main className="flex bg-white w-full   m-4 p-8 gap-x-4 rounded-xl">
      <div className="w-2/5">
        <Image src={image} alt="Shoes" width={1000} height={1000} />
      </div>
      <div className="w-3/5">
        <h3 className="text-3xl">{title}</h3>
        <h6 className="text-1xl">{date}</h6>
        <p className="text-base">{passage}</p>
      </div>
    </main>
  );
};

export default WorkCard;
