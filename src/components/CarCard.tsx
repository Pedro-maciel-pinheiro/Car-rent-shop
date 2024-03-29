"use client";
import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import CustomButton from "@/components/CustomButton";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import CarDetails from "@/components/CarDetails";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const [isOpen, setIsOpen] = useState(false);

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card gruop" >
      <div className="car-card__content">
        <h2 className="car-card__content-title" >
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-semibold">
        <span
          className="self-start text-[14px]
        font-semibold"
        >
          $
        </span>
        {carRent}
        <span
          className="self-end text-[14px]
        font-semibold"
        >
          /day
        </span>
      </p>
      <div className="relative w-96 h-40 my-3 object-contain" >
        <Image src={generateCarImageUrl(car,'1')} fill priority className="object-contain" alt="" />
      </div>
      <div className="relative flex w-full mt-2 ">
        <div
          className="flex  w-full group-hover:translate-x-2
           justify-between text-gray  "
        >
          <div
            className="flex flex-col justify-center 
          items-center gap-2"
          >
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="gas" />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>
      </div>

      <div className="w-full" >
        <CustomButton
          title="View more"
          containerStyles="w-full py-[16px]
            rounded-xl bg-slate-800 text-white mt-4"
          handleClick={() => setIsOpen(true)}
        />
      </div>
      <CarDetails isOpen={isOpen} 
      closeModal={() => setIsOpen(false)} car={car} />
    </div>
  );
};

export default CarCard;
