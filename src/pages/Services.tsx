import appointment from "../assets/appoint.svg";
import guide from "../assets/guide.svg";
import checkup from "../assets/checkup.svg";
import consult from "../assets/consult.svg";
import ServiceCard from "../components/ServiceCard";
import AppHeading from "../components/AppHeading";
import background from "../assets/service.svg";

export default function Services() {
  const services = [
    {
      icon: consult,
      title: "Instant Consultation",
      to: "consult",
    },
    {
      icon: appointment,
      title: "Book an Appointment",
      to: "booking",
    },
    { icon: checkup, title: "Self Checkup", to: "checkup" },
    { icon: guide, title: "Health Tips and Guidance", to: "guide" },
  ];

  return (
    <div className="bg-gradient-to-r from-light to-white relative min-h-screen w-full">
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="absolute inset-0 bg-cover bg-center z-10"
      ></div>
      <div className="relative z-10 xl:px-20 px-10 p-3">
        <div className="pt-28 flex flex-col justify-center w-full items-center">
          <AppHeading className="text-mainBlue">Best Services</AppHeading>
          <p className="font-body md:text-lg text-center font-light text-gray mb-10">
            Love yourself enough to live a healthy lifestyle.
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-between mt-4">
          {services.map((service) => (
            <ServiceCard
              to={service.to}
              key={service.title}
              icon={service.icon}
              service={service.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
