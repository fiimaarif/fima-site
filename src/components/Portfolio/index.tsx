import Link from "next/link";
import { PortflioItem } from "..";

export function Portfolio() {
  return (
    <div className="min-h-screen py-10 bg-base-200 flex items-center" id="hero">
      <div className="container mx-auto px-4">
        <div
          className="flex flex-col items-center justify-between lg:flex-row-reverse"
        >
          <div className="lg:w-4/12 w-full">
            <img data-aos="fade-left"
              className="mx-auto lg:mx-0 lg:ml-auto w-52 lg:w-auto"
              src="./assets/images/illustrations/portfolio-image.webP"
            />
          </div>
          <PortflioItem/>
        </div>
      </div>
    </div>
  );
}
