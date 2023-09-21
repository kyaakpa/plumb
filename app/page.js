import cambridgeImg from "@/public/cambridge.webp";

import Image from "next/image";

export const metadata = {
  title: "Home",
  description: "Mark J Ahern Home",
};

const Home = () => {
  return (
    <>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <div className="h-screen w-full">
        <div className="h-2/3 overflow-hidden">
          <Image
            src={cambridgeImg}
            width={2000}
            height={1601}
            style={{
              objectFit: "cover",
              objectPosition: "50% -200px",
              minHeight: "90vh",
            }}
            alt="cambridge university"
            priority
          />
        </div>
        <div className=" text-right w-1/5 flex -mt-96">
          <h1 className="text-white text-3xl sm:text-5xl pr-6 font-bold bg-black md:pl-24 pl-8 py-3 z-10">
            Professional History of{" "}
            <span className="text-green-500 sm:text-7xl text-5xl">37</span>{" "}
            Years
          </h1>
        </div>
        <div className="flex justify-start mt-8 z-2">
          <p className="md:w-4/5 w-[95%] bg-neutral-900 text-slate-200 sm:text-lg p-4 sm:pr-6 md:pl-24 pl-8 md:text-justify z-40">
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
        <div className="text-2xl ">Our Partners:</div>
      </div>
    </>
  );
};

export default Home;
