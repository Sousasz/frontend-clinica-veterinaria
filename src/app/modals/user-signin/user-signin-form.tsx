import { Input } from "@/components/ui/input";
import Link from "next/link";

export function UserSignInForm() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="flex flex-col gap-3 w-[90%]">
        <Input name="user" placeholder="Usuário: " />
        <Input name="password" placeholder="Senha: " />
      </div>

      <span className="flex flex-col justify-center font-poppins text-sm text-center">
        <Link href="/" className="font-medium underline">
          Esqueceu a senha?
        </Link>

        <Link href="/cadastrar-usuario" className="font-medium underline">
          Não tem um login? Cadastre-se
        </Link>
      </span>
    </div>
  );
}
