import { Input } from "@/components/ui/input";
import Touchable from "@/components/ui/touchable";

export default function SignUpPetForm() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-3 w-[60%]">
        <div className="flex items-center gap-2">
          <label htmlFor="pet">Adicione a foto do pet:</label>
          <Input
            id="pet"
            name="pet"
            className="cursor-pointer"
            type="file"
            accept="image/png, image/jpeg"
          />
        </div>
        <Input placeholder="Nome completo" />
        <Input placeholder="Espécie" />
        <Input placeholder="Raça" />
        <Input placeholder="Idade" />

        <Input placeholder="Castrado?" />
        <Input placeholder="Sexo" />
        <Input placeholder="Peso" />
        <Input placeholder="Temperamento" />

        <Touchable>Concluído</Touchable>
      </div>
      
    </div>
  );
}
