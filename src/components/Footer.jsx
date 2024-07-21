import React from "react";
import Section from "./Section";
import { socials, socialMediaLinks } from "../constants";


const Icons = ({links}) => {
  return (
    <div className="">
<ul className="social-media-links flex flex-wrap gap-5">
        {links.map((link, index) => (
          <li key={index} className="social-media-link">
            <a className='flex items-center justify-center text-n-4 rounded-full transition-colors hover:text-n-2' href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
              {React.createElement(link.icon, {size: 24 })}
            </a>
          </li>
        ))}
      </ul>
</div>
 )
}



const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          ©  {new Date().getFullYear()} Joe Aguado
        </p>

          <Icons links={socialMediaLinks}/>
        {/* <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul> */}
      </div>



    </Section>
  );
};

export default Footer;
