import Title from "@/components/ui/title";
import { BookedConsults } from "./consults/consults-booked";
import ButtonDialog from "@/components/ui/button-dialog";

export default function Admin() {
  return (
    <section className="w-full h-full font-poppins">
      <div className="flex flex-col max-w-screen mx-20 my-10 gap-14">
        <div className="flex flex-col gap-10">
          <Title>Setor administrativo</Title>

          <div className="flex flex-col gap-8 w-fit max-[600px]:items-center max-[600px]:w-full">
            {admButtons.map((Button, index) => {
              return (
                <div key={index}>
                  <ButtonDialog Button={Button} />
                </div>
              );
            })}
          </div>

          <BookedConsults />
        </div>
      </div>
    </section>
  );
}