import Touchable from "@/components/ui/touchable";
import TextArea from "@/components/ui/textarea";
import RatingStar from "@/components/shared/rating-star";

export default function RateForm() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 font-poppins">
      <div className="flex flex-col w-full">
        <p className="underline">Como você avalia o atendimento?</p>
        <RatingStar />
      </div>

      <TextArea />

      <Touchable>Publicar</Touchable>
    </div>
  );
}
