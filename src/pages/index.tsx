import Head from 'next/head';

import { AboutSection } from '../components/AboutSection';
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

      <AboutSection />

      {/* Skills */}

      {/* Projects */}

      {/* Contact */}

      {/* Footer */}
    </div>
  );
};

export default Home;
