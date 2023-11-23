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
  const url = "https://markjahern.vercel.app/api/send";
  const localURL = "http://localhost:3000/api/send";

  const onSubmit = async (data, e) => {
    console.log(data);
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
                <ModalHeader className="flex flex-col gap-1 w-1/2 max-lg:hidden">
                  Mailing Address
                </ModalHeader>
                <ModalHeader className="pr-8 w-1/2">
                  Any Questions ?
                </ModalHeader>
              </div>
              <div className="flex w-full">
                <ModalBody className="border-r-1 w-1/2 max-lg:hidden">
                  <p className="flex flex-col">
                    <span>Mark J. Ahern, Inc.</span>
                    <span>4 Cortland Lane</span>
                    <span>Lynnfield, MA 01940</span>
                  </p>
                  <p className="flex flex-col">
                    <span>(617) 492-5198</span>
                    <span>markjaherninc@gmail.com</span>
                  </p>
                </ModalBody>
                <ModalBody onSubmit={handleSubmit(onSubmit)}>
                  <Input
                    size="md"
                    type="text"
                    label="Name"
                    placeholder="Enter your name"
                    {...register("name", { required: true })}
                  />
                  <Input
                    type="email"
                    label="Email"
                    placeholder="Enter your email"
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                  <Input
                    size="md"
                    type="text"
                    label="Phone"
                    placeholder="Enter your phone"
                    {...register("phone", { required: true, maxLength: 15 })}
                  />
                  <Textarea
                    label="Description"
                    placeholder="How can we help you?"
                    {...register("desc", { maxLength: 500 })}
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
