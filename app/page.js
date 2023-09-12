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
            height={819}
            alt="cambridge university"
            priority={true}
          />
        </div>
        <div className="text-right w-44 flex h-fit">
          <h1 className="text-white text-4xl pr-4 font-bold bg-black pl-12 py-3">
            Professional History of 37 Years
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
