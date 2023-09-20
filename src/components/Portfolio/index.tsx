import Image from "next/image";
import { PortflioItem } from "..";

export function Portfolio() {
  return (
    <div className="min-h-screen py-10 bg-base-200 flex items-center" id="hero">
      <div className="container mx-auto px-4">
        <div className="lg:w-6/12 w-full text-center lg:text-left">
          <h2 className="text-xl font-semibold text-cyan-900 font-rubik">
            Portfolio
          </h2>
          <p className="pb-6 pt-2 lg:py-6 font-medium text-justify lg:text-left font-rubik text-gray-800">
            Welcome to my portfolio! Here, you&#39;ll find a curated selection of my
            work and projects. Feel free to explore and get in touch if you have
            any questions or collaboration ideas. Thanks for visiting!
          </p>
        </div>
        <div className="flex flex-col items-center justify-between lg:flex-row-reverse">
          <div className="lg:w-4/12 w-full">
            <Image
              data-aos="fade-left"
              className="mx-auto lg:mx-0 lg:ml-auto w-52 lg:w-auto lg:flex hidden"
              src="/assets/images/illustrations/portfolio-image.webP"
              alt="portfolio-image"
              width={367}
              height={435}
            />
          </div>
          <PortflioItem />
        </div>
      </div>
    </div>
  );
}
