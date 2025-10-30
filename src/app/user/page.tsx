"use client";

import Title from "@/components/ui/title";
import EditUser from "@/modals/edit-user";
import EditPet from "@/modals/edit-pet";
import ActionButton from "@/components/shared/action-button";
import UserConsults from "@/app/user/user-consults";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/auth-context"; 

export const metadata = {
  title: "Usuário | Joyce Clínica Veterinária",
};

export default function Users() {
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push("/");
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

            <ActionButton onClick={handleLogout}>
              <span>Sair da conta</span>
            </ActionButton>
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
