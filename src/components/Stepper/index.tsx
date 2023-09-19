

export function Stepper() {
  return (
    <div className="wrapper">
      <ol className="c-timeline">
        <li className="relative flex gap-6">
          <div className="c-timeline__content">
            <h3 className="font-bold mb-2 text-left font-rubik text-cyan-900">Frontend Developer at PT BUSSAN AUTO FINANCE</h3>
            <p className="text-gray-500 text-left lg:text-justify font-rubik">
              I sliced and converted Figma design files into reusable React.js
              components, maintaining accuracy and design guideline adherence. I
              also crafted responsive user interfaces for a seamless user
              experience across devices. Collaborating efficiently with the
              backend team, I integrated frontend components with the backend
              API to ensure smooth data flow and functionality.
            </p>
          </div>
          <time className="flex-shrink-0 w-32 min-w-0 break-words pb-4 font-rubik">Dec 22 - Present</time>
        </li>
        <li className="relative flex gap-6">
          <div className="c-timeline__content">
            <h3 className="font-bold mb-2 text-left font-rubik text-cyan-900">
              Software Developer at Bank OCBC NISP
            </h3>
            <p className="text-gray-500 text-left lg:text-justify font-rubik">
              I converted SAS code into HiveQL for smooth data migration and
              processing in a big data environment, ensuring compatibility.
              Additionally, I conducted data quality checks, profiling, and
              resolved discrepancies and anomalies.
            </p>
          </div>
          <time className="flex-shrink-0 w-32 min-w-0 break-words pb-4 font-rubik">Oct 22 - Nov 22</time>
        </li>
        <li className="relative flex gap-6">
          <div className="c-timeline__content">
            <h3 className="font-bold mb-2 text-left font-rubik text-cyan-900">IT Trainee at Enigma Camp</h3>
            <p className="text-gray-500 text-left lg:text-justify font-rubik">
              During the bootcamp, I learned how to build APIs with Express.js,
              manage databases using PostgreSQL, and create user interfaces with
              Angular. I also practiced integrating APIs into Angular
              applications and applied this knowledge through hands-on projects.
            </p>
          </div>
          <time className="flex-shrink-0 w-32 min-w-0 break-words pb-4 font-rubik">Jul 22 - Oct 22</time>
        </li>
      </ol>
    </div>
  );
}
