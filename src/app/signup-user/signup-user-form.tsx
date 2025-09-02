import Touchable from "@/components/ui/touchable";
import { Input } from "@/components/ui/input";

export default function SignUpUserForm() {
  return (
    <div className="flex flex-col justify-center w-full gap-8 ">
      <div className="flex justify-center">
        <div className="flex flex-col gap-3 w-full">
          <Input placeholder="Nome completo:" />
          <Input placeholder="CPF/RG:" />
          <Input placeholder="Data de nascimento:" />
          <Input placeholder="Telefone:" />
          <Input placeholder="CEP:" />

          <div className="flex gap-2">
            <Input placeholder="Número:" />
            <Input placeholder="Complemento:" />
          </div>

          <Input placeholder="Endereço:" />
          <Input placeholder="Bairro:" />
          <Input type="password" placeholder="Senha:" />
        </div>
      </div>

      <Touchable>Concluído</Touchable>
    </div>
  );
}
