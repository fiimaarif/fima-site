import Image from 'next/image';
import contactData from './contactData.json';

export function ContactCard() {
  return (
    <>
      <div className="card w-full lg:w-8/12 bg-base-100 shadow-xl rounded-3xl">
        <div className="card-body">
          <h1 className="card-title mx-auto font-bold font-rubik text-cyan-900">
            Lets Talk!
          </h1>
          <div className="lg:flex md:flex justify-around my-5 lg:my-7">
            {contactData.data.map((item) => (
            <div key={item.id} className="w-full md:w-6/12 lg:w-3/12 py-3 md:py-0 lg:py-0">
              <div className="w-20 h-20 bg-base-100 mx-auto drop-shadow-lg rounded-3xl hover:bg-slate-300">
                <Image 
                  className="w-20 mx-auto p-5" 
                  src={item.icon}
                  alt='icon'
                  width={96}
                  height={96}
                  />
              </div>
              <p className="font-rubik font-bold pt-5 text-center">{item.title}</p>
              <p className="font-rubik text-center pt-2 font-medium text-gray-500"><a href={item.link} target='_blank'>{item.desc}</a></p>
            </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
