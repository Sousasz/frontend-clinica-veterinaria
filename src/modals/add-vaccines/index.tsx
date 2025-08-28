import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import Touchable from "@/components/ui/touchable";
import AddVaccinesForm from "./add-vaccines-form";
import { FormEvent } from "react";

type VacineType = "for-dogs" | "for-cats";

type AddVaccinesModalProps = {
  addVacine: (e: FormEvent) => void;
  setVacineName: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  vacineType: string;
  setVacineType: React.Dispatch<React.SetStateAction<VacineType>>;
};

export default function AddVaccinesModal({
  addVacine,
  setVacineName,
  setDescription,
  vacineType,
  setVacineType,
}: AddVaccinesModalProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <Touchable>Adicionar vacina</Touchable>
      </DialogTrigger>

      <DialogContent className="shadow-default bg-green-light bg-[url('/public/background-image.svg')] bg-cover bg-center bg-no-repeat rounded-4xl font-poppins">
        <div className="backdrop-blur-md bg-white/25 shadow-2xl p-10 rounded-4xl flex flex-col gap-5 max-h-[80vh] overflow-y-scroll scrollbar-hide">
          <AddVaccinesForm
            addVaccine={addVacine}
            vaccineType={vacineType}
            setVaccineName={setVacineName}
            setDescription={setDescription}
            setVaccineType={setVacineType}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}