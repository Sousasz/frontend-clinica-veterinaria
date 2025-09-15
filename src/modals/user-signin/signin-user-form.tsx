import MaskedInput from "@/components/shared/masked-input";
import { Input } from "@/components/ui/input";
import { DialogClose } from "@/components/ui/dialog"
import Link from "next/link";

export default function SignInUserForm() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="flex flex-col gap-3 w-[90%]">
        <MaskedInput name="cpf-rg" placeholder="CPF/RG" mask="999.999.999-99" />
        <Input name="password" type="password" placeholder="Senha"  />
      </div>

      <span className="flex flex-col justify-center font-poppins text-sm text-center">
        <Link href="/reset-password" className="font-medium underline">
          Esqueceu a senha?
        </Link>

      <DialogClose>
        <Link href="/signup-user" className="font-medium underline">
          Não tem um login? Cadastre-se
        </Link>
        </DialogClose>
      </span>
    </div>
  );
}
