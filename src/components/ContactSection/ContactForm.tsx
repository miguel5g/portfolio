import type { FormHandles } from '@unform/core';

import axios from 'axios';
import * as Yup from 'yup';
import { toast } from 'react-hot-toast';
import { useCallback, useRef, useState } from 'react';
import { FiBookmark, FiMail, FiMessageSquare, FiSend, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';

import { Button } from '../Button';
import { TextAreaInput } from '../TextAreaInput';
import { TextInput } from '../TextInput';
import { SocialAnchorsContainer } from './SocialAnchorsContainer';

type ContactData = {
  name: string;
  email?: string;
  subject: string;
  message: string;
};

export const ContactForm = () => {
  const [isLoading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>();

  const handleSentMessage = useCallback(
    async (data: ContactData) => {
      if (isLoading) return;

      setLoading(true);

      try {
        const schema = Yup.object().shape({
          name: Yup.string()
            .required('Nome é obrigatório')
            .min(4, 'Nome deve ter no mínimo 4 caracteres')
            .max(24, 'Nome deve ter no máximo 24 caracteres'),
          email: Yup.string().email(),
          subject: Yup.string()
            .required('Assunto é obrigatório')
            .min(4, 'Assunto deve ter no mínimo 4 caracteres')
            .max(32, 'Assunto deve ter no máximo 24 caracteres'),
          message: Yup.string()
            .required('Mensagem é obrigatória')
            .min(4, 'Mensagem deve ter no mínimo 4 caracteres')
            .max(512, 'Mensagem deve ter no máximo 512 caracteres'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const response = axios.post('/api/contact', data);

        toast.promise(response, {
          loading: 'Enviando...',
          success: 'Obrigado por entrar em contato!',
          error: 'Algo deu errado :(',
        });

        await response;

        formRef.current.reset();
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const validationErrors = {};

          error.inner.forEach((validationError) => {
            validationErrors[validationError.path] = validationError.message;
          });

          formRef.current.setErrors(validationErrors);

          return;
        }

        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    [isLoading]
  );

  return (
    <Form
      ref={formRef}
      className="flex flex-col w-full gap-2 p-6 rounded-lg bg-white/60 backdrop-blur md:p-8"
      onSubmit={handleSentMessage}
    >
      <h3 className="text-2xl text-center">Formulário de contato</h3>
      <p className="font-light text-center text-gray-700">
        Sinta-se a vontade para escrever o que quiser, mantendo o respeito!
      </p>

      <div className="mt-4" />

      <TextInput
        name="name"
        description="Seu nome ou como eu poderia te chamar."
        label={
          <>
            <FiUser />
            <span>Nome</span>
          </>
        }
      />

      <TextInput
        name="subject"
        description="Sobre o que é a mensagem?"
        label={
          <>
            <FiBookmark />
            <span>Assunto</span>
          </>
        }
      />

      <TextInput
        name="email"
        description="Seu melhor email. (Não é obrigatório)"
        type="email"
        label={
          <>
            <FiMail />
            <span>E-mail</span>
          </>
        }
      />

      <TextAreaInput
        name="message"
        description="O que deseja me contar?"
        label={
          <>
            <FiMessageSquare />
            <span>Mensagem</span>
          </>
        }
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
    </Form>
  );
};
