import medicineImage from "../../public/medicine.jpg"
import clinicalConsult from "../../public/clinical-consultation.jpg"
import injectableMedicine from "../../public/injectable-medicine.jpg"
import preventiveConsult from "../../public/preventive-consultation.jpg"
import vaccinationImage from "../../public/vaccination.jpg"
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