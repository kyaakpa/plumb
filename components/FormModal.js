import React from "react";
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

export default function FormModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className="bg-primary/20 text-primary text-base">
        Contact Us
      </Button>
      <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent >
          {(onClose) => (
            <>
              <div className="flex">
                <ModalHeader className="flex flex-col gap-1 w-1/2">
                  Mailing Address
                </ModalHeader>
                <ModalHeader className="pr-8 w-1/2">Any Questions ?</ModalHeader>
              </div>
              <div className="flex">
                <ModalBody className="text-xs border-r-1 w-1/2 ">
                  <p className="flex flex-col">
                    <span>Mark J. Ahern, Inc.</span>
                    <span>4 Cortland Lane</span>
                    <span>Lynnfield, MA 01940</span>
                  </p>
                  <p className="flex flex-col">
                    <span>Phone: (617) 492-5198</span>
                    <span>Fax: (617) 864-0295</span>
                    <span>Email: Mark@Markjaherninc.com</span>
                  </p>
                </ModalBody>
                <ModalBody className="w-1/2 ">
                  <Input
                    size="sm"
                    type="text"
                    label="Name"
                    placeholder="Enter your name"
                  />
                  <Input
                    size="sm"
                    type="email"
                    label="Email"
                    placeholder="Enter your email"
                  />
                  <Input
                    size="sm"
                    type="text"
                    label="Phone"
                    placeholder="Enter your phone"
                  />
                  <Textarea
                    label="Description"
                    labelPlacement="outside"
                    placeholder="Enter your description"
                    className="max-w-xs"
                  />
                </ModalBody>
              </div>

              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
