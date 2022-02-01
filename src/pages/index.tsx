/* eslint-disable camelcase */
import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';

import CardProfile from '../Components/CardProfile';
import Summary from '../Components/Summary';
import Links from '../Components/Links';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Projects, { ProjectData } from '../Components/Projects';
import Footer from '../Components/Footer';

import { Container, UserContainer } from '../styles/pages/Index';

interface HomeProps {
  projects: ProjectData[];
}

interface ProjectDataRaw extends ProjectData {
  imageUrl: undefined;
  image_url: string;
}

const Index: React.FC<HomeProps> = ({ projects }) => (
  <>
    <Head>
      <title>Miguel Ângelo</title>
    </Head>

    <Container>
      <main>
        <UserContainer>
          <section>
            <CardProfile />
          </section>

          <section>
            <Summary />
            <Links />
          </section>
        </UserContainer>

        <About />
        <Skills />
        <Projects projects={projects} />
      </main>

      <Footer />
    </Container>
  </>
);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const projects: ProjectDataRaw[] = await fetch(
    'https://raw.githubusercontent.com/miguel5g/projects/main/data/projects.json',
  ).then((response) => response.json());

  return {
    props: {
      projects: projects.map((project) => ({
        ...project,
        imageUrl: project.image_url,
      })),
    },
  };
};

export default Index;
