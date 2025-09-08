import Title from "@/components/ui/title";
import SignUpUserForm from "./signup-user-form";

export default function SignUpUser() {
  return (
    <div className="max-w-full bg-cover bg-center bg-no-repeat px-30 max-[580px]:px-16 max-[500px]:px-8 max-[345px]:px-4  py-5 font-poppins flex flex-col gap-10">
      <Title>Cadastro do cliente</Title>
      <SignUpUserForm />
    </div>
  );
}
