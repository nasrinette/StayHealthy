import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

interface AppInputProps {
  type: string;
  registerType?: string;
  placeholder: string;
  label?: string;
  register?: any;
  required?: string;
  validate?: Function | Object;
}

export default function AppInput({
  type,
  placeholder,
  label = "",
  register,
  required,
  registerType,
  validate,
}: AppInputProps) {
  const [show, setShow] = useState(false);
  const togglePasswordVisibility = () => {
    setShow(!show);
  };

  return (
    <div className="mt-4">
      <label
        htmlFor={type}
        className="font-body text-sm md:text-lg font-medium text-dark"
      >
        {label}
      </label>

      <div className="relative shadow-lg">
        <input
          {...register(registerType, {
            required: required,
            pattern:
              registerType === "text"
                ? {
                    value: /^[A-Za-z ]+$/,
                    message: "Your name can contain only letters",
                  }
                : registerType === "tel" && {
                    value: /^[0-9]+$/,
                    message: "Your number can contain only digits",
                  },

            minLength: registerType === "password" && {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            validate: validate,
          })}
          type={type === "password" && show ? "text" : type}
          id={registerType}
          className="bg-light placeholder:text-gray font-body font-light focus:outline focus:outline-1 focus:outline-mainBlue text-mainBlue text-sm md:text-base rounded-lg focus:ring-mainBlue focus:border-mainBlue block w-full pl-4 p-3 pr-10"
          placeholder={placeholder}
        />
        {type === "password" && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
            {show ? (
              <FaEyeSlash
                className="h-5 w-5 text-gray cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <FaEye
                className="h-5 w-5 text-gray cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            )}
          </div>
        )}
        {type === "search" && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
            <IoMdSearch className="h-5 w-5 text-gray cursor-pointer" />
          </div>
        )}
      </div>
    </div>
  );
}
