import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import dataItem from './portfolio-data.json';

export function PortflioItem() {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
      <div data-aos="fade-right" className="mockup-window w-full lg:w-8/12 border-base-100 bg-cyan-900">
        <div className="bg-base-100 p-3">
          <Carousel
            ssr={true}
            arrows={true}
            responsive={responsive}
            infinite={true}
          >
            {dataItem.data.map((item) => (
              <div key={item.id} className="h-96 card w-full md:w-80 mx-auto lg:w-80 lg:mx-auto lg:mt-6 mb-3 lg:mb-5 bg-base-100 drop-shadow-lg lg:drop-shadow-xl font-rubik">
                <figure className="p-1">
                  <img className="w-full" src={item.image} alt="portfolio" />
                </figure>
                <div className="card-body pb-3 px-5 pt-2">
                  <h2 className="card-title">{item.title}</h2>
                  <p className="text-justify">{item.description}</p>
                  <div className="card-actions justify-start pt-2">
                    {item.badges.map((badge, index) => (
                      <div key={index} className={`badge badge-outline ${badge.className}`}>
                        {badge.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
  );
}
