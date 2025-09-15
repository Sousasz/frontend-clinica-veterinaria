import Image from "next/image";
import petIconImage from "../../../public/pet-icon.webp";

export default function ResetPassword() {
  return (
    <div className="sm:max-w-[90%] shadow-default h-[90%] bg-green-light bg-[url('/background-image.webp')] bg-cover bg-center bg-no-repeat">
      <div className="backdrop-blur-md bg-white/25 shadow-2xl p-10 rounded-lg flex flex-col gap-10 overflow-y-auto scrollbar-hide">
        <Image
          src={petIconImage}
          alt="Ícone de um cachorro - marca da clínica veterinária"
        />
      </div>
    </div>
  );
}
