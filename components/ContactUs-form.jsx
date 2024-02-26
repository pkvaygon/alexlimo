"use client";
import {
  Textarea,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";
import { sendContactUsForm } from '@/actions/emailjs';
export default function ContactUsForm() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [contactUs, setContactUs] = React.useState({
    name: "",
    phone_number: "",
    message: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactUs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onSubmit = async ()=>{
  await sendContactUsForm(contactUs)
  }
  return (
    <>
      <button
        onClick={onOpen}
        className="fpx-12 py-2 px-3 bg-[#afa581] text-lg rounded-sm text-white">
        Contact Us
      </button>
      <Modal className="dark" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Contact Us
              </ModalHeader>
              <ModalBody className="h-auto">
                  <div className="grid grid-cols-2 grid-flow-row gap-2">
                    <Input
                      type="text"
                      placeholder="Enter your name"
                      name="name"
                      value={contactUs.name}
                      onChange={handleInputChange}
                    />
                     <Input
                    type="tel"
                    name="phone_number"
                    value={contactUs.phone_number}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                  />
                  </div>
                  <div className="w-full">
                  <Textarea
                    className="w-full"
                    name="message"
                    value={contactUs.message}
                    onChange={handleInputChange}
                    aria-label="contact-us"
                    placeholder="Type your text"
                  />
                  </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>
                  Close
                </Button>
                <Button color="secondary" onClick={() => { onSubmit(); onClose(); }}>
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
