import Touchable from "@/components/ui/touchable";
import { Input } from "@/components/ui/input";

export default function SignUpPetForm() {
  return (
    <div className="flex justify-center">
      <img src="" alt="" />

      <div className="flex flex-col gap-3 w-full">
        <Input placeholder="Nome completo:" />
        <Input placeholder="Espécie:" />
        <Input placeholder="Raça:" />
        <Input placeholder="Idade:" />

        {/* Combobox */}
        <div className="flex gap-2">
          <Input placeholder="Castrado?:" />
          <Input placeholder="Sexo:" />
        </div>

        <div className="flex gap-2">
          <Input placeholder="Peso: " />

          {/* Combobox */}
          <Input placeholder="Temperamento:" />
        </div>
      </div>
    </div>
  );
}