import React from 'react';
import Head from 'next/head';

import CardProfile from '../Components/CardProfile';
import Summary from '../Components/Summary';
import Links from '../Components/Links';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Projects from '../Components/Projects';
import Footer from '../Components/Footer';

import { Container, UserContainer } from '../styles/pages/Index';

const Index: React.FC = () => (
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
        <Projects />

      </main>

      <Footer />
    </Container>
  </>
);

export default Index;
