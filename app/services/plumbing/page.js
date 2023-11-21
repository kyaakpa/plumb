import spanner from "@/public/spanner-dark.webp";
import Image from "next/image";
import { PlumbServices } from "./cardData";
import { Done } from "@/components/Icons";

export const metadata = {
  title: "Plumbing Service",
  description: "Mark J Ahern plumbing service",
};

const Plumbing = () => {
  return (
    <div className="max-md:mx-8 lg:mx-20 xl:mx-48 2xl:mx-64 flex flex-col justify-center items-center mb-32">
      <h1 className="my-12 text-5xl font-semibold flex p-2 text-neutral-800">
        <Image
          className="mr-4 max-md:hidden"
          src={spanner}
          width={50}
          alt="spanner image"
        />
        Plumbing Services
      </h1>
      <div className="flex gap-6 max-sm:gap-14 justify-center flex-wrap max-md:flex-col -z-10">
        {PlumbServices.map((data, index) => {
          return (
            <div
              key={index}
              className={`relative p-0 rounded-3xl`}
              style={{ flexBasis: "calc(50% - 2rem)" }}
            >
              <div className="overflow-hidden h-[50vh] min-w-[400px]">
                <Image
                  src={data.picture}
                  width={1000}
                  height={64}
                  alt={data.altText}
                  className="-z-20 rounded-t-2xl"
                />
              </div>
              <div
                className={`rounded-b-2xl relative bottom-20 p-8 opacity-90 [&>*]:opacity-100 ${data.color}`}
              >
                <h4 className={`font-bold text-xl ${data.headingColor}`}>
                  {data.title}
                </h4>
                <ul className="pt-2 font-medium text-lg">
                  {data.content.map((item, itemIndex) => {
                    return (
                      <li key={itemIndex} className="flex gap-2 py-2">
                        <Done />
                        <span className="w-full">{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plumbing;
