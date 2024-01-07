import React from 'react';
import Image from 'next/image';

const WorkCard = ({ data }) => {
  const { image, title, date, passage } = data;
  return (
    <main
      className=" bg-white   gap-x-4 
    flex flex-col grow md:flex-row  w-auto m-4 p-4  md:w-full sm:mx-auto sm:p-auto sm:py-16   space-x-4 container  rounded-3xl"
    >
      <div className="md:w-2/5 w-auto h-auto grow m-auto">
        <Image src={image} alt="Shoes" className="max-w-full	 max-h-full" />
      </div>
      <div className="flex flex-col space-y-4 md:w-3/5">
        <h3 className="text-3xl">{title}</h3>
        <h6 className="text-1xl">{date}</h6>
        <p className="text-base">{passage}</p>
      </div>
    </main>
  );
};

export default WorkCard;
