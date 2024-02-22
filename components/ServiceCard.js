const ServiceCard = ({ data }) => {
  return (
    <div className="border-1 border-black bg-gray-200 w-full flex flex-row gap-16">
      <div className="flex flex-col w-2/3 p-4">
        {data.map((item) => {
          return (
            <>
              <h1 className="text-xl font-bold text-black  pb-2">
                {item.title}
              </h1>
              <div className="pb-4">
                {item.content.map((item, index) => {
                  return (
                    <div key={index} className="flex flex-row ">
                      <svg
                        className="w-4 h-4 text-green-700 mr-2 pt-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 3.293a1 1 0 0 1 1.414 1.414l-10 10a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L7 12.586l9.293-9.293a1 1 0 0 1 1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-black font-medium text-sm w-full">
                        {item}
                      </p>
                    </div>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
      <div className="flex w-1/3 p-6 items-center justify-center">
        <img src="/bathroom.webp" alt="bathroom" />
      </div>
    </div>
  );
};

export default ServiceCard;
