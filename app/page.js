import cambridgeImg from "@/public/cambridge.webp";

import Image from "next/image";
import Map from "@/components/Map";
import { EmailIcon } from "@/components/Icons";
import { Button } from "@nextui-org/react";

export const metadata = {
  title: "Home",
  description: "Mark J Ahern Home",
};

const Home = () => {
  return (
    <>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <div className="h-[60vh] w-full">
        <div className="h-[60vh] overflow-hidden">
          <Image
            src={cambridgeImg}
            width={2000}
            height={1601}
            style={{
              objectFit: "cover",
              objectPosition: "50% -200px",
              minWidth: "200px",
              maxHeight: "80vh",
              minHeight: "80vh",
            }}
            alt="cambridge university"
            priority
          />
        </div>
      </div>
      <div className="flex justify-center flex-col items-center -mt-32 max-sm:-mt-96 antialiased">
        <div className="flex flex-col items-center shadow-2xl rounded-3xl opacity-95 bg-gradient-to-l from-yellow-50 to-blue-100 sm:w-3/4 max-sm:mx-6 p-3">
          <h1 className="text-3xl text-center sm:text-5xl font-bold p-4 z-50 place-self-center bg-gradient-to-r md:text-center from-blue-700 to-red-500 text-transparent bg-clip-text">
            Professional History of{" "}
            <span className="text-6xl max-sm:text-4xl tracking-tighter">
              37
            </span>{" "}
            Years
          </h1>
          <p className="text-center sm:text-xl md:px-20 py-4 px-4 font-medium font-sans italic">
            Mark J. Ahern Inc. has been proudly serving Greater Boston since
            1986, offering a wide range of plumbing, heating, and mechanical
            contracting services with a strong focus on client satisfaction.
          </p>
        </div>
      </div>
      <div className="p-4 mt-48 flex flex-col justify-center items-center gap-4 w-full antialiased">
        <h1 className="sm:text-7xl text-5xl p-2 font-bold font-sans tracking-tight text-black  flex justify-center items-center gap-4">
          Contact Us <EmailIcon className="max-sm:w-[48px]" />
        </h1>
        <div className="flex flex-col p-6 gap-3  [&>input]:input-form max-sm:[&>input]:p-2 md:w-1/2 max-md:w-[400px]">
          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="Phone" />
          <textarea placeholder="Description" className="input-form" />

          <Button
            color="primary"
            className="h-16 px-4 rounded-lg font-medium text-2xl mt-6"
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
