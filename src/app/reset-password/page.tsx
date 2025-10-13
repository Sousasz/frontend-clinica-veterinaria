"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Para redirecionar após sucesso (App Router) ou use 'next/router' para Pages Router
import petIconImage from "../../../public/images/pet-icon.webp";
import MaskedInput from "@/components/shared/masked-input";
import { Input } from "@/components/ui/input";
import Touchable from "@/components/ui/touchable";
import InputOTPValidation from "@/components/ui/input-otp-validation"; // Assuma que isso captura o OTP como string

export default function ResetPassword() {
  const [isTelephoneOnDatabase, setIsTelephoneOnDatabase] = useState(false);
  const [isCodeCheck, setIsCodeCheck] = useState(false);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(""); // Para o InputOTPValidation (6 dígitos)
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const router = useRouter();
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null; // Pega token do localStorage

  // Se não há token (usuário não logado), redirecione para login
  if (!token) {
    router.push("/signup-user");  
    return null;
  }

  const API_BASE = process.env.NODE_ENV === "development" 
    ? "http://localhost:5000/api/auth" 
    : "https://backend-clinica-veterinaria.onrender.com/api/auth"; // Ajuste conforme seu env

  async function verifyTelephone() {
    if (!phone) {
      setError("Digite o telefone.");
      return;
    }
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const headers: HeadersInit = {
        "Content-Type": "application/json",
      };
      if (token) {
        headers["x-auth-token"] = token;
      }
      const res = await fetch(`${API_BASE}/verify-phone`, {
        method: "POST",
        headers,
        body: JSON.stringify({ phone }),
      });

      const data = await res.json();
      if (res.ok) {
        setIsTelephoneOnDatabase(true);
        setSuccess(data.msg);
        // Envia OTP automaticamente após verificar telefone (para fluidez no UX)
        await sendOTP();
      } else {
        setError(data.msg || "Erro ao verificar telefone.");
      }
    } catch (err) {
      setError("Erro de conexão. Tente novamente.");
    }
    setLoading(false);
  }

  async function sendOTP() {
    setLoading(true);
    try {
      const headers: HeadersInit = {
        "Content-Type": "application/json",
      };
      if (token) {
        headers["x-auth-token"] = token;
      }
      const res = await fetch(`${API_BASE}/send-otp`, {
        method: "POST",
        headers,
      });

      const data = await res.json();
      if (res.ok) {
        setSuccess(data.msg);
      } else {
        setError(data.msg || "Erro ao enviar OTP.");
        // Se falhar, volta para tela de telefone
        setIsTelephoneOnDatabase(false);
      }
    } catch (err) {
      setError("Erro de conexão. Tente novamente.");
      setIsTelephoneOnDatabase(false);
    }
    setLoading(false);
  }

  async function verifyCodeOnSMS() {
    if (!otp || otp.length !== 6) {
      setError("Digite o código OTP completo (6 dígitos).");
      return;
    }
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const headers: HeadersInit = {
        "Content-Type": "application/json",
      };
      if (token) {
        headers["x-auth-token"] = token;
      }
      const res = await fetch(`${API_BASE}/verify-otp`, {
        method: "POST",
        headers,
        body: JSON.stringify({ otp }),
      });

      const data = await res.json();
      if (res.ok) {
        setIsCodeCheck(true);
        setSuccess(data.msg);
      } else {
        setError(data.msg || "Código inválido ou expirado.");
        // Limpa OTP para nova tentativa
        setOtp("");
      }
    } catch (err) {
      setError("Erro de conexão. Tente novamente.");
    }
    setLoading(false);
  }

  async function resetPassword() {
    if (newPassword !== confirmPassword) {
      setError("Senhas não coincidem.");
      return;
    }
    if (newPassword.length < 6) {
      setError("Senha deve ter pelo menos 6 caracteres.");
      return;
    }
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const headers: HeadersInit = {
        "Content-Type": "application/json",
      };
      if (token) {
        headers["x-auth-token"] = token;
      }
      const res = await fetch(`${API_BASE}/reset-password`, {
        method: "POST",
        headers,
        body: JSON.stringify({ newPassword }),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccess(data.msg);
        // Remove token para forçar novo login (segurança)
        localStorage.removeItem("token");
        // Redireciona para login após 2s
        setTimeout(() => router.push("/login"), 2000);
      } else {
        setError(data.msg || "Erro ao redefinir senha.");
      }
    } catch (err) {
      setError("Erro de conexão. Tente novamente.");
    }
    setLoading(false);
  }

  // Função para reenviar OTP (opcional, adicione um botão se quiser)
  async function resendOTP() {
    setOtp("");
    await sendOTP();
  }

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-green-light bg-cover bg-center bg-no-repeat bg-[url('/images/background-image.webp')] gap-5">
      <Image
        src={petIconImage}
        alt="Ícone de um cachorro - marca da clínica veterinária"
      />

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <h2 className="font-semibold text-3xl text-center">
            Redefinir senha
          </h2>
        </div>

        <form className="flex flex-col gap-8 m-2">
          {error && <p className="text-red-500 text-center p-2 bg-red-100 rounded">{error}</p>}
          {success && <p className="text-green-500 text-center p-2 bg-green-100 rounded">{success}</p>}
          {loading && <p className="text-blue-500 text-center">Carregando...</p>}

          {isTelephoneOnDatabase ? (
            <div className="flex flex-col justify-center items-center gap-4">
              <p>
                Enviamos um código SMS para o telefone ({phone}). Verifique seu dispositivo.
              </p>
              {isCodeCheck ? (
                <>
                  <Input
                    type="password"
                    placeholder="Adicionar nova senha"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <Input
                    type="password"
                    placeholder="Confirmar senha"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <Touchable onClick={resetPassword} disabled={loading}>
                    {loading ? "Processando..." : "Redefinir"}
                  </Touchable>
                </>
              ) : (
                <>
                  <InputOTPValidation
                    value={otp}
                    onChange={(value) => setOtp(value)} // Assuma que o componente passa o OTP como string
                  />
                  <Touchable onClick={verifyCodeOnSMS} disabled={loading || otp.length !== 6}>
                    {loading ? "Verificando..." : "Enviar código"}
                  </Touchable>
                  <Touchable onClick={resendOTP} disabled={loading}>
                    Reenviar código
                  </Touchable>
                  <button
                    onClick={() => {
                      setIsTelephoneOnDatabase(false);
                      setOtp("");
                      setError("");
                      setSuccess("");
                    }}
                    className="underline cursor-pointer text-sm"
                  >
                    Voltar
                  </button>
                </>
              )}
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              <p>
                Adicione o seu telefone para enviarmos um código de redefinição de senha.
              </p>
              <MaskedInput
                placeholder="Telefone"
                mask="(99) 99999-9999"
                value={phone}
                onChange={(event) => setPhone(event.target.value ?? "")} // Extrai o valor do evento, garante string
              />
              <Touchable onClick={verifyTelephone} disabled={loading || !phone}>
                {loading ? "Verificando..." : "Enviar telefone"}
              </Touchable>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
