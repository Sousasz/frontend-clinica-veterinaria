import Title from "@/components/ui/title";
import TextArea from "@/components/ui/textarea";
import BookingCalendar from "./booking-calendar";

export default function BookingDetails() {
  return (
    <div className="flex flex-col justify-center items-center gap-14 w-full">
      <div className="flex flex-col gap-5 w-[90%]">
        <Title>Descrição breve</Title>
        <TextArea className="ml-20" />
      </div>

      <div className="flex flex-col gap-5">
        <Title>Data e hora</Title>
        <BookingCalendar />
      </div>
    </div>
  );
}
