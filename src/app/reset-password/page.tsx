import Image from "next/image";
import petIconImage from "../../../public/images/pet-icon.webp";
import MaskedInput from "@/components/shared/masked-input";
import Touchable from "@/components/ui/touchable";

export default function ResetPassword() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-green-light bg-[url('/background-image.webp')] bg-cover bg-center bg-no-repeat">
      <Image
        src={petIconImage}
        alt="Ícone de um cachorro - marca da clínica veterinária"
      />

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <h2 className="font-semibold text-3xl text-center">Redefinir senha</h2>
          <p>Adicione o seu telefone para enviarmos um link de redefinição de senha</p>
        </div>

        <form className="flex flex-col gap-8 m-5">
          <MaskedInput placeholder="Telefone" mask="(99) 99999-9999" />
          <Touchable>Enviar telefone</Touchable>
        </form>
      </div>  
    </div>
  );
}
