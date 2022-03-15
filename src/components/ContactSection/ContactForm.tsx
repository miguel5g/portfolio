import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { FiBookmark, FiMail, FiMessageSquare, FiSend, FiUser } from 'react-icons/fi';

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
      const response = axios.post('/api/contact', data);

      toast.promise(response, {
        loading: 'Enviando...',
        success: 'Obrigado por entrar em contato!',
        error: 'Algo deu errado :(',
      });

      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      console.error(error);
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
        label={
          <>
            <FiUser />
            <span>Nome</span>
          </>
        }
        description="Seu nome ou como eu poderia te chamar."
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <TextInput
        label={
          <>
            <FiBookmark />
            <span>Assunto</span>
          </>
        }
        description="Sobre o que é a mensagem?"
        value={subject}
        onChange={(event) => setSubject(event.target.value)}
      />

      <TextInput
        label={
          <>
            <FiMail />
            <span>E-mail</span>
          </>
        }
        description="Seu melhor email. (Não é obrigatório)"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <TextAreaInput
        label={
          <>
            <FiMessageSquare />
            <span>Mensagem</span>
          </>
        }
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
