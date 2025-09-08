import { Input } from "@/components/ui/input";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { MessageCircleWarning } from "lucide-react";

export default function BookingInputs() {
  return (
    <div className="flex justify-center items-center gap-5 max-[550px]:flex-col">
      <div className="flex flex-col gap-5">
        <Alert className="bg-green-light border-white">
          <MessageCircleWarning />
          <AlertTitle>Adicione o nome do pet</AlertTitle>
          <AlertDescription>
            Insira o nome do animal para obtermos às informações
          </AlertDescription>
        </Alert>

        <section className="flex flex-col gap-3">
          <Input name="petname" placeholder="Nome do pet" />
          <Input name="specie" placeholder="Espécie" disabled />
          <Input name="breed" placeholder="Raça" disabled />

          <div className="flex gap-2 max-[550px]:flex-col">
            <Input name="spayed" placeholder="Castrado?" disabled />
            <Input name="male-or-female" placeholder="Sexo" disabled />
          </div>

          <div className="flex gap-2 max-[550px]:flex-col">
            <Input name="weight" placeholder="Peso" disabled />
            <Input name="temperament" placeholder="Temperamento" disabled />
          </div>
        </section>
      </div>
    </div>
  );
}
