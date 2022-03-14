import { useState } from 'react';
import {
  FiGithub,
  FiLink,
  FiLinkedin as FiLinkedIn,
  FiMail,
  FiSend,
  FiTwitch,
  FiTwitter,
  FiYoutube as FiYouTube,
} from 'react-icons/fi';

import { AnchorButton } from './AnchorButton';
import { Button } from './Button';
import { TextAreaInput } from './TextAreaInput';
import { TextInput } from './TextInput';

const SocialAnchor: React.FC<{ href: string }> = ({ href, children }) => {
  return (
    <AnchorButton href={href} target="_blank" rel="noopener noreferrer" variant="secondary">
      {children}
    </AnchorButton>
  );
};

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setLoading] = useState(false);

  async function handleSentMessage(event: React.FormEvent<HTMLFormElement>) {
    console.log('here');

    event.preventDefault();

    if (isLoading) return;

    const data = {
      name: name.trim(),
      email: email ? email.trim() : undefined,
      subject: subject.trim(),
      message: message.trim(),
    };

    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      setName('');
      setEmail('');
      setSubject('');
      setMessage('');

      alert('Mensagem enviada!');
    } catch (error) {
      console.error(error);
      alert('Erro ao enviar mensagem!');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      className="flex flex-col w-full gap-2 p-6 bg-white rounded-lg shadow-md md:p-8"
      onSubmit={handleSentMessage}
    >
      <h3 className="text-2xl text-center">Formulário de contato</h3>
      <p className="font-light text-center text-gray-700">
        Sinta-se a vontade para escrever o que quiser, mantendo o respeito!
      </p>

      <div className="mt-4" />

      <TextInput
        label="Nome"
        description="Seu nome ou como eu poderia te chamar."
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <TextInput
        label="Assunto"
        description="Sobre o que é a mensagem?"
        value={subject}
        onChange={(event) => setSubject(event.target.value)}
      />

      <TextInput
        label="Email"
        description="Seu melhor email."
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <TextAreaInput
        label="Mensagem"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />

      <div className="mx-auto mt-4">
        <Button type="submit" disabled={isLoading}>
          <FiSend />
          <span>Enviar</span>
        </Button>
      </div>

      <div className="relative my-6">
        <div className="absolute inset-0 h-px bg-gray-200" />
        <div className="absolute px-4 -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2 w-max">
          <span className="text-sm font-light text-gray-600">Ou</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 md:flex-row">
        <SocialAnchor href="https://github.com/miguel5g">
          <FiGithub />
          <span>Github</span>
        </SocialAnchor>

        <SocialAnchor href="https://www.linkedin.com/in/miguel5g/">
          <FiLinkedIn />
          <span>LinkedIn</span>
        </SocialAnchor>

        <SocialAnchor href="https://twitter.com/guel5g">
          <FiTwitter />
          <span>Twitter</span>
        </SocialAnchor>

        <SocialAnchor href="mailto:miguelcg958@gmail.com">
          <FiMail />
          <span>Email</span>
        </SocialAnchor>

        <SocialAnchor href="https://www.twitch.tv/miguel05g">
          <FiTwitch />
          <span>Twitch</span>
        </SocialAnchor>

        <SocialAnchor href="https://www.youtube.com/channel/UCBIH49ITq52oi5LYVcStZlA">
          <FiYouTube />
          <span>YouTube</span>
        </SocialAnchor>

        <SocialAnchor href="https://discordapp.com/users/342803796201832449/">
          <FiLink />
          <span>Discord</span>
        </SocialAnchor>
      </div>
    </form>
  );
};
