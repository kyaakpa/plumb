"use client";

const ServiceCard = ({ data }) => {
  return (
    <div className="p-4">
      {data.map((item, index) => (
        <div
          className="flex flex-row items-center justify-start gap-2 pb-4"
          key={index}
        >
          <svg
            className="w-4 h-4 md:w-6 md:h-6 text-green-500 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 3.293a1 1 0 0 1 1.414 1.414l-10 10a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L7 12.586l9.293-9.293a1 1 0 0 1 1.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <p
            key={index}
            className="font-semibold text-gray-100 text-sm md:text-xl lg:text-2xl"
          >
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
