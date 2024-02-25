"use client";
import { useState } from "react";

const Modal = ({ isOpen, onClose, imageSrc, altText }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-4">
            <button className="absolute top-0 right-0 p-2" onClick={onClose}>
              Close
            </button>
            <img
              src={imageSrc}
              alt={altText}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  );
};

const ServiceCard = ({ data }) => {
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleClicked = (index) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-3 gap-8">
      {data.map((item, index) => (
        <div
          key={index}
          className="relative hover:cursor-pointer"
          onClick={() => handleClicked(index)}
        >
          <div className="rounded-lg overflow-hidden w-[300px] h-[300px] flex items-center justify-center transition-transform transform hover:scale-105">
            <img
              src={item.picture}
              alt={item.altText}
              className="object-cover rounded-lg w-full h-full "
            />
          </div>
          <p className="font-semibold text-gray-100 mt-4">{item.title}</p>
        </div>
      ))}
      <Modal
        isOpen={clickedIndex !== null}
        onClose={() => setClickedIndex(null)}
        imageSrc={clickedIndex !== null ? data[clickedIndex].picture : ""}
        altText={clickedIndex !== null ? data[clickedIndex].altText : ""}
      />
    </div>
  );
};

export default ServiceCard;
