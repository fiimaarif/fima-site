import Link from "next/link";

export function Hero() {
  const linkResume = 'https://drive.google.com/file/d/1CMbOQsV5vsH4eLc-0z5cFPUADzHOUDwY/view?usp=sharing';
  return (
    <div className="min-h-screen py-10 bg-base-200 flex items-center" id="hero">
      <div className="container mx-auto px-4">
        <div data-aos="fade-left" className="flex flex-col items-center justify-between lg:flex-row-reverse">
          <div className="lg:w-1/2 w-full">
            <img className="mx-auto lg:mx-0 lg:ml-auto w-52 lg:w-auto" src="./assets/images/illustrations/hero-image.webP"/>
          </div>
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <div className="tooltip tooltip-accent tooltip-top font-rubik" data-tip="you can call me fii">
              <h2 className="text-xl font-semibold text-cyan-900 font-rubik">
                Hi there 👋 I am
              </h2>
            </div>
            <h1 className="text-5xl font-bold tracking-wider font-rubik">
              fii maarif
            </h1>
            <h2 className="text-2xl font-rubik">Frontend Developer</h2>
            <p className="py-6 font-medium text-justify lg:text-left font-rubik">
              As a Frontend Developer, I have experience in creating and
              developing responsive and intuitive UI. I have experience with
              popular frameworks such as React and Angular. I am also able to
              work closely with the backend team to ensure seamless integration
              between the user interface and systems.
            </p>
            <div className="tooltip tooltip-accent tooltip-bottom font-rubik" data-tip="Download PDF File">
              <Link href={linkResume} target="_blank" className="btn btn-warning font-bold rounded-full font-rubik">
                Download Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
