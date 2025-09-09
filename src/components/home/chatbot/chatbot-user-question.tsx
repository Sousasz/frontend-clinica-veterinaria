import avatarImage from "../../../../public/avatar.webp";
import Image from "next/image";

type ChatBotUserQuestionProps = {
  children: React.ReactNode;
};

export default function ChatBotUserQuestion({ children }: ChatBotUserQuestionProps) {
  return (
    <div className="flex flex-row-reverse gap-3 items-end">
      <Image className="size-10" src={avatarImage} alt="Foto do usuário" />

      <div className="max-w-[80%] max-h-full bg-green-light border rounded-t-xl rounded-bl-xl p-3 text-start shadow-md">
        <p className=" break-words overflow-hidden">{children}</p>
      </div>
    </div>
  );
}