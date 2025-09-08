import BookingInputs from "./booking-inputs";
import BookingDetails from "./booking-details";
import Touchable from "@/components/ui/touchable";
import Title from "@/components/ui/title";
import Link from "next/link";

export default function BookingForm() {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex w-full justify-between items-center max-[1335px]:flex-col max-[1335px]:gap-20">
        <div className="grid gap-10">
          <BookingInputs />

          <span className="flex flex-col justify-center font-poppins text-sm text-center">
            <p>
              Caso ainda nao tenha seu animal cadastrado, clique neste botão
              para cadastrá-lo
            </p>

            <Link href="/cadastrar-pet" className="font-bold text-center underline">
              Cadastrar Novo Animal
            </Link>
          </span>
        </div>

        <BookingDetails />
      </div>

      <Touchable>Concluir agendamento</Touchable>
    </div>
  );
}
