import booking from "../assets/booking.svg";
import background from "../assets/service.svg";
import AppHeading from "../components/AppHeading";
import AppInput from "../components/AppInput";

export default function Booking() {
  return (
    <div className="bg-gradient-to-r from-light  to-white fixed inset-0 xl:px-20 px-10 p-3 w-full h-full md:h-screen  ">
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="fixed inset-0 bg-cover bg-center -z-10"
      >
        <div className="pt-28 flex flex-col items-center">
          <AppHeading className="text-mainBlue">
            Find a doctor at your own ease
          </AppHeading>
          <img src={booking} alt="img" />
          <div className="w-[30rem]">
            <AppInput
              type="search"
              placeholder="Search doctors by specialty..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
