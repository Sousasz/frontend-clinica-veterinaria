"use client";

import ChatBotIcon from "./chatbot-icon";
import ChatBotHeader from "./chatbot-header";
import ChatBotContent from "./chatbot-content";
import ChatBotResponse from "./chatbot-response";
import ChatBotUserQuestion from "./chatbot-user-question";
import ChatBotInput from "./chatbot-input";
import { useState } from "react";

type Message = {
  role: "user" | "bot";
  content: string;
};

export default function Chatbot() {
  const [isOpenChat, setIsOpenChat] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage(e?: React.FormEvent) {
    e?.preventDefault();
    if (!input.trim()) return;

    const newMessages: Message[] = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      setMessages([...newMessages, { role: "bot", content: data.reply }]);
    } catch (error) {
      setMessages([
        ...newMessages,
        { role: "bot", content: "❌ Ocorreu um erro ao processar sua mensagem." },
      ]);
    } finally {
      setLoading(false);
    }
  }
  

  function onClickIconToChatBot() {
    setIsOpenChat(!isOpenChat);
  }

  function onCloseChatBot() {
    setIsOpenChat(false);
  }

  return (
    <>
      {isOpenChat ? (
        <section className="flex flex-col fixed bottom-0 top-auto right-0 border border-gray-600 max-[680px]:right-auto">
          <div className="bg-white w-[40rem] h-[30rem] max-[680px]:w-[30rem] max-[500px]:w-[25rem] max-[425px]:w-[22rem]">
            <ChatBotHeader onCloseChatBot={onCloseChatBot} />

            <ChatBotContent>
              <div className="flex flex-col gap-2">
                {messages.map((msg, index) =>
                  msg.role === "user" ? (
                    <ChatBotUserQuestion key={index}>
                      {msg.content}
                    </ChatBotUserQuestion>
                  ) : (
                    <ChatBotResponse key={index}>{msg.content}</ChatBotResponse>
                  )
                )}

                {loading && (
                  <ChatBotResponse>Digitando...</ChatBotResponse>
                )}
              </div>
            </ChatBotContent>

            <ChatBotInput
              value={input}
              setValue={setInput}
              onSend={sendMessage}
            />
          </div>
        </section>
      ) : (
        <ChatBotIcon onClickIconToChatBot={onClickIconToChatBot} />
      )}
    </>
  );
}
