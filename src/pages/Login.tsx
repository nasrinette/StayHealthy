import { useNavigate } from "react-router-dom";
import background from "../assets/BACKGROUND.svg";
import image from "../assets/OBJECTS.svg";
import AppButton from "../components/AppButton";
import AppInput from "../components/AppInput";
import AppHeading from "../components/AppHeading";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 xl:px-20 px-10 p-3 w-full h-full md:h-screen bg-gradient-to-r from-mainBlue to-lightBlue">
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="fixed inset-0 bg-cover bg-center"
      ></div>

      <div className="flex mt-20  md:mt-32 flex-wrap justify-center xl:justify-between items-center">
        <div className="bg-white p-10 py-20 bg-opacity-20 z-10 w-[50rem] ">
          <AppHeading className="text-white">Log in </AppHeading>
          <p className="font-body md:text-lg font-light text-light mb-4 md:mb-8">
            Are you a new member?{" "}
            <span
              onClick={() => {
                navigate("/signup");
              }}
              className="cursor-pointer font-body md:text-lg font-medium text-dark"
            >
              {" "}
              Sign up Here
            </span>
          </p>
          <AppInput
            type="email"
            label="Email"
            placeholder="john.doe@company.com"
          />

          <AppInput
            type="password"
            label="Password"
            placeholder="••••••••••••••••••"
          />
          <div className="flex mt-6 flex-col md:flex-row items-center">
            <AppButton className="px-14 py-2" white>
              Log in
            </AppButton>
            <AppButton className="px-14 mt-4 md:mt-0 md:ml-4 py-2" white>
              Reset
            </AppButton>
          </div>
        </div>
        <div>
          <img className="z-20 w-[28rem]" src={image} alt=" " />
        </div>
      </div>
    </div>
  );
}
