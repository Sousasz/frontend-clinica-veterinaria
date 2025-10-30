"use client";

import Title from "@/components/ui/title";
import EditUser from "@/modals/edit-user";
import EditPet from "@/modals/edit-pet";
import ActionButton from "@/components/shared/action-button";
import UserConsults from "@/app/user/user-consults";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/auth-context";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

export default function Users() {
  const router = useRouter();

  const { logout } = useAuth();

  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const handleConfirmLogout = () => {
    setIsLogoutModalOpen(false);
    handleLogout();
  };

  return (
    <section className="w-full h-full font-poppins">
      <div className="flex flex-col max-w-screen mx-14 my-10 gap-14">
        <div className="flex flex-col gap-10">
          <Title>Editar informações</Title>

          <div className="flex flex-col gap-8 w-fit max-[600px]:items-center max-[600px]:w-full">
            <EditUser />
            <EditPet />

            <ActionButton>
              <span>Excluir conta</span>
            </ActionButton>

            <Dialog
              open={isLogoutModalOpen}
              onOpenChange={setIsLogoutModalOpen}
            >
              <DialogTrigger asChild>
                <ActionButton onClick={() => setIsLogoutModalOpen(true)}>
                  <span>Sair da conta</span>
                </ActionButton>
              </DialogTrigger>
              <DialogContent className="shadow-default bg-green-light bg-[url('/background-image.webp')] bg-cover bg-center bg-no-repeat rounded-4xl">
                <div className="backdrop-blur-md bg-white/25 shadow-2xl p-10 rounded-4xl flex flex-col gap-5">
                  <DialogHeader>
                    <DialogTitle className="text-center text-2xl font-poppins font-light">
                      Confirmar Logout
                    </DialogTitle>
                  </DialogHeader>
                  <p className="text-center">
                    Tem certeza de que deseja sair da conta?
                  </p>
                  <DialogFooter className="flex gap-4 justify-center">
                    <ActionButton onClick={() => setIsLogoutModalOpen(false)}>
                      <span>Não</span>
                    </ActionButton>
                    <ActionButton onClick={handleConfirmLogout}>
                      <span>Sim</span>
                    </ActionButton>
                  </DialogFooter>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="flex flex-col gap-2">
            <Title className="py-5">Suas consultas</Title>
            <UserConsults />
          </div>
        </div>
      </div>
    </section>
  );
}
