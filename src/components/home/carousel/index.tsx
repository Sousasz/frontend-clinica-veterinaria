import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CarouselItemContent from "./carousel-item-content";
import { carousel } from "@/consts/carousel";  
import Title from "@/components/ui/title";

export default function ServicesCarousel() {
  return (
    <section className="flex flex-col items-center gap-10" id="services">
      <div>
        <Title>Nossos serviços</Title>
  

      <Carousel >
        <CarouselContent>
          {carousel.map((service, index) => {
            return (
              <CarouselItem
                className="basis-1/3 max-w-[90%] max-[415px]:w-[5rem]"
                key={index}
              >
                <CarouselItemContent service={service} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </section>
  );
}