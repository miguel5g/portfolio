import Head from 'next/head';

import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Miguel Ângelo - Desenvolvedor Web Júnior</title>
      </Head>

      <Header />

      <HeroSection />

      {/* About */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact */}

      {/* Footer */}
    </div>
  );
};

export default Home;
