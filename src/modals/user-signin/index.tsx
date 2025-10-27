"use client";

import avatarImage from "../../../public/images/avatar.webp";
import Image from "next/image";
import Touchable from "@/components/ui/touchable";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SignInUserForm from "./signin-user-form";
import { useState, useEffect } from "react";
import axios from "axios";
import type { AxiosError } from "axios";
import { useRouter, useSearchParams } from "next/navigation";

export default function UserSignIn() {
  const [documentId, setDocumentId] = useState("");
  const [password, setPassword] = useState("");
  const [error] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("openLogin") === "true") {
      setOpen(true);
    }
  }, [searchParams]);

  const handleLogin = async () => {
    if (!documentId.trim() || !password.trim()) {
      alert("CPF/RG e senha são obrigatórios.");
      return;
    }

    try {
      const response = await axios.post(
        "https://backend-clinica-veterinaria.onrender.com/api/auth/login",
        {
          username: documentId.replace(/\D/g, ""),
          password,
        }
      );

      localStorage.setItem("token", response.data.token);
      alert("Login realizado com sucesso!");
      setOpen(false);
      router.push("/user");
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      console.error("Erro no login:", error.response?.data || error.message);
      alert(
        error.response?.data?.message ||
          "Erro ao fazer login. Verifique suas credenciais."
      );
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="cursor-pointer">
          <Image
            className="size-10"
            src={avatarImage}
            alt="Imagem do usuário"
          />
        </button>
      </DialogTrigger>
      <DialogContent className="shadow-default bg-green-light bg-[url('/background-image.webp')] bg-cover bg-center bg-no-repeat rounded-4xl">
        <div className="backdrop-blur-md bg-white/25 shadow-2xl p-10 rounded-4xl flex flex-col gap-5 overflow-y-auto scrollbar-hide">
          <DialogHeader className="max-w-full flex items-center">
            <DialogTitle className="text-center text-3xl font-poppins font-light p-1 w-80">
              Login
            </DialogTitle>
          </DialogHeader>

          <SignInUserForm
            documentId={documentId}
            setDocumentId={setDocumentId}
            password={password}
            setPassword={setPassword}
          />

          {error && <p className="text-red-500 text-center">{error}</p>}

          <Touchable onClick={handleLogin}>Entrar</Touchable>
        </div>
      </DialogContent>
    </Dialog>
  );
}
