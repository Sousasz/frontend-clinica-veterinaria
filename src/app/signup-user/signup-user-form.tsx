"use client";
import Touchable from "@/components/ui/touchable";
import MaskedInput from "@/components/shared/masked-input";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import axios from "axios"; // Ou use fetch
import type { AxiosError } from "axios";

export default function SignUpUserForm() {
  const [username, setUsername] = useState(""); // Assumindo que username será o CPF/RG ou um campo separado
  const [password, setPassword] = useState("");
  const [documentId, setDocumentId] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [cep, setCep] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [addressComplement, setAddressComplement] = useState("");
  const [addressStreet, setAddressStreet] = useState("");
  const [addressNeighborhood, setAddressNeighborhood] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          username: documentId.replace(/\D/g, ""), // Usar CPF/RG como username, remover caracteres não numéricos
          password,
          documentId: documentId.replace(/\D/g, ""),
          dateOfBirth,
          phone: phone.replace(/\D/g, ""),
          cep: cep.replace(/\D/g, ""),
          addressNumber,
          addressComplement,
          addressStreet,
          addressNeighborhood,
        }
      );

      setSuccess(response.data.message);
      
    } catch (err) {
      const error = err as AxiosError<{
        message?: string;
        errors?: Record<string, string>;
      }>;

      console.error("Erro no cadastro:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Erro ao registrar usuário.");
      if (error.response?.data?.errors) {
        const errors = error.response.data.errors;
        if (errors.username) setError(errors.username);
        if (errors.documentId) setError(errors.documentId);
        if (errors.dateOfBirth) setError(errors.dateOfBirth);
      }
    }
  };

  return (
    <div className="flex flex-col justify-center w-full gap-8">
      <div className="flex justify-center">
        <div className="flex flex-col gap-3 w-full">
          <MaskedInput
            placeholder="CPF/RG"
            mask="999.999.999-99"
            value={documentId}
            onChange={(e) => setDocumentId(e.target.value ?? "")}
          />
          <Input
            type="text"
            placeholder="Nome completo"
            value={username} // Usar para o nome completo, se o username for o CPF/RG
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="date"
            placeholder="Data de nascimento:"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
          <MaskedInput
            placeholder="Telefone"
            mask="(99) 99999-9999"
            value={phone}
            onChange={(e) => setPhone(e.target.value ?? "")}
          />
          <MaskedInput
            placeholder="CEP"
            mask="99999-999"
            value={cep}
            onChange={(e) => setCep(e.target.value ?? "")}
          />

          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Número"
              value={addressNumber}
              onChange={(e) => setAddressNumber(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Complemento"
              value={addressComplement}
              onChange={(e) => setAddressComplement(e.target.value)}
            />
          </div>

          <Input
            type="text"
            placeholder="Endereço"
            value={addressStreet}
            onChange={(e) => setAddressStreet(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Bairro"
            value={addressNeighborhood}
            onChange={(e) => setAddressNeighborhood(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      {error && <p className="text-red-500 text-center">{error}</p>}
      {success && <p className="text-green-500 text-center">{success}</p>}

      <Touchable onClick={handleSubmit}>Concluído</Touchable>
    </div>
  );
}
