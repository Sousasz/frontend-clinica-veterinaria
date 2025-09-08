import Title from "@/components/ui/title";
import { Textarea } from "@/components/ui/textarea";
import BookingCalendar from "./booking-calendar";

export default function BookingDetails() {
  return (
    <div className="flex flex-col justify-center items-center gap-14 w-[60%]">
      <div className="flex flex-col gap-5 w-full justify-center items-center">
        <Title>Descrição breve</Title>
        <Textarea className="max-[520px]:w-72 max-[410px]:w-56" placeholder="Descrição breve" />
      </div>

      <div className="flex flex-col gap-5">
        <Title>Data e hora</Title>
        <BookingCalendar />
      </div>
    </div>
  );
}
