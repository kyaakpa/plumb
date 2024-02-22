"use client";
import React, { useState } from "react";
import { Button, Input, Textarea } from "@nextui-org/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const localURL = "http://localhost:3000/api/send";

  const [isLoading, setIsLoading] = useState(false);
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
        toast.success("We've received your message.", {
          position: toast.POSITION.TOP_RIGHT,
        });
        reset();
      } else {
        setIsLoading(false);
        toast.error("There was an error sending your message.", {
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
      className="flex flex-col justify-center items-center"
    >
      <div className="relative w-full h-full overflow-hidden">
        <div className="h-[100vh]">
          <img src={`/front.webp`} alt="plumbing site" />
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center backdrop-filter backdrop-blur-sm bg-gray-900 bg-opacity-40 z-20
"
        >
          <div className="flex flex-row w-full px-32">
            <div className="flex flex-col w-1/2 p-4 items-start justify-start">
              <h1 className="text-6xl font-semibold  text-white ">
                Contact Us
              </h1>
              <p className="text-gray-100 mt-4">
                Mark J. Ahern, Inc. has been providing plumbing, heating, and
                gas services to the Greater Boston area for over 30 years. We
                are committed to providing the highest level of customer service
                and satisfaction. Please feel free to contact us with any of
                your plumbing, heating, or gas needs. We are here to help you.
              </p>
              <div className="flex flex-row w-full mt-4">
                <div className="flex flex-col w-full mt-4">
                  <h1 className="text-3xl font-semibold mb-2 text-white">
                    ADDRESS
                  </h1>
                  <p className="text-gray-100  ">Mark J. Ahern, Inc. </p>
                  <p className="text-gray-100  ">Lynnfield, MA 01940</p>
                  <p className="text-gray-100  ">4 Cortland Lane</p>
                </div>
                <div className="flex flex-col w-full mt-4">
                  <h1 className="text-3xl font-semibold mb-2 text-white">
                    CONTACT
                  </h1>
                  <p className="text-gray-100  ">Phone: (617) 492-5198</p>
                  <p className="text-gray-100  ">Fax: (617) 864-0295</p>
                  <Link
                    href="mailto:Mark@Markjaherninc.com"
                    className="hover:cursor-pointer"
                  >
                    <p className="inline-block border-b border-blue-400 text-blue-400">
                      Mark@Markjaherninc.com
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white  p-8 rounded-xl">
              <h1 className="text-5xl font-semibold">Get in touch</h1>
              <p className="font-semibold text-sm text-gray-800 my-2">
                Feel free to contact us
              </p>
              <div className="flex flex-col gap-4 mt-8">
                <div className="flex flex-row gap-4">
                  <Input
                    type="text"
                    label="First name"
                    isRequired
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                  />
                  {errors.firstName && (
                    <p className="text-red-500">{errors.firstName.message}</p>
                  )}
                  <Input
                    type="text"
                    label="Last name"
                    isRequired
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                  />
                  {errors.lastName && (
                    <p className="text-red-500">{errors.lastName.message}</p>
                  )}
                </div>
                <Input
                  type="email"
                  label="Email"
                  isRequired
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
                <Input type="tel" label="Phone" {...register("phone")} />
                <Textarea
                  type="text"
                  label="How can we help you?"
                  isRequired
                  {...register("description", {
                    required: "Description is required",
                  })}
                />
                {errors.description && (
                  <p className="text-red-500">{errors.description.message}</p>
                )}
              </div>
              <Button
                color="primary"
                className="h-12 w-full px-4 rounded-full font-medium text-lg active:animate-pulse mt-4"
                type="submit"
                isLoading={isLoading}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default page;
