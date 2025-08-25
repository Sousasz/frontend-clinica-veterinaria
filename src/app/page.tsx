import Hero from "@/components/home/hero";
import ServicesCarousel from "@/components/home/carousel";
import MakeBooking from "@/components/home/make-booking";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-36 p-8" id="home">
      <Hero />
      <ServicesCarousel />
      <MakeBooking />
    </main>
  );
}
