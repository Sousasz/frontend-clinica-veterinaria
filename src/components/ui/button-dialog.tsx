import ActionButton from "../shared/action-button";
import { IconType } from "react-icons/lib";
import { EditMedicinesModal } from "@/modals/edit-medicines";
import RatingsModal from "@/modals/ratings";
import { EditVacinesModal } from "@/modals/edit-vacines";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";

const modalComponent: Record<string, JSX.Element> = {
  Medicamento: <EditMedicinesModal />,
  Vacina: <EditVacinesModal />,
  Avaliação: <RatingsModal />,
};

type ButtonsOfAction = {
  type: string;
  text: string;
  icon: IconType;
};

type ButtonsProps = {
  Button: ButtonsOfAction;
};

export default function ButtonDialog({ Button }: ButtonsProps) {
  const ModalComponent = modalComponent[Button.type] || null;

  return (
    <Dialog>
      <DialogTrigger>
        <ActionButton>
          <span>{Button.text}</span>
          <Button.icon />
        </ActionButton>
      </DialogTrigger>

      {ModalComponent}
    </Dialog>
  );
}