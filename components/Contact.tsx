import React, { useRef } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import emailjs from '@emailjs/browser';

type Props = {};

function Contact({}: Props) {
  
  const form = useRef(null);
  
  const sendEmail = (e: any) => {
    e.preventDefault();
    const currentForm = form.current;
    if (currentForm == null) return;
    emailjs
      .sendForm(
        "service_0jnmoxo",
        "template_ay3rmhd",
        currentForm,
        "0oq-P0e65x-qUwIt2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-[20px] md:text-2xl">
        Contact
      </h3>
      <div className="flex flex-col w-fit mt-20 space-y-10">
        <h4 className="text-2xl md:text-4xl font-semibold text-center">
          Let&apos;s{" "}
          <span className="decoration-[#f7ab0a]/50 underline">Chat</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5">
            <PhoneIcon className="text-[#F7Ab0A] h-7 w-7 animate-pulse" />
            <p className="md:text-2xl">+55 (84)99192-6321</p>
          </div>
          <div className="flex items-center space-x-5">
            <EnvelopeIcon className="text-[#F7Ab0A] h-7 w-7 animate-pulse" />
            <p className="md:text-2xl">bielpcosta@hotmail.com</p>
          </div>
          <div className="flex items-center space-x-5">
            <MapPinIcon className="text-[#F7Ab0A] h-7 w-7 animate-pulse" />
            <p className="md:text-2xl">Brazil</p>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2">
            <input
              name="name"
              placeholder="Name"
              className="contactInput"
              type="text"
              required
            />
            <input
              name="email"
              placeholder="Email"
              className="contactInput"
              type="email"
              required
            />
          </div>
          <input
            name="subject"
            placeholder="Subject"
            className="contactInput"
            type="text"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="contactInput"
            required
          />
          <button className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg" value="Send">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
