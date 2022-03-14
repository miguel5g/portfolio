import axios from 'axios';
import { useState } from 'react';
import { FiSend } from 'react-icons/fi';

import { Button } from '../Button';
import { TextAreaInput } from '../TextAreaInput';
import { TextInput } from '../TextInput';
import { SocialAnchorsContainer } from './SocialAnchorsContainer';

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
      const response = await axios.post('/api/contact', data);

      if (response.status !== 201) {
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
      className="flex flex-col w-full gap-2 p-6 rounded-lg bg-white/60 backdrop-blur md:p-8"
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

      {/* Submit button */}
      <div className="mx-auto mt-4">
        <Button type="submit" disabled={isLoading}>
          <FiSend />
          <span>Enviar</span>
        </Button>
      </div>

      {/* Separator */}
      <div className="relative my-6">
        <div className="absolute flex items-center justify-center w-full gap-6 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-sm font-light text-gray-600">Ou</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
      </div>

      <SocialAnchorsContainer />
    </form>
  );
};
