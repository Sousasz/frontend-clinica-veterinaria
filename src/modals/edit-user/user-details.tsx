import EditableData from "@/components/shared/editable-data";
import Touchable from "@/components/ui/touchable";
import { formatToCPF, formatToCEP, formatToPhone } from "brazilian-values";
import { DialogClose } from "@/components/ui/dialog";


export default function UserDetails() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-center font-poppins">
        <div className="flex flex-col gap-3 w-full"> 
          <div className="flex flex-col gap-4">
            <EditableData fieldLabel="Nome completo">John Doe</EditableData>

            <EditableData fieldLabel="CPF/RG">
              {formatToCPF("99999999999")}
            </EditableData>

            <EditableData fieldLabel="Telefone">
              {formatToPhone("99999999999")}
            </EditableData>

            <EditableData fieldLabel="CEP">
              {formatToCEP("99999999")}
            </EditableData>

            <EditableData fieldLabel="Número">99</EditableData>

            <EditableData fieldLabel="Complemento">Apto 999</EditableData>

            <EditableData fieldLabel="Endereço">
              Rua Avenida Avenida
            </EditableData>

            <EditableData fieldLabel="Bairro">Brasilândia</EditableData>
          </div>
        </div>
      </div>

      <DialogClose asChild>
        <Touchable>Concluído</Touchable>
      </DialogClose>
    </div>
  );
}
