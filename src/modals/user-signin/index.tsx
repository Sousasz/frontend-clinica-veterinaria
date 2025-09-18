import avatarImage from "../../../public/images/avatar.webp";
import SignInUserForm from "./signin-user-form";
import Image from "next/image";
import Touchable from "@/components/ui/touchable";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function UserSignIn() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <button className="cursor-pointer">
            <Image
              className="size-10"
              src={avatarImage}
              alt="Imagem do usuário"
            />
          </button>
        </DialogTrigger>

        <DialogContent className="shadow-default bg-green-light bg-[url('/background-image.webp')] bg-cover bg-center bg-no-repeat rounded-4xl">
          <div className="backdrop-blur-md bg-white/25 shadow-2xl p-10 rounded-4xl flex flex-col gap-5 overflow-y-auto scrollbar-hide">
            <DialogHeader className="max-w-full flex items-center">
              <DialogTitle className="text-center text-3xl font-poppins font-light p-1 w-80">
                Login
              </DialogTitle>
            </DialogHeader>

            <SignInUserForm />

            <Touchable>Entrar</Touchable>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}
