import type { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import { AboutSection } from '../components/AboutSection';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { githubApi } from '../services/apis';
import { Project, ProjectRaw } from '../typings';

const ContactSection = dynamic(
  import('../components/ContactSection').then((module) => module.ContactSection)
);
const ProjectsSection = dynamic(
  import('../components/ProjectsSection').then((module) => module.ProjectsSection),
  { ssr: false }
);
const SkillsSection = dynamic(
  import('../components/SkillsSection').then((module) => module.SkillsSection)
);

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
  let data: ProjectRaw[] = [];

  try {
    const response = await githubApi.get<ProjectRaw[]>(
      '/miguel5g/projects/main/data/projects.json'
    );

    data = response.data;
  } catch (error) {
    console.error(error);
  }

  // Serialize the data to a format that can be used by the component
  const projectsSerialized: Project[] = data.map((project) => ({
    ...project,
    imageUrl: project.image_url,
  }));

  return {
    props: {
      projects: projectsSerialized,
    },
    revalidate: 60 * 60, // 1 hour
  };
};

export default Home;
