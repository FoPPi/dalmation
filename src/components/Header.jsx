'use client';
import Image from "next/image";
import { Icon } from '@iconify/react';
import Logo from '../../public/Logo.svg';
import {MonaSemiBold} from "@/fonts";

export default function Header() {
    return (
        <header className="flex  items-center bg-black py-5 px-28 flex-col md:flex-row md:justify-between">
            <div className="flex flex-row items-center space-x-2">
                <Image src={Logo} alt="Logo" height={35} width={40}/>
                <h3 className={`${MonaSemiBold.className} text-lg`}>Dalmation</h3>
            </div>
            <div className="flex flex-row mt-5 md:mt-0 space-x-5 items-center text-[#6C6C6C]">
                <a href="https://twitter.com/DalmatianDex" target="_blank">
                    <Icon icon="fa6-brands:x-twitter" height={26} width={26} className="hover:text-white transition duration-300 cursor-pointer" />
                </a>
                <a href="https://t.me/dalmatiandex" target="_blank">
                    <Icon icon="bxl:telegram" height={26} width={26} className="hover:text-white transition duration-300 cursor-pointer" />
                </a>
                <a href="https://medium.com/@Dalmatian" target="_blank">
                    <Icon icon="formkit:medium" height={26} width={26} className="hover:text-white transition duration-300 cursor-pointer" />
                </a>
                <a href="https://docs.dalmatian.exchange/" target="_blank">
                    <Icon icon="simple-icons:gitbook" height={26} width={26} className="hover:text-white transition duration-300 cursor-pointer" />
                </a>
            </div>
        </header>
    )
}