import { useNavigate } from "react-router-dom";
import background from "../assets/BACKGROUND.svg";
import AppButton from "../components/AppButton";
import AppInput from "../components/AppInput";
import AppHeading from "../components/AppHeading";
import Illustration from "../components/Illustration";
import { FieldValues, useForm } from "react-hook-form";
import Error from "../components/Error";

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="fixed inset-0 xl:px-20 px-10 p-3 w-full h-full md:h-screen bg-gradient-to-r from-mainBlue to-lightBlue"
    >
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="fixed inset-0 bg-cover bg-center"
      ></div>

      <div className="flex mt-20  md:mt-32 flex-wrap justify-center xl:justify-between items-center">
        <div className="bg-white p-10 py-20 bg-opacity-20 z-10 w-[50rem] ">
          <AppHeading className="text-white">Log in </AppHeading>
          <p className="font-body md:text-lg font-light text-light mb-4 ">
            Are you a new member?{" "}
            <span
              onClick={() => {
                navigate("/signup");
              }}
              className="cursor-pointer underline font-body text-sm md:text-lg font-medium text-dark"
            >
              {" "}
              Sign up Here
            </span>
          </p>
          <AppInput
            label="Email"
            registerType="email"
            register={register}
            type="email"
            placeholder="Enter your email
"
            required="Email is required"
          />
          {errors.email && <Error>{`${errors.email.message}`}</Error>}
          <AppInput
            label="Password"
            registerType="password"
            register={register}
            type="password"
            placeholder="Enter your password"
            required="Password is required"
          />
          {errors.password && <Error>{`${errors.password.message}`}</Error>}
          <div className="flex mt-8 flex-col md:flex-row items-center">
            <AppButton disabled={isSubmitting} className="px-14 py-2" white>
              Log in
            </AppButton>
            <AppButton
              onClick={() => reset()}
              className="px-14 mt-4 md:mt-0 md:ml-4 py-2"
              white
            >
              Reset
            </AppButton>
          </div>{" "}
          <div className="cursor-pointer underline font-body text-sm md:text-lg font-medium mt-2 text-dark">
            Forgot password
          </div>
        </div>
        <Illustration />
      </div>
    </form>
  );
}
