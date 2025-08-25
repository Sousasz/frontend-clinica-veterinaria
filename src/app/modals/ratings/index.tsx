import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import avatarImage from "../../../../public/avatar.jpg";
import Title from "@/components/ui/title";
import { ratings } from "@/consts/ratings";
import RatingStar from "@/components/shared/rating-star";
import Image from "next/image";

export default function RatingsModal() {
  return (
    <DialogContent className="sm:max-w-[90%] shadow-default h-[90%] bg-green-light">
      <div className="backdrop-blur-md bg-white/25 shadow-2xl p-10 rounded-lg flex flex-col gap-10 overflow-auto">
        <DialogHeader className="max-w-full flex items-center">
          <DialogTitle>
            <Title>Nossas avaliações</Title>
          </DialogTitle>
        </DialogHeader>

        <div className="w-full h-full flex justify-center">
          <div className="gap-20 grid place-items-center grid-cols-[repeat(auto_fill,_minmax(390px,_1fr))] font-poppins">
            {ratings.map((rating, index) => {
              return (
                <div key={index} className="flex justify-center gap-5">
                  <Image
                    className="h-min w-28 rounded-full"
                    src={avatarImage}
                    alt="Imagem do cliente"
                  />

                  <div className="flex flex-col gap-2">
                    <RatingStar />
                    <p>{rating.comment}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </DialogContent>
  );
}
