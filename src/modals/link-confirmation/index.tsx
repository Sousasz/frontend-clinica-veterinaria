import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import Touchable from "@/components/ui/touchable";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function LinkConfirmationModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Touchable>Enviar telefone</Touchable>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <VisuallyHidden></VisuallyHidden>
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2 text-center">
          <span className="font-semibold text-xl">Enviado com sucesso!</span>
          <p>Acesse o seu dispositivo para verificar o link de redefinição</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
