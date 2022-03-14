import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import { AboutSection } from '../components/AboutSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { SkillsSection } from '../components/SkillsSection';
import { githubApi } from '../services/apis';
import { Project, ProjectRaw } from '../typings';

type HomeProps = {
  projects: Project[];
};

const Home: NextPage<HomeProps> = ({ projects }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[url(/img/background.png)] bg-no-repeat bg-cover">
      <Head>
        <title>Miguel Ângelo - Desenvolvedor Front-End Júnior</title>
      </Head>

      <Header />

      <HeroSection />

      <AboutSection />

      <SkillsSection />

      <ProjectsSection projects={projects} />

      <ContactSection />

      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const { data } = await githubApi.get<ProjectRaw[]>('/miguel5g/projects/main/data/projects.json');

  return {
    props: {
      projects: data.map((project) => ({
        ...project,
        imageUrl: project.image_url,
      })),
    },
    revalidate: 1000 * 60 * 60,
  };
};

export default Home;
