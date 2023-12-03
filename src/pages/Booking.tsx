import { FieldValues, useForm } from "react-hook-form";
import booking from "../assets/booking.svg";
import background from "../assets/service.svg";
import AppHeading from "../components/AppHeading";
import AppInput from "../components/AppInput";

export default function Booking() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-gradient-to-r from-light to-white relative min-h-screen w-full"
    >
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="absolute inset-0 bg-cover bg-center z-10"
      ></div>
      <div className="relative z-10 xl:px-20 px-10 p-3">
        <div className="pt-28 flex flex-col items-center">
          <AppHeading className="text-mainBlue text-center">
            Find a doctor at your own ease
          </AppHeading>
          <img src={booking} alt="img" />
          <div className="sm:w-96 xl:w-[30rem]">
            <AppInput
              register={register}
              registerType="search"
              type="search"
              placeholder="Search doctors by specialty..."
            />
          </div>
        </div>
      </div>
    </form>
  );
}
