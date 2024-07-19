import { curve, heroBackground, robot, mainhero, joehero, herobg, line, logo } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
    className="pt-[7rem] -mt-[5.25rem]"
    crosses
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
    id="hero"
    >

      <div className="container relative flex flex-col lg:flex-row" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem] md:mt-[3rem]">
        <div className="absolute -top-[40%] left-[40%] w-[104%] -translate-x-1/2 rotate-90 ">
            <img
              src={herobg}
              className="w-full opacity-20"
              width={200}
              height={200}
              alt="hero"
            />
          </div>
          <div className="absolute -top-60 left-40 w-[40%] -translate-x-1/2 ">
            <img
              src={herobg}
              className="w-full opacity-20"
              width={200}
              height={200}
              alt="hero"
            />
          </div>
          <h1 className="h1 mb-6 ">
            Solving the Business <span className="text-blue-400"> <br />Problems of {` `}</span>
            <span className="inline-block relative text-blue-400">
               Today{" "}
              {/* <img
                src={line}
                className="absolute w-full -translate-y-3  rotate-6 -z-1"
                width={624}
                height={28}
                alt="Curve"
              /> */}
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            I'm Joe, a Web Developer based out of Dallas, Texas. <br />
            Let me show you how I can help you with your next web development project.
          </p>
          <div className="flex w-full justify-center gap-8">
            <Button href="#projects" white>
              View Work
            </Button>
            <Button href="#contact" white>
              Contact
            </Button>
          </div>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-1 rounded-2xl bg-conic-gradient">
            <div className="relative bg-gradient-to-b from-slate-800 to-zinc-600 rounded-[1rem] ">
              {/* <div className="h-[1.0rem] bg-n-10 rounded-t-[0.9rem]" /> */}

              <div className="aspect-[33/40] rounded-[0.9rem] overflow-hidden   ">
                <img
                  src={joehero}
                  className="max-w-96 rounded-t-[.9rem] scale-[1.7] translate-x-[05%] translate-y-[30%]  "
                  width={1024}
                  height={490}
                  alt="AI"
                />
                {/* <img
                  src={joehero}
                  className="max-w-96 rounded-t-[.9rem] scale-[0.95] translate-x-[0%] -translate-y-[10%]  "
                  width={1024}
                  height={490}
                  alt="AI"
                /> */}



{/* 
                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" /> */}

                {/* <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                  {heroIcons.map((icon, index) => (
                    <li className="p-5" key={index}>
                    <img src={icon} width={24} height={25} alt={icon} />
                    </li>
                    ))}
                    </ul>
                    </ScrollParallax> */}

                {/* <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                  className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                  title="Code generation"
                  />
                  </ScrollParallax> */}
              </div>
            </div>
{/* //gradient here */}
          <Gradient />
          </div>

          {/* //herobg here */}
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2  ">
            <img
              src={herobg}
              className="w-full opacity-50"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>


        </div>
{/* <BackgroundCircles /> */}

        {/* <CompanyLogos className="hidden relative z-10 mt-20 md:block" /> */}
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
