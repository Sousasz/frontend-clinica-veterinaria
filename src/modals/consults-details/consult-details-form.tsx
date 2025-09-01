import PetDetails from "../edit-pet/pet-details";
import UserDetails from "../edit-user/user-details";
import SubTitle from "@/components/ui/subtitle";
import { CalendarCheck } from "lucide-react";
import { ClockFading } from "lucide-react";

export default function ConsultDetailsForm() {
  return (
    <div className="flex justify-between max-[990px]:flex-col max-[990px]:text-center max-[990px]:items-center gap-10 font-poppins">
      <PetDetails />
      <UserDetails />

      <div>
        <div className="flex flex-col gap-4">
          <SubTitle>Descrição</SubTitle>
          <p className="max-w-[30rem] text-start my-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            sunt odio non accusamus vero esse nam vitae ex repellendus, a minus
            rem voluptates? Exercitationem asperiores, voluptas, laborum quae
            hic nisi labore fuga totam aperiam non facere. Ad maiores sint quod
            quae perferendis soluta?
          </p>
        </div>

        <div className="flex justify-center gap-3 m-5">
          <div className="flex gap-1 items-center">
            <CalendarCheck className="size-8" />
            <span>Data</span>
          </div>

          <div className="flex gap-1 items-center">
            <ClockFading className="size-8" />
            <span>Hora</span>
          </div>
        </div>
      </div>
    </div>
  );
}
