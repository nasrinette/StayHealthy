import { useNavigate } from "react-router-dom";
import background from "../assets/BACKGROUND.svg";
import AppButton from "../components/AppButton";
import AppInput from "../components/AppInput";
import AppHeading from "../components/AppHeading";
import Illustration from "../components/Illustration";

export default function Signup() {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 xl:px-20 px-10 p-3 w-full h-full md:h-screen bg-gradient-to-r from-mainBlue to-lightBlue">
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="fixed inset-0 bg-cover bg-center"
      ></div>

      <div className="flex mt-20  md:mt-32 flex-wrap justify-center xl:justify-between items-center">
        <div className="bg-white p-10 py-10 bg-opacity-20 z-10 w-[50rem] ">
          <AppHeading className="text-white">Sign up</AppHeading>
          <p className="font-body md:text-lg font-light text-light mb-4 md:mb-8">
            Already member?
            <span
              onClick={() => {
                navigate("/login");
              }}
              className="ml-2  cursor-pointer font-body md:text-lg font-medium text-dark"
            >
              Log in
            </span>
          </p>
          <AppInput
            type="text"
            placeholder="Enter your name
              "
          />

          <AppInput
            type="tel"
            placeholder="Enter your phone number
              "
          />
          <AppInput
            type="email"
            placeholder="Enter your email
"
          />

          <AppInput type="password" placeholder="Enter your password" />
          <div className="flex mt-6 flex-col md:flex-row items-center">
            <AppButton className="px-14 py-2" white>
              Sign up{" "}
            </AppButton>
            <AppButton className="px-14 mt-4 md:mt-0 md:ml-4 py-2" white>
              Reset
            </AppButton>
          </div>
        </div>
        <Illustration />
      </div>
    </div>
  );
}
