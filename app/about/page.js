import Image from "next/image";
import FamilyPicture from "@/public/markfamily.webp";

export const metadata = {
  title: "About us",
  description: "Mark J Ahern about us",
};

const About = () => {
  return (
    <>
      <div className="relative w-full lg:h-[50vh] max-lg:h-[50vh]">
        <div className="bg-gradient-to-r from-blue-800 to-transparent lg:h-[50vh] max-lg:h-[50vh]">
          <Image
            src={"/about.avif"}
            fill
            alt="plumbing tools"
            className="opacity-20 object-cover -z-10"
          />
          <div className="lg:w-2/3 lg:h-[50vh] max-lg:h-[50vh] text-5xl font-bold flex max-lg:flex-col justify-between items-center mx-auto">
            <h1 className="md:text-blue-50 max-lg:pt-20 opacity-100 tracking-tight">
              About Us
            </h1>
            <div className="self-end max-lg:self-center overflow-hidden">
              <Image
                src={FamilyPicture}
                width={2738}
                height={3651}
                alt="plumbing tools"
                className="w-[600px] opacity-100 sm:w-[300px] md:min-w-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-14 gap-12 text-center pb-12">
        <div className="sm:w-2/3 max-sm:p-4 italic">
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
