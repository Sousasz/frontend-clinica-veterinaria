import medicineImage from "../../public/medicine.webp"
import clinicalConsult from "../../public/clinical-consultation.webp"
import injectableMedicine from "../../public/injectable-medicine.webp"
import preventiveConsult from "../../public/preventive-consultation.webp"
import vaccinationImage from "../../public/vaccination.webp"
import { StaticImageData } from "next/image"


type CarouselProps = {
  imgUrl: StaticImageData,
  type: string
}[]

export const carousel: CarouselProps = [
  {
    imgUrl: medicineImage,
    type: "Medicação"
  },
  {
    imgUrl: clinicalConsult,
    type: "Consulta Clínica"
  },
  {
    imgUrl: injectableMedicine,
    type: "Medicação Injetável"
  },
  {
    imgUrl: preventiveConsult,
    type: "Consulta Preventiva"
  },
  {
    imgUrl: vaccinationImage,
    type: "Vacinação"
  },
]