import cambridgeImg from "@/public/cambridge.jpg";

import Image from "next/image";

const Home = () => {
  return (
    <div className="h-screen">
      <div className="overflow-hidden h-2/3">
        <div className="h-2/3">
          <Image
            className="w-full"
            src={cambridgeImg}
            width={2000}
            style={{
              objectFit: "cover",
              objectPosition: "50% -200px",
            }}
            alt="cambridge university"
            priority={true}
          />
        </div>
        <div className="text-right w-1/5  flex -mt-12">
          <h1 className="text-white sm:text-5xl pr-6 font-bold bg-black pl-24 py-3 ">
            Professional History of <span className="text-green-500">37</span>{" "}
            Years
          </h1>
        </div>
      </div>
      <div className="flex justify-start -mt-12">
        <p className="w-4/5 bg-neutral-900 text-slate-200 text-lg p-4 pr-6 pl-24 text-justify">
          Here at Mark J. Ahern Inc., we have been proudly serving Boston and
          the surrounding areas since 1986. We are a small, full-service
          company, which allows a close personal relationship between our
          clients and our experienced technicians. We provide a wide variety of
          plumbing, heating, gas fitting, and mechanical contracting services
          ranging from small service repairs to kitchen and bathroom renovations
          to full-scale commercial installations. Our technicians are made up of
          a team of highly skilled and professional plumbers whose sole priority
          is to tend to your individual needs. At Mark J. Ahern Inc., your
          satisfaction is our number one priority!
        </p>
      </div>
    </div>
  );
};

export default Home;
