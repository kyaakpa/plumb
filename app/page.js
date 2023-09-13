import cambridgeImg from "@/public/cambridge.webp";

import Image from "next/image";

const Home = () => {
  return (
    <>
      <div className="h-screen w-full">
        <div className="h-2/3 overflow-hidden">
          <Image
            src={cambridgeImg}
            width={2000}
            height={1601}
            style={{
              objectFit: "cover",
              objectPosition: "50% -200px",
              minHeight: "90vh"
            }}
            alt="cambridge university"
            priority={true}
          />
        </div>
        <div className=" text-right w-1/5 flex -mt-64">
          <h1 className="text-white text-3xl sm:text-5xl pr-6 font-bold bg-black pl-24 py-3 z-30">
            Professional History of <span className="text-green-500">37</span>{" "}
            Years
          </h1>
        </div>
        <div className="flex justify-start mt-8 z-2">
          <p className="sm:w-4/5 w-[90%] bg-neutral-900 text-slate-200 sm:text-lg p-4 sm:pr-6 pl-24 text-justify z-40">
            Here at Mark J. Ahern Inc., we have been proudly serving Boston and
            the surrounding areas since 1986. We are a small, full-service
            company, which allows a close personal relationship between our
            clients and our experienced technicians. We provide a wide variety
            of plumbing, heating, gas fitting, and mechanical contracting
            services ranging from small service repairs to kitchen and bathroom
            renovations to full-scale commercial installations. Our technicians
            are made up of a team of highly skilled and professional plumbers
            whose sole priority is to tend to your individual needs. At Mark J.
            Ahern Inc., your satisfaction is our number one priority!
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
