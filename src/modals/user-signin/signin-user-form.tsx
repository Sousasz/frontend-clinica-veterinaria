'use client'
import MaskedInput from "@/components/shared/masked-input";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useState } from 'react';
import axios from 'axios'; // Ou use fetch
import { useRouter } from 'next/navigation'; // Para redirecionar

interface SignInUserFormProps {
  documentId: string
  setDocumentId: React.Dispatch<React.SetStateAction<string>>
  password: string
  setPassword: React.Dispatch<React.SetStateAction<string>>
}

export default function SignInUserForm({
  documentId,
  setDocumentId,
  password,
  setPassword
}: SignInUserFormProps) {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        username: documentId.replace(/\D/g, ''), // Enviar CPF/RG sem formatação
        password,
      });

      localStorage.setItem('token', response.data.token);
      router.push('/user'); // Redirecionar para a página do usuário após o login
    } catch (err: any) {
      console.error('Erro no login:', err.response?.data || err.message);
      setError(err.response?.data?.msg || 'Erro ao fazer login.');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="flex flex-col gap-3 w-[90%]">
        <MaskedInput
          name="cpf-rg"
          placeholder="CPF/RG"
          mask="999.999.999-99"
          value={documentId}
          onChange={(e) => setDocumentId(e.target.value ?? '')}
        />
        <Input
          name="password"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <span className="flex flex-col justify-center font-poppins text-sm text-center">
        <Link href="/reset-password" className="font-medium underline">
          Esqueceu a senha?
        </Link>

        <Link href="/signup-user" className="font-medium underline">
          Não tem um login? Cadastre-se
        </Link>
      </span>
      {/* O botão Touchable está no componente pai UserSignIn, então a função handleLogin deve ser passada para ele */}
    </div>
  );
}