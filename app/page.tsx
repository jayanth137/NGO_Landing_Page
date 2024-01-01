import Image from 'next/image';
import Navbar from './components/Navbar';

import MapCtxt from './components/MapCtxt';
import Card from './components/Card';
import HeroPage from './components/HeroPage';
import Gallery from './components/Gallery';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Events from './components/Events';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroPage />
      <MapCtxt />
      <Card />
      <Events />

      <Gallery />
      <Faq />
      <Footer />
    </main>
  );
}
