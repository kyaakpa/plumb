import { gasServices } from "./cardData";
import spanner from "@/public/spanner.webp";
import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";

const Gas = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative w-full h-full overflow-hidden">
        <div className="h-[80vh] lg:h-[100vh]">
          <Image
            src={`/front.webp`}
            o
            alt="plumbing site"
            width={1920}
            height={1080}
          />
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center backdrop-filter backdrop-blur-sm bg-gray-900 bg-opacity-40 z-20
"
        >
          <h1 className="my-6 text-2xl md:text-6xl font-semibold flex p-2 text-gray-100 ">
            <Image
              className="mr-4 max-md:hidden"
              src={spanner}
              width={70}
              alt="spanner image"
            />
            Gas Services
          </h1>
          <p className="text-gray-100 max-w-2xl text-justify text-sm md:text-lg mb-6 italic px-4 md:px-6 lg:px-12">
            We operate in the entire Boston area and perform a variety of
            residential, commercial, and industrial services ranging from
            service repairs to full installations. Our services include, but are
            not limited to the following:
          </p>
          <div className="flex flex-col px-4 md:px-12 lg:px-60">
            <ServiceCard data={gasServices} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gas;
