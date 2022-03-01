import Document, { Head, Html, Main, NextScript } from 'next/document';

class AppDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          {/* Primary Meta Tags */}
          <meta name="title" content="Miguel Ângelo - Desenvolvedor Front-End Web" />
          <meta
            name="description"
            content="Aqui você vai encontrar tudo sobre mim, desde de como eu comecei até o que eu estou estudando hoje."
          />
          <meta name="theme-color" content="#22d3ee" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://miguel5g.vercel.app/" />
          <meta property="og:title" content="Miguel Ângelo - Desenvolvedor Front-End Web" />
          <meta
            property="og:description"
            content="Aqui você vai encontrar tudo sobre mim, desde de como eu comecei até o que eu estou estudando hoje."
          />
          <meta property="og:image" content="/img/preview.png" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://miguel5g.vercel.app/" />
          <meta property="twitter:title" content="Miguel Ângelo - Desenvolvedor Front-End Web" />
          <meta
            property="twitter:description"
            content="Aqui você vai encontrar tudo sobre mim, desde de como eu comecei até o que eu estou estudando hoje."
          />
          <meta property="twitter:image" content="/img/preview.png" />
        </Head>

        <body className="bg-gray-50">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
