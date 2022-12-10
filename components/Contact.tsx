import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:bielpcosta@hotmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} ${formData.email}`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-[20px] md:text-2xl">
        Contact
      </h3>
      <div className="flex flex-col w-fit mt-10 space-y-10">
        <h4 className="text-2xl md:text-4xl font-semibold text-center">
          I have just what u need.{" "}
          <span className="decoration-[#f7ab0a]/50 underline">Lets Chat</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5">
            <PhoneIcon className="text-[#F7Ab0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+55 (84)99192-6321</p>
          </div>
          <div className="flex items-center space-x-5">
            <EnvelopeIcon className="text-[#F7Ab0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">bielpcosta@hotmail.com</p>
          </div>
          <div className="flex items-center space-x-5">
            <MapPinIcon className="text-[#F7Ab0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Brazil</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
