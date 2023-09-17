export function Portfolio() {
  return (
    <div className="min-h-screen py-10 bg-base-200 flex items-center" id="hero">
      <div className="container mx-auto px-4">
        <div
          data-aos="fade-left"
          className="flex flex-col items-center justify-between lg:flex-row-reverse"
        >
          <div className="lg:w-1/2 w-full">
            <img
              className="mx-auto lg:mx-0 lg:ml-auto"
              src="./assets/images/portfolio-image.png"
            />
          </div>
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h2 className="text-xl font-semibold text-cyan-900 font-rubik">
              Portfolio
            </h2>
            <p className="py-6 font-medium text-justify lg:text-left font-rubik">
              Welcome to my portfolio! Here, you'll find a curated selection of
              my work and projects. Feel free to explore and get in touch if you
              have any questions or collaboration ideas. Thanks for visiting!
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
