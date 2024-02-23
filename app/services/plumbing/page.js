import spanner from "@/public/spanner.webp";
import Image from "next/image";
import { PlumbServices } from "./cardData";
import ServiceCard from "@/components/ServiceCard";

export const metadata = {
  title: "Plumbing Service",
  description: "Mark J Ahern plumbing service",
};

const Plumbing = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative w-full h-full overflow-hidden">
        <div className="h-[100vh]">
          <img src={`/front.webp`} alt="plumbing site" />
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center backdrop-filter backdrop-blur-sm bg-gray-900 bg-opacity-40 z-20
"
        >
          <h1 className="my-12 text-5xl font-semibold flex p-2 text-gray-100 ">
            <Image
              className="mr-4 max-md:hidden"
              src={spanner}
              width={50}
              alt="spanner image"
            />
            Plumbing Services
          </h1>
          <div className="flex flex-col px-60">
            <ServiceCard data={PlumbServices} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plumbing;
