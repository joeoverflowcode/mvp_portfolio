import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Affiliated member of the following organizations:
      </h5>
      <ul className="flex mt-2">
        {companyLogos.map((company) => (
          <li
            className="flex flex-col items-center text-center justify-center flex-1 h-[8.5rem]"
            key={company.index}
          >
            <img src={company.logo} width={80} height={28} alt={company.logo} />
            <p className="mt-2">
              {company.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
