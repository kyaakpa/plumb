"use client";
import { Button } from "@nextui-org/react";
import { EmailIcon } from "./Icons";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

const ContactUsDup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const url = "https://markjahern.vercel.app/api/send";
  const localURL = "http://localhost:3000/api/send";

  const onSubmit = async (data, e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const response = await fetch(localURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const serverResponse = response.status;
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
      className="py-4 flex flex-col justify-center items-center w-full antialiased "
    >
      <div className="tracking-tighter text-neutral-800  flex justify-center items-center gap-4">
        <h2 className="text-xl font-bold ">CONTACT US</h2>
        <EmailIcon size={32} />
      </div>
      <div className="flex flex-col p-2 gap-3  [&>input]:input-form">
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
          rows={2}
          {...register("desc", { maxLength: 500 })}
        />

        <Button
          color="primary"
          className="h-12 px-4 rounded-lg font-medium text-md active:animate-pulse"
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

export default ContactUsDup;
