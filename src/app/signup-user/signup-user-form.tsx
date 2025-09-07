import Touchable from "@/components/ui/touchable";
import MaskedInput from "@/components/shared/masked-input";
import { Input } from "@/components/ui/input";

export default function SignUpUserForm() {
  return (
    <div className="flex flex-col justify-center w-full gap-8">
      <div className="flex justify-center">
        <div className="flex flex-col gap-3 w-full">
          <MaskedInput placeholder="CPF/RG" mask="999.999.999-99" />
          <Input type="text" placeholder="Nome completo" />
          <Input type="date" placeholder="Data de nascimento:" />
          <MaskedInput placeholder="Telefone" mask="(99) 99999-9999" />
          <MaskedInput placeholder="CEP" mask="99999-999" />

          <div className="flex gap-2">
            <Input type="text" placeholder="Número" />
            <Input type="text" placeholder="Complemento" />
          </div>

          <Input type="text" placeholder="Endereço" />
          <Input type="text" placeholder="Bairro" />
          <Input type="password" placeholder="Senha" />
        </div>
      </div>

      <Touchable>Concluído</Touchable>
    </div>
  );
}
