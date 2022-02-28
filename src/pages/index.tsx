import Head from 'next/head';

import { AboutSection } from '../components/AboutSection';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { SkillsSection } from '../components/SkillsSection';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Miguel Ângelo - Desenvolvedor Web Júnior</title>
      </Head>

      <Header />

      <HeroSection />

      <AboutSection />

      <SkillsSection />

      {/* Projects */}

      {/* Contact */}

      <Footer />
    </div>
  );
};

export default Home;
