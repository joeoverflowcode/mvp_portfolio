import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";
import Button from "./Button";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="resume">
      <div className="container">
        <Heading
          title="How I get involved"
          text={"Coming together is a beginning, staying together is progress, and working together is success. \n — Henry Ford"}
        />

        <div className="relative">
          <div className="relative z-1 flex flex-col h-[35rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden  xl:h-[46rem]">
            <div className="absolute -left-32 -bottom-32 lg:-bottom-24 lg:-left-20 w-full h-full pointer-events-none xl:w-auto">
              <img
                className="w-full h-full object-contain"
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 flex flex-col items-end ml:auto text-right ">
              <h4 className="h4 mb-4">Let's work together!</h4>
              <p className="body-2 text-n-3 max-w-[30rem]">
                
I actively participate in local developer community events, learning from experienced peers and mentoring newcomers. Check out my resume.

              </p>
              <div className="">

<Button className='my-4'  target="_blank" rel="noopener noreferrer" href='/Aguado2024.pdf' white>
              Resume
            </Button>
              </div>
              <ul className="body-3 flex flex-col justify-start items-start ">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex py-4 border-t border-n-6"
                  >
                    <img width={18} height={20} src={check} />
                    <p className="ml-2">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" /> */}
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 scale-[1.0] ">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Involved with Local Tech Community</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                Joe builds relationships within the Dallas/Fort Worth area. He attends developer meetups, the UNT Alumni Association meetings, and outreach events with local tech companies.
                 
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Co-Founder of the Texas Coding Club</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Joe collaborates with a variety of technologists in his area. He started the Texas Coding Club in an effort to develop the tech presence in the DFW area. 
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] rounded-xl md:h-[25rem] ">
                <img
                  src={service3}
                  className="w-full h-full object-contain md:object-cover"
                  alt="Scary robot"   
                />

                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
