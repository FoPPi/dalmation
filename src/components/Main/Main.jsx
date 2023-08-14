import styles from './Main.module.css';
import {MonaBold, MonaMedium, MonaRegular} from "@/fonts";
import Image from "next/image";
import Dogs from '../../../public/Dogs.png';

export default function Main() {
    return (
        <main>
            <section className={styles.start}>
                <div className={styles.videoContainer}>
                    <video autoPlay loop muted className={styles.videoBg}>
                        <source src="/bg.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="flex flex-col justify-center items-center text-center mx-2">
                    <h1 className={`${MonaBold.className} text-5xl md:text-6xl  lg:text-8xl`}>Welcome to the<br/>Dalmatian Ecosystem</h1>
                    <p className={`${MonaRegular.className} lg:text-lg text-[#B4B4B4] mt-8 lg:mt-16 px-4`}>Dalmatian emerges as a catalyst for DeFi&apos;s transformation on the Shibarium<br/>Chain, presenting a suite of features that redefine how users engage with<br/>decentralized finance.</p>
                </div>
                <a href="https://app.dalmatian.exchange/" target="_blank">
                    <button className={`${MonaMedium.className} px-14 py-4 rounded-lg ${styles.but} mt-10 lg:mt-20 hover:scale-110 transition duration-300`}>Launch App</button>
                </a>
            </section>

            <section className="mx-5 md:mx-20 xl:mx-64">
                <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-between rounded-2xl border-2 border-[#1A1A1A] px-16 py-5 xl:py-0">
                    <div className="flex flex-col items-center text-center xl:items-start mb-10 xl:mb-0">
                        <h2 className={`${MonaBold.className} text-3xl md:text-6xl text-[#FD792F]`}>Get ready!</h2>
                        <p className={`${MonaMedium.className} mt-6`}>Dalmatian DEX is live on Shibarium Network</p>
                        <a href="https://t.me/dalmatiandex" target="_blank">
                            <button className={`${MonaMedium.className} bg-[#0D0D0D] text-[#FD792F] hover:bg-[#FF5C00] hover:text-[#0D0D0D] hover:scale-110 rounded-lg mt-8 px-16 py-4 transition duration-300`}>Join Our Community</button>
                        </a>
                    </div>
                    <Image src={Dogs} width={441} height={349} alt="Dogs" unoptimized />
                </div>
            </section>
        </main>
    );
}
