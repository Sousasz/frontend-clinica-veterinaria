'use client'

import { CallToAction } from "./call-to-action";
import { AlignJustify } from "lucide-react";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import { UserSignIn } from "@/app/modals/user-signin";
import Link from "next/link";

import { useState } from "react";

export default function Header() {
  
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function onClickToOpenTheMenu() {
    setIsOpenMenu(!isOpenMenu);
  }

  return (
    <>
      <header className="flex justify-between items-center py-5 px-10 ">
        <div className="flex justify-center items-center gap-10">
          <Image src={logo} alt="Logo da clínica - Cachorro" />
          <nav className="hidden lg:block">
            <ul className="flex gap-10">
              <li>
                <a href="#home">Home</a>
              </li>

              <li>
                <a href="#services">Nossos serviços</a>
              </li>

              <li>
                <a href="#booking">Agendamento</a>
              </li>

              <li>
                <a href="#rating">Nossas avaliações</a>
              </li>

              <li>
                <a href="#areas">Áreas atendidas</a>
              </li>

              <li>
                <Link href="/adm">Admin</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col">
          <div className="flex gap-10">
            <UserSignIn />

            <button onClick={onClickToOpenTheMenu} className="cursor-pointer">
              <AlignJustify className="size-10 block lg:hidden" />
            </button>
          </div>

          {isOpenMenu ? (
            <>
              <div className="w-full flex justify-end">
                <ul className="bg-white border border-b-black border-l-black border-white p-3 flex flex-col gap-5 bottom-0 top-[6.5rem] right-0 absolute z-1 h-80">
                  <li>
                    <a href="#home">Home</a>
                  </li>

                  <li>
                    <a href="#services">Nossos serviços</a>
                  </li>

                  <li>
                    <a href="#booking">Agendamento</a>
                  </li>

                  <li>
                    <a href="#rating">Nossas avaliações</a>
                  </li>

                  <li>
                    <a href="#areas">Áreas atendidas</a>
                  </li>

                  <li>
                    <Link href="/adm">Admin</Link>
                  </li>
                </ul>
              </div>
            </>
          ) : null}
        </div>
      </header>

      <CallToAction />
    </>
  );
}
