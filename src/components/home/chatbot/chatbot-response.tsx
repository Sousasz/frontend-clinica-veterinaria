import pingoImage from "../../../../public/pingo.webp";
import Image from "next/image";

type ChatBotResponseProps = {
  children: React.ReactNode;
};

export default function ChatBotResponse({ children }: ChatBotResponseProps) {
  return (
    <div className="flex gap-3 items-end">
      <Image className="size-10" src={pingoImage} alt="Imagem do mascote" />

      <div className="max-w-[80%] bg-white border border-green-light rounded-t-xl rounded-br-xl p-3 text-start shadow-md">
        <p>{children}</p>
      </div>
    </div>
  );
}