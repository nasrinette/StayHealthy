import { useNavigate } from "react-router-dom";
import background from "../assets/BACKGROUND.svg";
import AppButton from "../components/AppButton";
import AppInput from "../components/AppInput";
import AppHeading from "../components/AppHeading";
import Illustration from "../components/Illustration";
import { useForm, type FieldValues } from "react-hook-form";
import Error from "../components/Error";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    // TODO: submit to server
    // ...
    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
  };

  const navigate = useNavigate();
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="min-h-screen xl:px-20 px-10 p-3 w-full bg-gradient-to-r from-mainBlue to-lightBlue"
    >
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="fixed inset-0 bg-cover bg-center"
      ></div>

      <div className="flex mt-20 flex-wrap justify-center xl:justify-between items-center">
        <div className="bg-white p-10 py-5 bg-opacity-20 z-10 w-[50rem] ">
          <AppHeading className="text-white">Sign up</AppHeading>
          <p className="font-body md:text-lg font-light text-light mb-5">
            Already member?
            <span
              onClick={() => {
                navigate("/login");
              }}
              className="ml-2 underline cursor-pointer font-body md:text-lg font-medium text-dark"
            >
              Log in
            </span>
          </p>
          {errors.text && <Error>{`${errors.text.message}`}</Error>}
          <AppInput
            registerType="text"
            register={register}
            type="text"
            placeholder="Enter your name
              "
            required="Please enter your name"
          />
          {errors.tel && <Error>{`${errors.tel.message}`}</Error>}
          <AppInput
            registerType="tel"
            register={register}
            type="tel"
            placeholder="Enter your number
              "
            required="Please enter your phone number"
          />
          {errors.email && <Error>{`${errors.email.message}`}</Error>}
          <AppInput
            registerType="email"
            register={register}
            type="email"
            placeholder="Enter your email
"
            required="Email is required"
          />
          {errors.password && <Error>{`${errors.password.message}`}</Error>}
          <AppInput
            registerType="password"
            register={register}
            type="password"
            placeholder="Enter your password"
            required="Password is required"
          />
          {errors.confirmPass && (
            <Error>{`${errors.confirmPass.message}`}</Error>
          )}
          <AppInput
            registerType="confirmPass"
            register={register}
            type="password"
            placeholder="Confirm your password"
            required="Comfirming is required"
            validate={(value: any) =>
              value === getValues("password") || "Passwords must match"
            }
          />
          <div className="flex mt-6 flex-col md:flex-row items-center">
            <AppButton
              disabled={isSubmitting}
              type="submit"
              className="px-14 py-2"
              white
            >
              Sign up
            </AppButton>
            <AppButton
              onClick={() => reset()}
              className="px-14 mt-4 md:mt-0 md:ml-4 py-2"
              white
            >
              Reset
            </AppButton>
          </div>
        </div>
        <Illustration />
      </div>
    </form>
  );
}
