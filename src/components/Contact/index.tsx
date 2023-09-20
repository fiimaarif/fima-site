import Image from "next/image";
import { ContactCard } from "..";

export function Contact() {
    return (
      <div
        className="min-h-screen py-10 bg-base-200 flex items-center"
        id="hero"
      >
        <div className="container mx-auto px-4">
          <div className="lg:w-6/12 w-full text-center lg:text-left">
            <h2 className="text-xl font-semibold text-cyan-900 font-rubik">
              Contact me
            </h2>
            <p className="lg:py-6 pt-2 font-medium text-justify lg:text-left font-rubik text-gray-700">
              I appreciate your interest in reaching out to me. If you&#39;d like to
              get in touch or have any questions, please feel free to send me a
              message through the contact form below. I&#39;ll do my best to respond
              promptly. Thank you for your attention.
            </p>
          </div>
          <div
            data-aos="fade-left"
            className="flex flex-col items-center justify-between lg:flex-row-reverse"
          >
            <div className="lg:w-1/2 w-full">
              <Image
                className="mx-auto lg:mx-0 lg:ml-auto w-52 lg:w-auto"
                src="/assets/images/illustrations/contact-image.png"
                alt="contact-image"
                width={368}
                height={314}
              />
            </div>
            <ContactCard />
          </div>
        </div>
      </div>
    );
  }
  