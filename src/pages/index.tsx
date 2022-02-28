import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import { AboutSection } from '../components/AboutSection';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { SkillsSection } from '../components/SkillsSection';
import { Project, ProjectRaw } from '../typings';

type HomeProps = {
  projects: Project[];
};

const Home: NextPage<HomeProps> = ({ projects }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[url(/img/background.png)] bg-no-repeat bg-cover">
      <Head>
        <title>Miguel Ângelo - Desenvolvedor Web Júnior</title>
      </Head>

      <Header />

      <HeroSection />

      <AboutSection />

      <SkillsSection />

      <ProjectsSection projects={projects} />

      {/* Contact */}

      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const response = await fetch(
    'https://raw.githubusercontent.com/miguel5g/projects/main/data/projects.json'
  );

  const projects: ProjectRaw[] = await response.json();

  return {
    props: {
      projects: projects.map((project) => ({
        ...project,
        imageUrl: project.image_url,
      })),
    },
    revalidate: 1000 * 60 * 60,
  };
};

export default Home;
