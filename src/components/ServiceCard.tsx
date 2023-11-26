import { useNavigate } from "react-router-dom";

interface ServiceCardProps {
  icon: string;
  service: string;
  to: string;
}
export default function ServiceCard({ icon, service, to }: ServiceCardProps) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/services/${to}`);
      }}
      className="cursor-pointer w-64 h-72 m-2 shadow-lg rounded-xl flex flex-col justify-center items-center bg-light hover:bg-white"
    >
      <img src={icon} alt="consult" />
      <p className="text-gray font-body mt-4">{service}</p>
    </div>
  );
}
