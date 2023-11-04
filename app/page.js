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
      <div className="flex justify-center flex-col items-center -mt-48 max-sm:-mt-96 antialiased">
        <div className="flex flex-col items-center shadow-2xl rounded-3xl opacity-95 bg-gradient-to-l from-yellow-50 to-blue-100 md:w-3/4 max-md:mx-6 p-3">
          <h1 className="text-3xl text-center md:text-5xl font-bold pb-0 p-4 z-50 place-self-center bg-gradient-to-r md:text-center from-blue-700 to-red-500 text-transparent bg-clip-text">
            Professional History of{" "}
            <span className="text-6xl max-md:text-4xl tracking-tighter">
              37
            </span>{" "}
            Years
          </h1>
          <p className="text-center md:text-xl md:px-12 pb-8 pt-4 px-2 font-medium italic">
            Here at Mark J. Ahern Inc., we have been proudly serving The Greater
            Boston since 1986. We are a small, full-service company, which
            allows a close personal relationship between our clients and our
            experienced technicians. We provide a wide variety of plumbing,
            heating, gas fitting, and mechanical contracting services ranging
            from small service repairs to kitchen and bathroom renovations to
            full-scale commercial installations. Our technicians are made up of
            a team of highly skilled and professional plumbers whose sole
            priority is to tend to your individual needs. At Mark J. Ahern Inc.,
            your satisfaction is our number one priority!
          </p>
        </div>
      </div>
      <div className="p-4 mt-48 flex flex-col justify-center items-center gap-4 w-full antialiased max-md:mb-32">
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
