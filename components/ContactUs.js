"use client";
import { Button } from "@nextui-org/react";
import { EmailIcon } from "./Icons";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data, e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const response = await fetch("https://markjahern.vercel.app/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const serverResponse = response.status;
      console.log(serverResponse);
      if (serverResponse === 200) {
        setIsLoading(false);
        toast.info("We've received your message.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 mt-48 flex flex-col justify-center items-center gap-4 w-full antialiased max-md:mb-32"
    >
      <div className="sm:text-7xl text-5xl font-bold tracking-tight text-neutral-800  flex justify-center items-center gap-4">
        <h2>Contact Us</h2> <EmailIcon className="max-sm:w-[48px]" />
      </div>
      <div className="flex flex-col p-6 gap-3  [&>input]:input-form max-sm:[&>input]:p-2 md:w-1/2 max-md:w-[400px]">
        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
        />
        <input
          type="text"
          placeholder="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="number"
          placeholder="Phone"
          {...register("phone", { required: true, maxLength: 15 })}
        />
        <textarea
          className="input-form"
          placeholder="Description"
          rows={5}
          {...register("desc", { maxLength: 500 })}
        />

        <Button
          color="primary"
          className="h-16 px-4 rounded-lg font-medium text-2xl mt-6"
          type="submit"
          isLoading={isLoading}
        >
          Submit
        </Button>
      </div>
      <ToastContainer />
    </form>
  );
};

export default ContactUs;
