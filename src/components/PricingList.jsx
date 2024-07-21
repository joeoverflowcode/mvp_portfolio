import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap ">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[28rem]  h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-blue-400 [&>h4]:even:text-purple-400 [&>h4]:last:text-blue-400"
        >
          <h4 className="h4 mb-4">{item.title}</h4>

          <p className="body-2 min-h-[4rem] mb-8 text-n-1/50">
            {item.description}
          </p>

          {/* <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div> */}

          <Button
            className="w-full mb-6"
            href={    
              (() => {
              switch (item.headline) {
                case 'employ':
                  return 'mailto:aguado.joe@gmail.com?subject=Employment Inquiry';
                case 'collab':
                  return 'mailto:aguado.joe@gmail.com?subject=Collaboration Inquiry';
                case 'contract':
                  return 'mailto:aguado.joe@gmail.com?subject=Contract or Consulting Inquiry';
                default:
                  return 'mailto:aguado.joe@gmail.com';
              }
            })()
          }
            white={!!item.button}
          >
            {item.button ? "Email" : "Contact"}
          </Button>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
