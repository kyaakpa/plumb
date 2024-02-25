import Image from "next/image";
import { Divider } from "@nextui-org/react";

export const metadata = {
  title: "Home",
  description: "Mark J Ahern Home",
};

const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-2 md:gap-6 ">
        <div className="relative w-full h-full overflow-hidden">
          <div className="h-[100vh]">
            <img
              src={`/front.webp`}
              className="object-cover"
              alt="plumbing site"
            />
          </div>
          <div
            className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center backdrop-filter backdrop-blur-sm bg-gray-900 bg-opacity-40
"
          >
            <div className="flex flex-row gap-4 md:gap-8 p-4 items-center">
              <div className="max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto text-start text-white flex flex-col gap-2 md:gap-8  items-start ">
                <h1 className="text-start text-2xl md:text-4xl lg:text-6xl font-bold mb-4 justify-start">
                  Trusted Plumbing Experts Since 1986
                </h1>
                <p className="text-sm text-justify md:text-base md:leading-relaxed pb-2 md:pb-8 font-semibold">
                  Here at Mark J. Ahern Inc., we have been proudly serving
                  Boston and the surrounding areas since 1986. We are a small,
                  full-service company, which allows a close personal
                  relationship between our clients and our experienced
                  technicians. We provide a wide variety of plumbing, heating,
                  gas fitting, and mechanical contracting services ranging from
                  small service repairs to kitchen and bathroom renovations to
                  full-scale commercial installations. Our technicians are made
                  up of a team of highly skilled and professional plumbers whose
                  sole priority is to tend to your individual needs. At Mark J.
                  Ahern Inc., your satisfaction is our number one priority!
                </p>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 ">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-green-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 3.293a1 1 0 0 1 1.414 1.414l-10 10a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L7 12.586l9.293-9.293a1 1 0 0 1 1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm md:text-base font-semibold ">
                      EPA RRP Certified
                    </p>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-green-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 3.293a1 1 0 0 1 1.414 1.414l-10 10a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L7 12.586l9.293-9.293a1 1 0 0 1 1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm md:text-base font-semibold ">
                      Licensed
                    </p>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-green-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 3.293a1 1 0 0 1 1.414 1.414l-10 10a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L7 12.586l9.293-9.293a1 1 0 0 1 1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm md:text-base font-semibold ">
                      Fully Insured
                    </p>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-green-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 3.293a1 1 0 0 1 1.414 1.414l-10 10a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L7 12.586l9.293-9.293a1 1 0 0 1 1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm md:text-base font-semibold ">
                      Free Estimates
                    </p>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-green-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 3.293a1 1 0 0 1 1.414 1.414l-10 10a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L7 12.586l9.293-9.293a1 1 0 0 1 1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm md:text-base font-semibold ">
                      Family Operated
                    </p>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-green-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 3.293a1 1 0 0 1 1.414 1.414l-10 10a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L7 12.586l9.293-9.293a1 1 0 0 1 1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm md:text-base font-semibold ">
                      MA Master Lic #10318
                    </p>
                  </li>
                </ul>
              </div>
              <div className="hidden lg:flex">
                <img
                  src={"/cambridge.webp"}
                  alt="cambridge"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center  py-2 md:py-6 w-full">
          <div
            className="flex flex-col items-center justify-center gap-2 md:gap-4 px-2 md:px-6"
            id="services-section"
          >
            <h1 className="text-center text-xl md:text-4xl font-bold mb-1 md:mb-2">
              Our Services
            </h1>
            <p className="text-sm md:text-base text-justify mb-2 md:mb-6">
              We operate in the entire Boston area and perform a variety of
              residential, commercial, and industrial services ranging from
              service repairs to full installations. Our services include, but
              are not limited to the following:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 relative">
              <div className="relative cursor-pointer transition-transform transform hover:scale-105">
                <a href="/services/plumbing">
                  <Image
                    src={`/plumbing.jpg`}
                    width={400}
                    height={400}
                    alt="plumbing"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold bg-black bg-opacity-50">
                    Plumbing
                  </div>
                </a>
              </div>
              <div className="relative cursor-pointer transition-transform transform hover:scale-105">
                <a href="/services/heating">
                  <Image
                    src={`/heating.jpg`}
                    width={400}
                    height={400}
                    alt="heating"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold bg-black bg-opacity-50">
                    Heating
                  </div>
                </a>
              </div>
              <div className="relative cursor-pointer transition-transform transform hover:scale-105">
                <a href="/services/gas">
                  <Image src={`/gas.jpg`} width={400} height={400} alt="gas" />
                  <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold bg-black bg-opacity-50">
                    Gas Fitting
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FAFAFA]">
          <div className="flex flex-col items-center justify-center py-2 md:py-6 ">
            <h1 className="text-center text-base md:text-3xl font-bold mb-2 md:mb-4">
              Preferred Plumbing Fixture Manufacturers
            </h1>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8 lg:gap-12 ">
              <div className="w-20 h-20 md:w-40 md:h-40 flex items-center justify-center">
                <Image
                  src={`/american_standard.png`}
                  width={200}
                  height={200}
                  alt="American Standard"
                />
              </div>
              <div className="w-20 h-20 md:w-40 md:h-40 flex items-center justify-center">
                <Image
                  src={`/chicago.png`}
                  width={200}
                  height={200}
                  alt="Chicago Faucets"
                />
              </div>
              <div className="w-20 h-20 md:w-40 md:h-40 flex items-center justify-center">
                <Image
                  src={`/delta.png`}
                  width={200}
                  height={200}
                  alt="Delta"
                />
              </div>
              <div className="w-20 h-20 md:w-40 md:h-40 flex items-center justify-center">
                <Image
                  src={`/grohe.png`}
                  width={200}
                  height={200}
                  alt="Grohe"
                />
              </div>
              <div className="w-20 h-20 md:w-40 md:h-40 flex items-center justify-center">
                <Image
                  src={`/kohler.png`}
                  width={200}
                  height={200}
                  alt="Kohler"
                />
              </div>
              <div className="w-20 h-20 md:w-40 md:h-40 flex items-center justify-center">
                <Image
                  src={`/symmons.avif`}
                  width={200}
                  height={200}
                  alt="Symmons"
                />
              </div>
              <div className="w-20 h-20 md:w-40 md:h-40 flex items-center justify-center">
                <Image
                  src={`/elkay.jpg`}
                  width={200}
                  height={200}
                  alt="Elkay"
                />
              </div>
            </div>
          </div>
          <Divider />
          <div className="flex flex-col items-center justify-center mt-6">
            <h1 className="text-center text-base md:text-3xl  font-bold mb-4">
              Preferred Heating Product Manufacturers
            </h1>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8 lg:gap-12 ">
              <div className="w-20 h-20 md:w-40 md:h-40 flex items-center justify-center">
                <Image src={`/htp.jpg`} width={200} height={200} alt="HTP" />
              </div>
              <div className="w-20 h-20 md:w-40 md:h-40 flex items-center justify-center">
                <Image
                  src={`/grundfos.svg`}
                  width={200}
                  height={200}
                  alt="grundfos"
                />
              </div>
              <div className="w-20 h-20 md:w-40 md:h-40 flex items-center justify-center">
                <Image
                  src={`/bosch.png`}
                  width={200}
                  height={200}
                  alt="bosch"
                />
              </div>
              <div className="w-20 h-20 md:w-40 md:h-40 flex items-center justify-center">
                <Image src={`/taco.png`} width={200} height={200} alt="taco" />
              </div>
              <div className="w-20 h-20 md:w-40 md:h-40 flex items-center justify-center">
                <Image
                  src={`/slantfin.png`}
                  width={200}
                  height={200}
                  alt="slantfin"
                />
              </div>

              <div className="w-20 h-20 md:w-40 md:h-40 flex items-center justify-center">
                <Image
                  src={`/wellmc.png`}
                  width={200}
                  height={200}
                  alt="wellmclain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
