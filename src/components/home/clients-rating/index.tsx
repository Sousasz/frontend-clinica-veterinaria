import avatarImage from "../../../../public/avatar.jpg";
import RatingStar from "@/components/shared/rating-star";
import Touchable from "@/components/ui/touchable";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import RatingsModal from "@/app/modals/ratings";

export default function ClientsRating() {
  return (
    <section className="flex flex-col justify-center gap-5">
      <div className="flex gap-4">
        <Image
          className="h-min w-28 rounded-full"
          src={avatarImage}
          alt="Imagem do cliente"
        />

        <div className="flex flex-col gap-2">
          <RatingStar />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            temporibus beatae quae similique dolor veritatis tempora hic ipsam,
            exercitationem vero, iusto aut sit vitae eligendi consequatur facere
            aliquam quibusdam in vel cupiditate possimus nesciunt expedita at?
            Molestias sunt adipisci, impedit ad nulla ab repudiandae sapiente
            omnis quas hic in fugit!
          </p>
        </div>
      </div>

      <Dialog>
        <form className="flex justify-center">
          <DialogTrigger asChild>
            <Touchable buttonType="secondary">Ver mais avaliações</Touchable>
          </DialogTrigger>

          <RatingsModal />
        </form>
      </Dialog>
    </section>
  );
}
