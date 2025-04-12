/*NEXT JS IMPORTS */
import Image, { StaticImageData } from "next/image";
import React from "react";

/*IMAGES*/
import Dummy1 from "/public/images/auth/dummy1.webp";
import Dummy2 from "/public/images/auth/dummy2.webp";
import Dummy3 from "/public/images/auth/dummy3.webp";
import Dummy4 from "/public/images/auth/dummy4.webp";
import Dummy5 from "/public/images/auth/dummy5.webp";
import Dummy6 from "/public/images/auth/dummy6.webp";
import Dummy7 from "/public/images/auth/dummy7.webp";
import Dummy8 from "/public/images/auth/dummy8.webp";
import Dummy9 from "/public/images/auth/dummy9.webp";
import Dummy10 from "/public/images/auth/dummy10.webp";

/* TYPES */
type infoBoxProps = {
  number: string;
  color: string;
  description: string;
};

type statsProps = {
  stats: infoBoxProps[];
};

const DummyImages = ({ stats }: statsProps) => {
  const ImageBox = ({ image }: { image: StaticImageData }) => {
    return (
      <div className="h-[40vh] w-full relative rounded-lg">
        <Image
          src={image}
          alt="auth"
          fill
          className="object-cover rounded-lg"
        />
        <div className="absolute inset-0 h-full w-full bg-black bg-opacity-40 rounded-lg" />
      </div>
    );
  };

  const InfoBox = (props: infoBoxProps) => {
    return (
      <div
        className={`flex flex-col justify-end p-5 w-full ${props?.color} h-[40vh] rounded-lg`}
      >
        <h1 className="font-primary text-5xl text-white font-bold ">
          {props?.number}
        </h1>
        <p className="font-secondary text-greyText  font-normal text-white/80">
          {props?.description}
        </p>
      </div>
    );
  };
  return (
    <div className="grid grid-cols-4 gap-2 w-full h-screen overflow-hidden bg-black/90">
      <div className="col-span-1">
        <div className="flex flex-col gap-2 -ml-10 -my-20 h-full">
          <ImageBox image={Dummy5} />
          <ImageBox image={Dummy2} />
          <ImageBox image={Dummy3} />
        </div>
      </div>

      <div className="col-span-1">
        <div className="flex flex-col gap-2 -mb-10 pt-2">
          <InfoBox {...stats[0]} />
          <ImageBox image={Dummy4} />
          <ImageBox image={Dummy1} />
        </div>
      </div>

      <div className="col-span-1">
        <div className="flex flex-col gap-2 -mt-20 pt-2">
          <ImageBox image={Dummy10} />
          <InfoBox {...stats[1]} />
          <ImageBox image={Dummy6} />
        </div>
      </div>

      <div className="col-span-1">
        <div className="flex flex-col gap-2 -my-20 -mr-10 pt-2">
          <ImageBox image={Dummy7} />
          <ImageBox image={Dummy8} />
          <ImageBox image={Dummy9} />
        </div>
      </div>
    </div>
  );
};

export default DummyImages;
