import Image from "next/image";
import petIconImage from "../../../public/images/pet-icon.webp";
import MaskedInput from "@/components/shared/masked-input";
import { useState } from "react";
import Touchable from "@/components/ui/touchable";
import InputOTPValidation from "@/components/ui/input-otp-validation";

export default function ResetPassword() {
  const [isTelephoneOnDatabase, setIsTelephoneOnDatabase] = useState(false);
  const [isCodeCheck, setIsCodeCheck] = useState(false);

  function verifyTelephone() {
    setIsTelephoneOnDatabase(true);
  }

  function verifyCodeOnSMS() {
    setIsCodeCheck(true);
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

        <form className="flex flex-col gap-8 m-5">
          {isTelephoneOnDatabase ? (
            <div className="flex flex-col gap-5">
              <p>
                Enviamos um código SMS para o telefone (xx) xxxxx-xxxx.
                Verifique seu dispositivo
              </p>
              <InputOTPValidation />
              <Touchable onClick={verifyCodeOnSMS}>Enviar código</Touchable>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              <p>
                Adicione o seu telefone para enviarmos um link de redefinição de
                senha
              </p>
              <MaskedInput placeholder="Telefone" mask="(99) 99999-9999" />
              <Touchable onClick={verifyTelephone}>Enviar telefone</Touchable>
            </div>
          )}

          <button
            onClick={() => setIsTelephoneOnDatabase(false)}
            className="underline cursor-pointer"
          >
            Voltar
          </button>
        </form>
      </div>
    </div>
  );
}
