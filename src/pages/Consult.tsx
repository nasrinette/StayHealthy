import booking from "../assets/booking.svg";
import background from "../assets/service.svg";
import AppHeading from "../components/AppHeading";
import AppInput from "../components/AppInput";

export default function Consult() {
  return (
    <div className="bg-gradient-to-r from-light to-white relative min-h-screen w-full">
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="absolute inset-0 bg-cover bg-center z-10"
      ></div>
      <div className="relative z-10 xl:px-20 px-10 p-3">
        <div className="pt-28 flex flex-col items-center">
          <AppHeading className="text-mainBlue text-center">
            Find a doctor and Consult instantly
          </AppHeading>
          <img src={booking} alt="img" />
          <div className="sm:w-96 rounded-lg xl:w-[30rem]">
            <AppInput
              type="search"
              placeholder="Search doctors, clinics. hospitals, otc..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
