"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";
import Link from "next/link";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Rent a car -- quickly and easily</h1>
        <p className="hero__subtitle">
          Your car rental experience with our effertless booking process
        </p>
        <Link href={'#cars'}>
          <CustomButton
            title="Explore Cars"
            containerStyles="bg-slate-800 text-white rounded-xl shadow-xl mt-10"
            handleClick={handleScroll}
          />
        </Link>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.webp" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
