import Image from "next/image";
import ContactUs from "@/components/ContactUs";
import Slider from "@/components/Slider";
import front from "@/public/front.webp";
import { Plus } from "@/components/Icons";

export const metadata = {
  title: "Home",
  description: "Mark J Ahern Home",
};

const Home = () => {
  return (
    <>
      {/* <div className="flex h-[90vh] w-full min-w-full justify-between overflow-hidden">
        <div className="bg-gradient-to-r from-slate-800 to-transparent">
          <h1 className="text-4xl w-[600px] ">70+ years of Plumbing</h1>
        </div>
        <div className="min-w-[640px] max-w-[800px] fixed bg-black right-0 -z-10">
          <div className="bg-white">
            <Image src={front} alt="plumbing system" className="-z-10 " />
          </div>
        </div>
      </div> */}

      <div>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <div className="h-[60vh] w-full">
          <div className="h-[60vh] overflow-hidden">
            <Image
              src={front}
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
        <div className="flex justify-center flex-col items-center sm:-mt-72 2xl:-mt-48 max-sm:-mt-96  antialiased">
          <div className="flex flex-col items-center shadow-2xl rounded-3xl opacity-95 bg-gradient-to-l from-yellow-50 to-blue-100 md:w-2/3 max-md:mx-6 p-3">
            <h1 className=" flex text-3xl text-center md:text-5xl font-bold pb-3 p-3 sm:p-8 place-self-center tracking-tight text-slate-900 md:text-center bg-gradient-to-r bg-clip-text text-transparent from-blue-600 to-neutral-800">
              70
              <span className="-mt-3">+</span> &nbsp;Years Plumbing
            </h1>
            <p className="leading-loose text-center text-lg md:px-12 pb-8 pt-4 px-2 italic text-neutral-950">
              Here at Mark J. Ahern Inc., we have been proudly serving The
              Greater Boston since 1950. We are a small, full-service company,
              which allows a close personal relationship between our clients and
              our experienced technicians. We provide a wide variety of
              plumbing, heating, gas fitting, and mechanical contracting
              services ranging from small service repairs to kitchen and
              bathroom renovations to full-scale commercial installations. Our
              technicians are made up of a team of highly skilled and
              professional plumbers whose sole priority is to tend to your
              individual needs. At Mark J. Ahern Inc., your satisfaction is our
              number one priority!
            </p>
          </div>
        </div>
      </div>

      <ContactUs />
      <Slider />
    </>
  );
};

export default Home;
