import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import MedicinesSecondList from "./medicines-second-list";

export default function NoInjectablesMedicineModal() {
  return (
    <DialogContent className="sm:max-w-[90%] shadow-default h-[90%] bg-green-light font-poppins bg-[url('/icons/background-image.webp')] bg-cover bg-center bg-no-repeat">
      <div className="backdrop-blur-md bg-white/25 shadow-2xl p-10 rounded-lg flex flex-col gap-10 overflow-y-auto scrollbar-hide">
        <DialogHeader className="max-w-full flex items-center">
          <DialogTitle>MEDICAMENTOS</DialogTitle>
        </DialogHeader>

        <MedicinesSecondList />
      </div>
    </DialogContent>
  );
}
