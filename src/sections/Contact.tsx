import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_5p8hkdg",
        "contact_form",
        formRef.current,
        "hO4nWNi7OPbq1CJNW"
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          formRef.current?.reset();
        },
        () => {
          setError(true);
          setSuccess(false);
        }
      );
  };

  return (
    <section id="contact" className="bg-black text-white px-6 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 rounded-md bg-[#1a1a1a] border border-gray-700"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 rounded-md bg-[#1a1a1a] border border-gray-700"
            required
          />
          <textarea
            rows={5}
            name="message"
            placeholder="Your Message"
            className="p-3 rounded-md bg-[#1a1a1a] border border-gray-700"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 py-3 px-6 rounded-md font-semibold"
          >
            Send Message
          </button>
        </form>

        {success && (
          <p className="mt-4 text-green-500">Message sent successfully!</p>
        )}
        {error && (
          <p className="mt-4 text-red-500">Something went wrong. Try again.</p>
        )}
      </div>
    </section>
  );
};

export default Contact;
