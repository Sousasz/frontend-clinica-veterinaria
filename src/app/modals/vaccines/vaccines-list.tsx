export default function VaccinesList() {
  return (
    <div className="flex flex-col gap-12">
      <ul className="flex flex-col gap-0.5">
        <h4 className="font-bold text-2xl">Para cães:</h4>
        <div className="flex flex-col gap-1 mx-4">
          <div className="flex flex-col">
            <li className="underline list-disc text-xl">Ivermectina</li>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod ea
              sit voluptatem sequi a vel consequuntur aliquam! Et harum
              blanditiis aspernatur facere dignissimos officia vero delectus.
              Eveniet voluptatibus provident, illo quos soluta, mollitia
              inventore atque dicta impedit aut eligendi molestias explicabo,
              nemo corrupti praesentium sequi enim architecto maiores natus
              earum!
            </p>
          </div>
        </div>
      </ul>

      <ul className="flex flex-col  ">
        <h4 className="font-bold text-2xl">Para gatos:</h4>
        <div className="flex flex-col gap-1 mx-4">
          <div>
            <li className="underline list-disc text-xl">Ivermectina</li>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
              qui assumenda sint mollitia illum eveniet placeat aperiam
              incidunt, quis commodi quisquam odio iste beatae obcaecati
              excepturi vitae? Porro consequuntur doloribus reiciendis cum esse
              vel id fugiat. Enim iste id vitae, labore laboriosam nostrum totam
              non eos corporis error repellat dolorem.
            </p>
          </div>
        </div>
      </ul>
    </div>
  );
}
