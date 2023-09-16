export function Hero() {
    return (
      <div className="min-h-screen py-10 bg-base-200 flex items-center" id="hero">
        <div className="container mx-auto px-4">
          <div data-aos="fade-left" className="flex flex-col items-center justify-between lg:flex-row-reverse">
            <div className="lg:w-1/2 w-full">
              <img className="mx-auto lg:mx-0 lg:ml-auto" src="./assets/images/hero-image.png"/>
            </div>
            <div className="lg:w-1/2 w-full text-center lg:text-left">
              <h2 className="text-xl font-semibold text-cyan-900 font-rubik">
                Hi there 👋 I am
              </h2>
              <h1 className="text-5xl font-bold tracking-wider font-rubik">fii maarif</h1>
              <h2 className="text-2xl font-rubik">Frontend Developer</h2>
              <p className="py-6 font-medium text-justify lg:text-left font-rubik">
                As a Frontend Developer, I have experience in creating and
                developing responsive and intuitive UI. I have experience with
                popular frameworks such as React and Angular. I am also able to
                work closely with the backend team to ensure seamless
                integration between the user interface and systems.
              </p>
              <button className="btn btn-warning font-bold rounded-full font-rubik">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}