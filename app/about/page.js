import Image from "next/image";

export const metadata = {
  title: "About us",
  description: "Mark J Ahern about us",
};

const About = () => {
  return (
    <>
      <div className="relative w-full">
        {/* Use a div with position relative to control the image positioning */}
        <div className="relative bg-gradient-to-r from-blue-800 to-transparent h-[50vh]">
          <Image
            src={"/about.avif"}
            layout="fill" // This will make the image cover the container
            objectFit="cover" // This will make sure the image covers the container without distorting
            alt="plumbing tools"
            className="opacity-20"
          />
          <h1 className="relative top-[100px]  text-white sm:p-24 text-5xl font-bold">
            About Us
          </h1>
        </div>
      </div>
      <div className="sm:p-24">
        Mark J. Ahern, Inc. has established a significant presence in the entire
        Boston area, offering a comprehensive range of services that cater to
        the diverse needs of the residential, commercial, and industrial
        sectors. The company&aposs operations encompass a wide spectrum of
        services, ranging from service repairs to full installations, and this
        versatility has contributed to its success and reputation in the region.
      </div>

      <div className="flex flex-col items-center justify-center gap-8 p-12">
        <div className="rounded-full bg-gradient-to-bl from-neutral-600 to-black p-80 w-fit"></div>
        <div>***picture goes up in the black gradient circle ^ ***</div>
        <p className="italic">
          Fugiat anim quis eiusmod aliqua fugiat anim minim tempor. Amet nisi
          commodo ut nisi duis aliqua aute et ex id. Aute dolor Lorem dolor
          aliquip dolor anim culpa ad sint aute reprehenderit magna consequat.
        </p>
      </div>
    </>
  );
};

export default About;
