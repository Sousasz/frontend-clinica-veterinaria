import areasImage from "../../../../public/areas.jpg"
import Title from "@/components/ui/title";
import RegionsToSevice from "../regions/regions-to-service";
import Image from "next/image";

export default function Regions() {
  return (
    <section className="flex flex-col items-center gap-10" id="areas">
      <Title>Áreas atendidas</Title>
      <Image src={areasImage} alt="Áreas de atendimento da clínica veterinária" />
      <RegionsToSevice />
    </section>
  );
}