"use client";

import ChatBotIcon from "./chatbot-icon";
import ChatBotHeader from "./chatbot-header";
import ChatBotContent from "./chatbot-content";
import ChatBotResponse from "./chatbot-response";
import ChatBotUserQuestion from "./chatbot-user-question";
import ChatBotInput from "./chatbot-input";
import { useState, FormEvent } from "react";

export default function Chatbot() {
  const [isOpenChat, setIsOpenChat] = useState(false);
  const [message, setMessage] = useState<string[] | undefined>([]);

  function onClickIconToChatBot() {
    setIsOpenChat(!isOpenChat);
  }

  function onCloseChatBot() {
    setIsOpenChat(false);
  }

  function addQuestion(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = new FormData(e.currentTarget);
    const value = target.get("question")?.toString();

    setMessage([...message, value]);
    e.currentTarget.reset()
  }

  return (
    <>
      {isOpenChat ? (
        <section className="flex flex-col fixed bottom-0 top-auto right-0 border border-gray-600 max-[680px]:right-auto">
          <div className="bg-white w-[40rem] h-[30rem] max-[680px]:w-[30rem] max-[500px]:w-[25rem] max-[425px]:w-[22rem]">
            <ChatBotHeader onCloseChatBot={onCloseChatBot} />

            <ChatBotContent>
              <ChatBotResponse>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente repudiandae ipsa quos dolorem, commodi, harum ducimus
                mollitia, eos illum eum nulla fugiat ex quam dolore sit. Et
                reprehenderit beatae eveniet qui aut vero cum minima, ipsa
                repudiandae iusto delectus aliquam optio possimus expedita,
                obcaecati molestias cupiditate deserunt quidem quam quod.
              </ChatBotResponse>

              <div className="flex flex-col gap-2">
                {message?.map((text, index) => {
                  return (
                    <ChatBotUserQuestion key={index}>{text}</ChatBotUserQuestion>
                  );
                })}
              </div>
            </ChatBotContent>

            <ChatBotInput addQuestion={addQuestion} />
          </div>
        </section>
      ) : (
        <ChatBotIcon onClickIconToChatBot={onClickIconToChatBot} />
      )}
    </>
  );
}
