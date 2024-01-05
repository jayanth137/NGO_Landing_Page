import React from 'react';
import image1 from '../Gallery-images/image1.jpg';
import image2 from '../Gallery-images/image2.jpeg';
import image3 from '../Gallery-images/imag3.jpeg';
import image4 from '../Gallery-images/image4.jpeg';
import image5 from '../Gallery-images/image5.jpeg';
import image6 from '../Gallery-images/image6.jpeg';
import image7 from '../Gallery-images/image7.svg';
import image8 from '../Gallery-images/image8.jpeg';
import image9 from '../Gallery-images/image9.jpeg';
import image10 from '../Gallery-images/image10.jpeg';
import image11 from '../Gallery-images/image11.jpeg';

import Image from 'next/image';

const Gallery = () => {
  return (
    <main>
      <div>
        <h1 className="text-5xl font-bold text-center m-2">Gallery</h1>
        <p className="text-base  md:mx-52 mx-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
          tristique enim. Phasellus convallis at risus eget finibus. Mauris non
          arcu eu sem ornare aliquet. Mauris et enim pulvinar,{' '}
        </p>
      </div>

      <div>
        <div className="carousel md:mx-48 mx-8  my-10 rounded-box">
          <div className="carousel-item">
            <Image
              src={image1}
              alt="Burger"
              height={200}
              width={300}
              className="object-cover"
            />
          </div>

          <div className="carousel-item">
            <Image
              src={image3}
              alt="Burger"
              height={200}
              width={300}
              className="object-cover"
            />
          </div>
          <div className="carousel-item">
            <Image
              src={image4}
              alt="Burger"
              height={200}
              width={300}
              className="object-cover"
            />
          </div>
          <div className="carousel-item">
            <Image
              src={image5}
              alt="Burger"
              height={200}
              width={300}
              className="object-cover"
            />
          </div>
          <div className="carousel-item">
            <Image
              src={image6}
              alt="Burger"
              height={200}
              width={300}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="md:mx-48 mx-8  md:my-10 my-2  flex gap-x-20">
        <Image src={image7} alt="image7" className="rounded-box" />

        <a link=""></a>
      </div>
    </main>
  );
};

export default Gallery;
