import Image from "next/image";
import FamilyPicture from "@/public/markfamily.webp";

export const metadata = {
  title: "About us",
  description: "Mark J Ahern about us",
};

const About = () => {
  return (
    <>
      <div className="relative w-full lg:h-[50vh] max-lg:h-[50vh] overflow-hidden">
        <div className="h-50vh">
          <Image
            src={`/front.webp`}
            className="object-cover"
            alt="plumbing site"
            width={1920}
            height={1080}
          />
          <div className=" backdrop-filter backdrop-blur-sm bg-gray-900 bg-opacity-40 absolute top-0 h-full w-full px-2 md:px-60 lg:h-[50vh] max-lg:h-[50vh] text-5xl font-bold flex max-lg:flex-col justify-between items-center mx-auto">
            <h1 className="text-gray-100 max-lg:pt-20 opacity-100 tracking-tight">
              About Us
            </h1>
            <div className="self-end max-lg:self-center overflow-hidden">
              <Image
                src={FamilyPicture}
                width={2738}
                height={3651}
                alt="plumbing tools"
                className="w-[600px] opacity-100 sm:w-[400px] md:min-w-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-4 md:mt-10 gap-12 text-center pb-4 md:pb-10">
        <div className="sm:w-2/3 max-sm:p-4 italic font-semibold text-sm md:text-lg">
          We are a privately owned and operated company founded in 1986 by Mark
          J. Ahern. Mark began the company when he was 27 years old. With a
          strong history of success, Mark J. Ahern, Inc. continues to grow its
          client base while working with both great people and organizations.
          Mark plans to continue this tradition of success through providing
          quality work at reasonable costs all while maintaining a focus on
          customer satisfaction.
        </div>
      </div>
    </>
  );
};

export default About;
