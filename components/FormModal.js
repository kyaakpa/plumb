"use client";
import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Textarea,
} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

export default function FormModal({ styling }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const localURL = "http://localhost:3000/api/send";

  const onSubmit = async (data) => {
    setIsLoading(true);
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
    <div
      className={`${styling} max-lg:transition max-lg:ease-in max-lg:duration-250`}
    >
      <ToastContainer />
      <Button
        onPress={onOpen}
        className="bg-primary/20 text-primary text-base max-lg:bg-blue-500 max-lg:text-white max-lg:animate-bounce max-lg:text-lg"
      >
        Contact Us
      </Button>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        size="3xl"
        className="max-sm:h-[70vh]"
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <div className="flex">
                <ModalHeader className="pr-8 ">
                  {" "}
                  Feel free to contact us
                </ModalHeader>
              </div>
              <div className="flex w-full">
                <ModalBody onSubmit={handleSubmit(onSubmit)}>
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
                </ModalBody>
              </div>

              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={handleSubmit(onSubmit)}
                  type="submit"
                  isLoading={isLoading}
                >
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
