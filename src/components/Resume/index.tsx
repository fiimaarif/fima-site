import { Stepper } from "..";

export function Resume() {
    return (
      <div className="min-h-screen py-10 bg-base-200 flex items-center">
        <div className="container mx-auto px-4">
          <div data-aos="fade-up" className="flex flex-col items-center justify-between lg:flex-row-reverse">
            <div className="lg:w-1/3 w-full">
              <img className="mx-auto lg:mx-0 lg:ml-auto" src="./assets/images/resume-image.png"/>
            </div>
            <div className="lg:w-8/12 w-full text-center lg:text-left">
              <h2 className="text-xl font-semibold text-cyan-900 font-rubik mb-5">
                Work Experience
              </h2>
              <Stepper/>
            </div>
          </div>
        </div>
      </div>
    );
  }
  