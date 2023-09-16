import Link from 'next/link';
import {useState} from 'react';

export function About() {
    const initialText = `Hi there, I'm fii maarif. I am a Frontend Developer. I have
    experience in creating and developing responsive and intuitive
    user interfaces for web applications. I possess skills in HTML,
    CSS, and JavaScript, as well as experience using frameworks such
    as ReactJS, Angular and React Native for Mobile. I am also able to
    work closely with the backend team to ensure seamless integration
    between the user interface and systems. I am passionate about
    learning and experimenting with new technologies to create better
    applications.`;

    const maxLength = 300;
    const [displayText, setDisplayText] = useState(initialText.substring(0, maxLength));
    const [showFullText, setShowFullText] = useState(false);

    const toggleText = () => {
      setShowFullText(!showFullText);
      setDisplayText(
        showFullText ? initialText.substring(0, maxLength) : initialText
      );
    };

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
              src="./assets/images/about-image.png"
            />
          </div>
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h2 className="text-xl font-semibold text-cyan-900 font-rubik pt-5 lg:pt-0">
              About me
            </h2>
            <p className="py-6 font-medium text-justify lg:text-left font-rubik">
              {displayText}
              {!showFullText && initialText.length > maxLength && (
                <button
                  onClick={toggleText}
                  className="text-cyan-900 font-semibold underline hover:no-underline focus:outline-none ml-1"
                >
                  {showFullText ? "Sembunyikan" : "Continue Reading"}
                </button>
              )}
            </p>
            <Link href={'/resume'} className="btn btn-warning font-bold rounded-full font-rubik">
              show more about me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
