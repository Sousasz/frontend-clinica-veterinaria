import Title from "@/components/ui/title";
import SignUpPetForm from "./signup-pet-form";

export default function SignUpPet() {
  return (
    <div className="w-screen h-screen bg-green-light shadow-default bg-[url('/public/background-image.svg')] bg-cover bg-center bg-no-repeat px-30 py-5 font-poppins">
      <div className="h-full backdrop-blur-md bg-white/25 shadow-2xl p-10 rounded-4xl flex flex-col items-center gap-5 overflow-y-scroll scrollbar-hide">
        <Title>Seu Animal</Title>
        <SignUpPetForm />
      </div>
    </div>
  );
}